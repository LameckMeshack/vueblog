import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../Pages/Homepage.vue";
import Createpage from "../Pages/Create.vue";
import Singleblog from "../Pages/SingleBlog.vue";
import Login from "../Pages/Login.vue";
import NotFound from "../Pages/404.vue";
import SearchPage from "../components/Search.vue";
// import store from "../store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
  {
    path: "/create",
    name: "create",
    component: Createpage,
  },
  {
    path: "/search",
    name: "search",
    component: SearchPage,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/blog/:id",
    name: "singleblog",
    component: Singleblog,
  },
  // redirect
  {
    path: "/all-blogs",
    redirect: "/",
  },
  // catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../Pages/AboutView.vue"),

  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//beforeEach
// router.beforeEach((to, from, next) => {
//   //get login state from the store
//   const state = store.getters["isLoggedIn"];
//   //check if the user is logged in proceed to route create
//   if (to.name === "create" && !state) next({ name: "login" });
// });

export default router;
