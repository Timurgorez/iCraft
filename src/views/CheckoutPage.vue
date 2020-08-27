<template>
  <div class="checkout-page">
    <HeaderWhite />
    <notifications classes="custom-notification" group="app" position="top center"/>
    <b-container class="product-max-container">
      <b-row>
        <b-col cols="12">
          <h1>Shopping Bag ({{countProductsInBag}})</h1>
          <div>{{products}}</div>
        </b-col>
      </b-row>
    </b-container>
    <ProductSlider />
    <Footer />
  </div>
</template>
<script>
import HeaderWhite from "../components/Header/HeaderWhite.vue";
import Footer from "../components/Footer/Footer.vue";
import ProductSlider from "../components/StaticComponents/ProductSlider/ProductSlider.vue";

export default {
  name: "ProductItem",
  props: "",
  data() {
    return {
      
    };
  },
  components: {
    HeaderWhite,
    Footer,
    ProductSlider
  },
  methods: {
    
  },
  computed: {
    countProductsInBag() {
      return this.$store.getters.countProductsInBag;
    },
    products() {
      console.log('getProductsForBag', this.$store.getters.getProductsForBag);
      return this.$store.getters.getProductsForBag;
    }
  }
};
</script>
<style scoped lang="scss">



@media only screen and (max-width: 480px) {
  .buy-set-save__btns {
    button {
      margin-right: 0;
    }
  }
}


</style>

