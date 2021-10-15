import Vue from "vue";
import App from "./App.vue";
import VueResorce from "vue-resource";
import VueCarousel from "vue-carousel";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueResorce);
Vue.use(VueCarousel);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
