<template>
  <div>
    <Header />
    <div>
      <div>
        <ul id="blog-list">
          <!-- Limits number of blogposts displayed to three -->
          <li class="blog-item" v-for="(blog, index) in blogs" :key="index">
            <div>
              <ul>
                <li>
                  <nuxt-link :to="`blog/${blog.slug}`"
                    ><img :src="blog.image" :alt="`${blog.title}`" />
                  </nuxt-link>
                </li>
                <li>
                  <h4>
                    <nuxt-link :to="`blog/${blog.slug}`">{{
                      blog.title
                    }}</nuxt-link>
                  </h4>
                  <p>{{ blog.description }}</p>
                  <p>
                    {{ new Date(blog.date).toDateString() }}
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <no-ssr>
      <infinite-loading @infinite="infiniteScroll"
        ><div slot="no-more">That's everything!</div></infinite-loading
      >
    </no-ssr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //used to show next ten blogs on click of moreBlogs
      blogIncrementer: 10,
      blogs: []
    };
  },
  head() {
    return {
      title: `The Protaganist | Blog`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: ""
        }
      ]
    };
  },

  mounted() {
    const blogPosts = this.$store.state.blogPosts;
    //show first 10 blog posts on page load
    const blog = blogPosts.slice(0, 10);
    for (let i = 0; i < blog.length; i++) {
      this.blogs.push(blog[i]);
    }
  },

  methods: {

    //this will add the next ten blogs on scorll to bottom of page

    moreBlogs(n, state) {
      const blogPostsNew = this.$store.state.blogPosts;
      const blogsNew = blogPostsNew.slice(0, n + 9);
      const blogList = document.getElementById("blog-list");

      for (n; n < blogsNew.length; n++) {
        this.blogs.push(blogsNew[n]);
      }

      this.blogIncrementer = this.blogIncrementer + 9;

      //remove the spinner if all blogs shown

      if (blogPostsNew.length === blogsNew.length) {
        state.complete();
      }
    },

    //add more blogs and add spinner if there are more blogs to show

    infiniteScroll($state) {
      this.moreBlogs(this.blogIncrementer, $state);
      $state.loaded();
    }
  }
};
</script>
