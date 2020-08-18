import Vue from 'vue'
import VueRouter from 'vue-router'
import CollectionPage from '@/views/CollectionPage.vue'
import ProductItem from "@/views/ProductItem.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
 // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CollectionPage',
      component: CollectionPage
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      props: true,
      component: ProductItem
    },
    {
      path: '/shopping-bag',
      name: 'ShoppingBag',
      component: CheckoutPage
    },
  ]
})
