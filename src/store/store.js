import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    blogs: [],
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
    //geting blog by id
    getBlogById(state, id) {
      return state.blogs.find((blog) => blog.id === id);
    },
    //create blog
    createBlog(state, blog) {
      state.blogs.push(blog);
    },
    //update blog
    updateBlog(state, blog) {
      const index = state.blogs.findIndex((b) => b.id === blog.id);
      if (index !== -1) {
        state.blogs.splice(index, 1, blog);
      }
    },

    // delete blog
    deleteBlog(state, id) {
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
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
    createBlog({ commit }, blog) {
      commit("createBlog", blog);
    },
    updateblog({ commit }, blog) {
      commit("updateBlog", blog);
    },
    getBlogById({ commit }, id) {
      commit("getBlogById", id);
    },
    //delete
    deleteBlog({ commit }, blog) {
      commit("setBlogs", blog);
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    blogs(state) {
      return state.blogs;
    },
    //getting blog by id
    blogById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id === id);
    },
  },
});
