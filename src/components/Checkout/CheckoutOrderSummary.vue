<template>
<div class="order-item">
  <div class="mb-4" v-for="product in products"
       :key="product.id + Math.random().toString(16)"
       :class="products.length > 1 && products.lastIndexOf(product) !== (products.length - 1) ? 'border-bottom' : ''">
    <div class="order-item__details d-flex flex-row mb-0 mb-sm-0 mb-md-3 mb-lg-3 mb-xl-3 mt-4" >
      <div class="order-item__img">
        <img :src="product.images[0]" />
      </div>
      <div class="order-item__info">
        <h3 class="order-item__name">{{ product.name }}</h3>
        <div class="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex flex-row mb-3">
          <div class="order-item__color d-flex align-items-center mr-3">
            <p class="mb-0 mr-2">Color:</p>
            <div class="order-item__color-size order-item__product-color"></div>
          </div>
          <div class="order-item__size d-flex align-items-center">
            <p class="mb-0 mr-2">Size:</p>
            <div class="order-item__color-size order-item__product-size">{{ product.bag.size }}</div>
          </div>
        </div>
        <p class="order-item__price mb-0 d-none d-sm-none d-md-block d-lg-block d-xl-block">{{ product.bag.count }} x  {{product.price.currency_formatting}}{{ product.price.new }} {{ product.price.currency_code}}</p>
      </div>
    </div>
    <div class="d-flex flex-column mb-4 d-sm-flex d-md-none d-lg-none d-xl-none">
      <div class="d-flex flex-row mb-3">
        <div class="order-item__color d-flex align-items-center mr-3">
          <p class="mb-0 mr-2">Color:</p>
          <div class="order-item__color-size order-item__product-color"></div>
        </div>
        <div class="order-item__size d-flex align-items-center">
          <p class="mb-0 mr-2">Size:</p>
          <div class="order-item__color-size order-item__product-size">{{ product.bag.size }}</div>
        </div>
      </div>
      <p class="order-item__price mb-0">{{ product.bag.count }} x  {{product.price.currency_formatting}}{{ product.price.new }} {{ product.price.currency_code}}</p>
    </div>
    <div class="d-flex flex-row">
      <div class="order-item__selected-options d-flex align-items-center mb-2">This is a gift</div>
      <div class="custom-request__hint"></div>
    </div>
    <div v-if="product.bag.customRequest" class="d-flex flex-row">
      <div class="order-item__selected-options d-flex align-items-center mb-2">This is a Custom Order</div>
      <div class="custom-request__hint"></div>
    </div>
    <div class="d-flex flex-row flex-wrap mt-3 mb-2 justify-content-sm-center justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start">
      <div class="order-item__actions order-item__remove mr-5 d-flex align-items-center">REMOVE</div>
      <div class="order-item__actions order-item__edit d-flex align-items-center">EDIT</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CheckoutOrderSummary",
  props: {
    products: Array
  }
}
</script>

<style scoped lang="scss">
.order-item {

  .border-bottom {
    border-bottom: 2px solid #d7d7d7;
  }

  &__img {
   padding-right: 10px;

    img {
      max-width: 180px;
      max-height: 130px;
      border-radius: 6px;
      border: solid 2px #ffffff;
    }
  }

  &__name {
    font-family: $font_neue_kabel;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: $text_color;
  }

  &__color-size {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font_montserrat_regular;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  &__product-size {
    background-color: #f3f3f3;
    border: solid 1px #d8d8d8;
  }
  &__product-color {
    background-image: url("~@/assets/tmp/im-3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__price {
    font-family: $font_montserrat_regular;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  &__selected-options {
    font-family: $font_montserrat_regular;
    font-size: 14px;
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

  .custom-request__hint {
    width: 18px;
    height: 18px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(0 .5)'%3E%3Ccircle cx='9' cy='9' r='9' fill='%237F13A6'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M9.68 10.384c0-.275.07-.511.211-.71.141-.198.357-.427.647-.687.237-.214.428-.403.573-.567.145-.164.27-.365.372-.601.103-.237.155-.512.155-.825 0-.65-.254-1.159-.762-1.53-.508-.37-1.19-.555-2.045-.555-.702 0-1.313.12-1.832.36-.52.241-.943.587-1.272 1.038l1.111.721c.42-.588 1.043-.882 1.867-.882.436 0 .783.1 1.043.298.26.199.39.458.39.779 0 .229-.068.433-.201.613-.134.18-.338.391-.613.635-.359.321-.632.617-.819.888-.187.271-.28.613-.28 1.025h1.454zm-.723 2.738c.26 0 .476-.086.648-.258.171-.172.257-.383.257-.635s-.086-.462-.257-.63c-.172-.168-.388-.252-.648-.252-.267 0-.486.084-.658.252-.172.168-.258.378-.258.63s.086.463.258.635c.172.172.391.258.658.258z'/%3E%3C/g%3E%3C/svg%3E%0A");
    position: relative;
    top: 5px;
    left: 8px;
  }

  &__actions {
    font-family: $font-montserrat_medium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  &__edit::before {
    content: url("~@/assets/edit.svg");
    width: 30px;
    height: 20px;
  }
  &__remove::before {
    content: url("~@/assets/remove.svg");
    width: 30px;
    height: 33px;
  }
}

@media screen and (max-width: 576px){
  .order-item {
    .mobile-bottom {
      border-bottom: 2px solid #d7d7d7;
    }

    &__price {
      font-size: 20px;
    }
    &__color-size {
      width: 36px;
      height: 36px;
      font-size: 16px;
    }
  }
}
</style>