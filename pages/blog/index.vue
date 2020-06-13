<template>
  <article>
    <h1>{{blogPost.title}}</h1>
    <div v-html="$md.render(blogPost.body)" />
  </article>
</template>

<script>

export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
};

</script>