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
        <div class="text-container">
          <p>{{ blogPosts[0].subject }}</p>
          <h3 class="black">{{ blogPosts[0].title }}</h3>
          <hr />
          <p>{{ new Date(blogPosts[0].date).toDateString() }}</p>
        </div>
      </nuxt-link>
    </div>

    <!-- THESE ARE THE NEXT 8 -->
    <ul>
      <li
        v-for="(blog, index) in blogPosts"
        :key="blog.title"
        v-if="index && index < 9"
      >
        <nuxt-link :to="`blog/${blog.slug}`">
          <img :alt="blog.title" :src="blog.image" />
          <p>{{ blog.subject }}</p>
          <h3>{{ blog.title }}</h3>
          <p>{{ new Date(blog.date).toDateString() }}</p>
        </nuxt-link>
      </li>
    </ul>
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

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  margin: 0;
  padding: 0;
  width: 100%;
}

.text-container > p {
  text-transform: uppercase;
  font-size: 0.7em;
  opacity: 0.9;
}

.text-container > h3 {
  font-size: 2.2em;
}

hr {
  width: 20px;
  height: 5px;
  background: #fcee21;
  border: none;
}
</style>
