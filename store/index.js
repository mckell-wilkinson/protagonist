export const state = () => ({
    blogPosts: [],
  });
  
  export const mutations = {
    setBlogPosts(state, list) {
      state.blogPosts = list;
    },
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let files = await require.context('~/assets/content/blog/', false, /\.json$/);
      let blogPosts = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      });
      blogPosts.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      await commit('setBlogPosts', blogPosts);
    },
  };