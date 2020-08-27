<template>
  <div class="checkout-page">
    <HeaderWhite />
    <notifications
      classes="custom-notification"
      group="app"
      position="top center"
    />
    <b-container class="product-max-container">
      <b-row>
        <b-col cols="12">
          <h1>Shopping Bag ({{ countProductsInBag }})</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="8" lg="8" xl="8">
          <b-container>
            <b-row class="checkout-table__head d-flex" align-v="center">
              <b-col cols="6">
                <span>Product</span>
              </b-col>
              <b-col cols="2">
                <span>Quantity</span>
              </b-col>
              <b-col cols="2">
                <span>Price</span>
              </b-col>
              <b-col cols="2">
                <span>Amount</span>
              </b-col>
            </b-row>
            <b-row class="checkout-table__shipment d-flex" align-v="center">
              <b-col cols="12">
                <p><b>Shipment 1 </b> (2 Products)</p>
              </b-col>
            </b-row>
            <TableProduct
              v-for="item in products"
              :product="item"
              :key="item.id + Math.random().toString(16)"
            />
          </b-container>
        </b-col>
        <b-col cols="12" md="4" lg="4" xl="4">
          <h1>Order Summary</h1>
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
import TableProduct from "../components/Checkout/TableProduct.vue";

export default {
  name: "ProductItem",
  props: "",
  data() {
    return {
      products: []
    };
  },
  components: {
    HeaderWhite,
    Footer,
    ProductSlider,
    TableProduct
  },
  methods: {},
  computed: {
    countProductsInBag() {
      return this.$store.getters.countProductsInBag;
    }
  },
  created() {
    this.$store.getters.getProductsInBag.forEach(el => {
      const prod = Object.assign({}, this.$store.getters.product(el.id));
      for (let key in el) {
        prod[key] = el[key];
      }
      this.products.push(prod);
    });
  }
};
</script>
<style scoped lang="scss">
.checkout-table__head {
  text-transform: uppercase;
  background-color: #d9d9d9;
  font-family: $font_montserrat_bold;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  min-height: 60px;
}
.checkout-table__shipment {
  background-color: #d9d9d9;
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  min-height: 60px;
  background: $bg_grey;
  border-left: solid 1px #d9d9d9;
  border-right: solid 1px #d9d9d9;
  p {
    margin: 0;
  }
  b {
    text-transform: uppercase;
  }
}
@media only screen and (max-width: 480px) {
  .buy-set-save__btns {
    button {
      margin-right: 0;
    }
  }
}
</style>
