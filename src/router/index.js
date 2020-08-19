import Vue from "vue";
import VueRouter from "vue-router";
import CollectionPage from "@/views/CollectionPage";
import ProductItem from "@/views/ProductItem";
import CheckoutPage from "@/views/CheckoutPage";

Vue.use(VueRouter);

export default new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "CollectionPage",
      component: CollectionPage
    },
    {
      path: "/product/:id",
      name: "ProductPage",
      props: true,
      component: ProductItem
    },
    {
      path: "/shopping-bag",
      name: "ShoppingBag",
      component: CheckoutPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
