import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueCardFormat from "vue-credit-card-validation";


import Notifications from "vue-notification";

Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper);
Vue.use(IconsPlugin);
Vue.use(VueCardFormat);

Vue.use(Notifications);

// Import Bootstrap and Bootstrap-Vue css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import 'swiper/css/swiper.css'
import "swiper/swiper-bundle.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseUserBag");
  },
  render: h => h(App),
  created() {
    this.$store.dispatch("loadProducts");
  }
}).$mount("#app");
