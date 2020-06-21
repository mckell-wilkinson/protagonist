<template>
  <div class="content">
    <Nav></Nav>
    <Stories></Stories>
    <!-- THIS IS THE LAST BLOG POSTED -->
    <div class="news">
      <div class="main-news-container">
        <div
          class="main-news"
          :style="{ background: `url('${blogPosts[0].image}')` }"
        >
          <nuxt-link :to="`blog/${blogPosts[0].slug}`">
            <div class="main-text-container">
              <p>{{ blogPosts[0].subject }}</p>
              <h3 class="black">{{ blogPosts[0].title }}</h3>
              <hr class="main-hr" />
              <p>{{ new Date(blogPosts[0].date).toDateString() }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <!-- THESE ARE THE NEXT 8 -->
      <div
        v-masonry
        transition-duration="0.1s"
        item-selector=".item"
        gutter="40"
        class="masonry-container"
      >
        <div
          v-masonry-tile
          class="item"
          v-for="(blog, index) in blogPosts"
          :key="blog.title"
          v-if="index && index < 9"
        >
          <nuxt-link :to="`blog/${blog.slug}`">
            <div class="story-content">
              <img :alt="blog.title" :src="blog.image" />
              <div class="second-text-container">
                <p>{{ blog.subject }}</p>
                <h3 class="black">{{ blog.title }}</h3>
                <hr class="second-hr" />
                <p>{{ new Date(blog.date).toDateString() }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- <a class="button wide black" href="/blog">More stories</a> -->
    </div>
    <About></About>
    <Newsletter></Newsletter>
    <Contact></Contact>
  </div>
</template>

<script>
import Nav from "~/components/nav.vue";
import Stories from "~/components/stories.vue";
import About from "~/components/about.vue";
import Newsletter from "~/components/newsletter.vue";
import Contact from "~/components/contact.vue";
import NoSSR from "vue-no-ssr";

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
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },

  components: {
    Nav,
    Stories,
    About,
    Newsletter,
    Contact,
    "no-ssr": NoSSR
  }
};
</script>

<style scoped>
.news {
  margin-bottom: 6em;
}

.main-news-container {
  height: 50vh;
}

.main-news {
  background-size: cover !important;
  height: 100% !important;
  background-position: center center !important;
  position: relative;
}

.main-news:before {
  content: " ";
  display: block;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
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
  text-align: center;
}

.main-text-container > p {
  text-transform: uppercase;
  font-size: 0.9em;
  opacity: 0.9;
}

.main-text-container > h3 {
  font-size: 2.4em;
  padding: 0 0.5em;
}

.main-hr {
  width: 20px;
  height: 5px;
  background: #fcee21;
  border: none;
}

.masonry-container {
  list-style-type: none;
  padding: 0;
}

.masonry-container > .item > a > .content > img {
  width: 60%;
}

.masonry-container > .item {
  position: relative;
  margin: 1em 0 0;
  padding: 0;
  width: 60%;
}

.second-text-container {
  background: #fff;
  position: absolute;
  top: 5%;
  right: 0;
  padding: 1em 0 1em 1em;
  transform: translateX(80%);
  color: #222;
  width: 80%;
}

.second-text-container > h3 {
  font-size: 1.1em;
  word-break: break-word;
}

.second-text-container > p {
  text-transform: uppercase;
  font-size: 0.7em;
  opacity: 0.8;
}

.second-hr {
  width: 20px;
  height: 5px;
  display: block;
  margin: 0.5em 0;
  background: #fcee21;
  border: none;
}

@media only screen and (min-width: 800px) {
  .second-text-container {
    position: relative;
    bottom: 50px;
    top: unset;
    left: unset;
    padding: 1em 0 1em 1em;
    transform: translateX(0);
    color: #222;
    width: 80%;
    text-decoration: none;
  }

  .second-text-container > h3 {
    font-size: 1.4em;
    word-break: break-word;
  }

  .masonry-container {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .masonry-container > .item {
    width: calc(50% - 20px);
    padding: 0;
  }

  .story-content {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .story-content > img {
    width: 100%;
  }
}

@media only screen and (min-width: 1200px) {
  .news {
    display: flex;
  }

  .main-news-container {
    width: 50%;
    padding: 0 1em 0 0;
    position: sticky;
    height: 100vh;
    top: 0;
  }

  .masonry-container {
    width: 50%;
  }

  .masonry-container > .item {
    margin: 0;
  }
}
</style>
