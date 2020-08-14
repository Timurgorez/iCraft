import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue, {
  breakpoints: [`xs`, 'sm', 'md', 'lg', 'xl', 'el', 'max']
})
// Optionally install the BootstrapVue icon components plugin
// Only needed if you want to use the bootstrap icons. Be aware these are currently in alpha
Vue.use(IconsPlugin);


// Import Bootstrap and Bootstrap-Vue css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
