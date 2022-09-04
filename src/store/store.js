import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    blogs: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
  },

  actions: {
    login({ commit }, user) {
      commit("setUser", user);
      commit("setToken", user.token);
    },
    logout({ commit }) {
      commit("setUser", null);
    },
    setBlogs({ commit }, blogs) {
      commit("setBlogs", blogs);
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
});
