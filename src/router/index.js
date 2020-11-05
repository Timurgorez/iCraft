import Vue from "vue";
import VueRouter from "vue-router";
import CollectionPage from "@/views/CollectionPage";
import ProductItem from "@/views/ProductItem";
import BagPage from "@/views/BagPage";
import CheckoutPage from "@/views/CheckoutPage";
import Purchase from "@/views/Purchase";
import CollectionPageNew from "@/views/CollectionPageNew";
import HomePage from "@/views/HomePage";

Vue.use(VueRouter);

export default new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/new",
      name: "CollectionPageNew",
      component: CollectionPageNew
    },
    {
      path: "/old",
      name: "CollectionPage",
      props: true,
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
      component: BagPage
    },
    {
      path: "/checkout",
      name: "CheckoutPage",
      component: CheckoutPage
    },
    {
      path: "/purchase",
      name: "Purchase",
      component: Purchase
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
