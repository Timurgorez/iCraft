<template>
  <div class="bag-page">
    <HeaderWhite />
    <notifications
      classes="custom-notification"
      group="app"
      position="top center"
    />
    <b-container class="default-max-container">
      <b-row>
        <b-col cols="12">
          <h1>Shopping Bag ({{ countProductsInBag }})</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg="8" xl="8">
          <b-container fluid>
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
              v-for="product in products"
              :product="product"
              :key="product.id + Math.random().toString(16)"
            />
          </b-container>
        </b-col>
        <b-col cols="12" lg="4" xl="4">
          <OrderSummary />
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
import OrderSummary from "../components/Checkout/OrderSummary.vue";

export default {
  name: "BagPage",
  props: "",
  data() {
    return {
      // products: []
    };
  },
  components: {
    HeaderWhite,
    Footer,
    ProductSlider,
    TableProduct,
    OrderSummary
  },
  methods: {},
  computed: {
    countProductsInBag() {
      return this.$store.getters.countProductsInBag;
    },
    products() {
      const arr = [];
      this.$store.getters.getProductsInBag.forEach(el => {
        const prod = Object.assign({}, this.$store.getters.product(el.prodId));
        prod["bag"] = el;
        arr.push(prod);
      });
      return arr;
    }
  },
  created() {
    // this.$store.getters.getProductsInBag.forEach(el => {
    //   const prod = Object.assign({}, this.$store.getters.product(el.prodId));
    //   prod["bag"] = el;
    //   this.products.push(prod);
    // });
  }
};
</script>
<style scoped lang="scss">
::v-deep .checkout-table__head {
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

::v-deep .custom-request {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
  .custom-request__hint {
    width: 18px;
    height: 18px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(0 .5)'%3E%3Ccircle cx='9' cy='9' r='9' fill='%237F13A6'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M9.68 10.384c0-.275.07-.511.211-.71.141-.198.357-.427.647-.687.237-.214.428-.403.573-.567.145-.164.27-.365.372-.601.103-.237.155-.512.155-.825 0-.65-.254-1.159-.762-1.53-.508-.37-1.19-.555-2.045-.555-.702 0-1.313.12-1.832.36-.52.241-.943.587-1.272 1.038l1.111.721c.42-.588 1.043-.882 1.867-.882.436 0 .783.1 1.043.298.26.199.39.458.39.779 0 .229-.068.433-.201.613-.134.18-.338.391-.613.635-.359.321-.632.617-.819.888-.187.271-.28.613-.28 1.025h1.454zm-.723 2.738c.26 0 .476-.086.648-.258.171-.172.257-.383.257-.635s-.086-.462-.257-.63c-.172-.168-.388-.252-.648-.252-.267 0-.486.084-.658.252-.172.168-.258.378-.258.63s.086.463.258.635c.172.172.391.258.658.258z'/%3E%3C/g%3E%3C/svg%3E%0A");
  }

  & > div:not(.custom-request__hint) {
    margin-right: 10px;
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
