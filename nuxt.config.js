export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "~/fonts/Fraunces-Bold.ttf" },
      { rel: "stylesheet", href: "~/fonts/Lato-Bold.ttf" },
      { rel: "stylesheet", href: "~/fonts/Lato-Regular.ttf" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/infiniteloading", ssr: false },
    { src: "~/plugins/vue-masonry", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/markdownit"],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ["external_library"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  // dynamic routes
  generate: {
    routes: function() {
      const fs = require("fs");
      const path = require("path");
      return fs.readdirSync("./assets/content/blog").map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        };
      });
    }
  }
};
