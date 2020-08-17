import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import product from './product/index'
import payment from './payment/index'

export default new Vuex.Store({
  modules: {
    product: product,
    payment: payment
  }
})
