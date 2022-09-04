import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import "./main.css";

import CKEditor from "ckeditor4-vue";
import router from "./router";
import jwtpagination from "jw-vue-pagination";
Vue.use(CKEditor);
Vue.component("jw-pagination", jwtpagination);
// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
