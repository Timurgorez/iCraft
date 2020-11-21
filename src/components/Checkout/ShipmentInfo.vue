<template>
  <div class="shipment-info mt-4 mb-4">
    <div class="shipment-info__title d-flex flex-row justify-content-between">
      <div class="shipment-info__text">
        <h3 class="title-text"><span>SHIPMENT {{index + 1}}</span> ({{quantity}} Products)</h3>
      </div>
      <router-link :class="['shipment-info__edit']" :to="{ name: 'ShoppingBag' }">
        EDIT
      </router-link>
    </div>
    <div class="shipment-info__product-images d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
      <div class="image-wrapper" v-for="product in products"
           :key="product.id + Math.random().toString(16)">
        <div class="div-img" :style="{'background-image': 'url('+ product.images[0] +')'}" />
      </div>
    </div>
    <div v-if="selectedAddress" class="shipment-info__address">
      <div class="shipment-info__gray-box">
        <h3 class="title-text">Shipping Address</h3>
        <p class="sub-text">
          {{ selectedAddress.name }} <br />
          {{ selectedAddress.zip_code }}
          {{ selectedAddress.address }} <br />
          {{ selectedAddress.state }}<br />
          {{ selectedAddress.country }}
        </p>
        <div class="same-billing-address d-flex align-items-end mb-2">Same as Billing Address</div>
      </div>
    </div>
    <div v-else class="not-select-address">Click "EDIT" and select shipping address</div>
    <div class="shipment-info__delivery">
      <h3 class="title-text">Delivery Options</h3>
      <p class="sub-text">Expedited Shipping by Canada Post (+ $25.00)</p>
      <p class="sub-text">Add Insurance (+ $25.00)</p>
      <p class="sub-text">Expected Delivery:  <span class="expected-date">June 15, 2020</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShipmentInfo",
  props: {
    quantity: Number,
    products: Array,
    index: Number
  },
  computed: {
    selectedAddress(){
      return this.$store.getters.getSelectedAddressBySellerId(this.products[0].seller.id);
    }
  },
  methods: {

  },
  mounted(){
    console.log('ERWT', this.$store.getters.getSelectedAddressBySellerId(this.products[0].seller.id));
  }
}
</script>

<style scoped lang="scss">
.not-select-address{
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $text_color_red;
  margin: 25px 0;
}
.shipment-info {

  .title-text {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text_color;
  }

  .sub-text {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
  }

  &__text {
    span {
      font-family: $font-montserrat_bold;
      text-transform: uppercase;
    }
  }
  &__edit {
    font-family: $font-montserrat_medium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    display: flex;
    color: #212529;
    &::before {
      content: url("~@/assets/edit.svg");
      width: 30px;
      height: 20px;
    }
  }

  &__product-images {
    margin: 20px 0;

    .image-wrapper {
      margin-right: 15px;
    }

    .div-img {
      width: 80px;
      height: 60px;
      border-radius: 6px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &__gray-box {
    margin: 15px 0;
    background-color: $checkout_bg_gray;
    border: 1px solid $checkout_border_gray;
    border-radius: 4px;
    max-width: 360px;
    padding: 20px;

    .same-billing-address {
      font-family: $font_montserrat_regular;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;

      &::before {
        content: url("~@/assets/yes.svg");
        width: 35px;
        height: 26px;
      }
    }
  }
  &__delivery {
    p {
      margin-bottom: 0;
    }
    .expected-date {
      font-family: $font_montserrat_bold;
    }
  }
}

</style>