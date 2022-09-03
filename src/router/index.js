import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../Pages/Homepage.vue";
import Createpage from "../Pages/Create.vue";
import Singleblog from "../Pages/SingleBlog.vue";
import Login from "../Pages/Login.vue";

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
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/blog/:id",
    name: "singleblog",
    component: Singleblog,
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

export default router;
