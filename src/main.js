import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueCardFormat from "vue-credit-card-validation";

import Notifications from "vue-notification";

import SwiperCore, { Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/swiper-bundle.css";

// install Swiper components
SwiperCore.use([Autoplay, EffectFade]);

import "./directives/index.js";

Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper);
Vue.use(IconsPlugin);
Vue.use(VueCardFormat);

Vue.use(Notifications);

// Import Bootstrap and Bootstrap-Vue css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseUserBag");
    this.$store.commit("initialiseShoppingType");
  },
  render: h => h(App),
  created() {
    this.$store.dispatch("loadProducts");
  }
}).$mount("#app");
