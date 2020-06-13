<template>
  <div>
    <!-- THIS IS THE LAST BLOG POSTED -->
    <nuxt-link :to="`blog/${blogPosts[0].slug}`">
      <img :alt="blogPosts[0].title" :src="blogPosts[0].image" />
      <p>{{ blogPosts[0].subject }}</p>
      <p>{{ blogPosts[0].title }}</p>
   <p>{{ new Date(blogPosts[0].date).toDateString() }}</p>
    </nuxt-link>

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
          <p>{{ blog.title }}</p>
          <p>{{ new Date(blog.date).toDateString() }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

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
    Logo
  }
};
</script>
