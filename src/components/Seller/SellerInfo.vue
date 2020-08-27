<template>
  <div class="seller-info">
    <div class="seller-info__main d-flex flex-wrap flex-row mb-4 justify-content-sm-center justify-content-center justify-content-xl-start justify-content-md-start justify-content-lg-start">
      <div class="seller-info__photo mr-3 d-flex flex-row align-items-end"  :style="{ backgroundImage: 'url(/tmp/group-10.jpg)' }">
       <div class="seller-info__info">
        <div class="seller-info__verify-seller"></div>
        <div class="custom-request__hint"></div>
       </div>
      </div>
      <div class="seller-info__data mt-sm-4 mt-4 mt-md-0 mt-lg-0 mt-xl-0 text-center text-sm-center text-md-left text-lg-left text-xl-left">
        <p class="seller-info__name">Natalie Designs</p>
        <p class="seller-info__city mb-4">Moscow, Russia</p>
        <PurpleButton text="CONTACT SELLER" icon-class="message" :animate="true"></PurpleButton>
      </div>
    </div>
    <div class="seller-info__description">
      <p class="mb-0">| am a crochet and jewelry designer. | share my inner self with the world by creating things for people with love, care and attention to detail. My hope is for everyone to have at least one piece of unique handmade apparel that they can treasure, knowing it was made by someone who put their heart into it.</p>
      <b-link class="seller-info__more-info">Read More</b-link>
      <div class="d-flex flex-row align-items-center mt-3loppp">
        <p class="mb-0">Seller Feedback</p>
        <ProductRating :rating="rating" :before="true"></ProductRating>
      </div>
    </div>
  </div>
</template>

<script>
import PurpleButton from "@/components/Buttons/PurpleButton";
import ProductRating from "@/components/ProductInfo/Rating";

export default {
  name: "SellerInfo",
  components: {ProductRating, PurpleButton},
  props: {
    seller: Object
  },
  data() {
    return{
      rating: {
        stars: 4,
        count: 7
      }
    }
  }
}
</script>

<style scoped lang="scss">
.seller-info {
  &__photo {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    min-width: 100px;
    max-width: 190px;
    min-height: 150px;
    max-height: 190px;
  }

  &__verify-seller {
    background-image: url("~@/assets/verified-seler.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 190px;
    max-height: 50px;
    min-height: 40px;
    width: 100%;
    height: 100%;
    position: relative;
    top: 15px;
    left: 10px;
  }

  &__info {
    display: contents;
  }

  &__name {
    font-family: $font_montserrat_medium;
    font-size: 22px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.05;
    letter-spacing: normal;
    color: #000000;

  }
  &__city {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }

  &__description {
    margin-top: 40px;
  }

  &__more-info {
    color: $purple_color_btn;
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
}
</style>