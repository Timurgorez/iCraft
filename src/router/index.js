import Vue from 'vue'
import VueRouter from 'vue-router'
import CollectionPage from '../views/CollectionPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'CollectionPage',
    component: CollectionPage
  },
  {
    path: '/item/:id',
    name: 'item',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductItem.vue')
  },
  {
    path: '/shopping-bag',
    name: 'ShoppingBag',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckoutPage.vue')
  },
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
