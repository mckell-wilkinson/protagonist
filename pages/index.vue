<template>
  <div class="content">
    <Nav></Nav>
    <Stories></Stories>
    <!-- THIS IS THE LAST BLOG POSTED -->
    <div class="main-news">
      <nuxt-link :to="`blog/${blogPosts[0].slug}`">
        <img
          class="main-news-img"
          :alt="blogPosts[0].title"
          :src="blogPosts[0].image"
        />
        <div class="main-text-container">
          <p>{{ blogPosts[0].subject }}</p>
          <h3 class="black">{{ blogPosts[0].title }}</h3>
          <hr class="main-hr" />
          <p>{{ new Date(blogPosts[0].date).toDateString() }}</p>
        </div>
      </nuxt-link>
    </div>

    <!-- THESE ARE THE NEXT 8 -->
    <ul class="stories-list">
      <li
        v-for="(blog, index) in blogPosts"
        :key="blog.title"
        v-if="index && index < 9"
      >
        <nuxt-link :to="`blog/${blog.slug}`">
          <img :alt="blog.title" :src="blog.image" />
          <div class="second-text-container">
            <p>{{ blog.subject }}</p>
            <h3 class="black">{{ blog.title }}</h3>
            <hr class="second-hr" />
            <p>{{ new Date(blog.date).toDateString() }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <a class="button black" href="/blog">More stories</a>
  </div>
</template>

<script>
import Nav from "~/components/nav.vue";
import Stories from "~/components/stories.vue";

export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },

  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  },
  components: {
    Nav,
    Stories
  }
};
</script>

<style scoped>
.main-news {
  position: relative;
  text-align: center;
}

.main-news-img {
  filter: brightness(60%);
  position: relative;
}

.main-text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  margin: 0;
  padding: 0;
  width: 100%;
}

.main-text-container > p {
  text-transform: uppercase;
  font-size: 0.9em;
  opacity: 0.9;
}

.main-text-container > h3 {
  font-size: 2.4em;
}

.main-hr {
  width: 20px;
  height: 5px;
  background: #fcee21;
  border: none;
}

.stories-list {
  list-style-type: none;
  margin: 2em 0 0;
  padding: 0;
}

.stories-list > li > a > img {
  width: 70%;
}

.stories-list > li {
  position: relative;
  margin: 2em 0;
}

.second-text-container {
  background: #fff;
  position: absolute;
  top: 50%;
  left: 72%;
  padding: 2em;
  transform: translate(-50%, -50%);
  color: #222;
  width: 40%;
}

.second-text-container > h3 {
  font-size: 1.2em;
    word-break: break-word;
}

.second-text-container > p {
  text-transform: uppercase;
  font-size: 0.7em;
}

.second-hr {
  width: 20px;
  height: 5px;
  display: block;
  margin: 0.5em 0;
  background: #fcee21;
  border: none;
}


</style>
