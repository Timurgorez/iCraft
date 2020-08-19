<template>
  <div class="product-item">
    <!--    возможно там контейнер больше, надо уточнить-->
    <b-container class="default-max-container">
      <b-row>
        <b-col cols="12" md="6" lg="6" xl="6"></b-col>
        <b-col cols="12" md="6" lg="6" xl="6">
          <div class="main-actions">
            <h3>{{ product.name }}</h3>
            <div class="rating">
              <ProductRating :rating="product.rating" />
              <span>Product Reviews (5)</span>
            </div>
            <div class="price">
              <span class="price__new">$ {{ product.price.new }}</span>
              <span class="price__old">$ {{ product.price.old }}</span>
              <span class="price__currency">{{
                product.price.currency_code
              }}</span>
            </div>
            <p class="shipping-sale">
              Save $20.00 (15%) + Free Shipping to Canada
            </p>
            <div class="color">
              <ColorChoose @model_color="model_color_trigger" />
            </div>
            <div class="size">
              <SizeChoose @model_size="model_size_trigger" />
              <span>Sizing Chart</span>
            </div>

            <div class="quantity">
              <integer-plusminus
                :min="quantity_min"
                :max="quantity_max"
                :step="quantity_step"
                v-model="model_quantity"
              >
                {{ model_quantity }}
                <template slot="decrement">-</template>

                <template slot="increment">+</template>
              </integer-plusminus>
              <span>Only 1 Avaliable</span>
            </div>

            <div class="custom-request">
              <Checkbox
                labelText="This is a Custom Order"
                inputName="custom-order"
                id="custom-order"
                value="custom-order"
                @changeHandler="customRequstHandler"
              />
              <div
                class="custom-request__hint"
                id="popover-custom-request__hint"
              ></div>

              <b-popover
                custom-class="custom-popover"
                target="popover-custom-request__hint"
                :show.sync="popoverCustomRequest"
                triggers="hover"
              >
                <h4>Placing Custom Orders</h4>
                You can place a Custom Order for this item and provide seller
                with your color and other product preferences and modifications.
                You will be able to add this information at the Checkout.
              </b-popover>
            </div>
            <div class="action-buttons">
              <RedButton
                text="BUY NOW"
                iconClass="accepted-icon"
                :animate="true"
                customClass="buy-now__btn"
                @clickHandler="buyNowHandler"
              />
              <PurpleButton
                text="ADD TO BAG"
                iconClass="bag-icon"
                :animate="true"
                customClass="add-to-bag__btn"
                @clickHandler="addToBagHandler"
              />
            </div>
            <p>3 people have this in their shopping bag right now</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6" lg="6" xl="6"></b-col>
        <b-col cols="12" md="6" lg="6" xl="6">
          <div class="buy-set-save">
            <h3 class="buy-set-save__title">Buy a Set & Save!</h3>
            <div class="buy-set-save__offer">
              <BestOffer />
            </div>
            <div class="buy-set-save__btns">
              <PurpleButton
                text="Buy Now"
                iconClass="check-purple-icon"
                :animate="true"
                customClass="add-to-bag-best-offer__btn"
                @clickHandler="buyNowBestOfferHandler"
              />
              <PurpleButton
                text="Add to Bag"
                iconClass="bag-icon"
                :animate="true"
                customClass="add-to-bag-best-offer__btn"
                @clickHandler="addToBagBestOfferHandler"
              />
            </div>
          </div>

          <div class="more-from-stor-wrap">
            <h3 class="more-from-stor-wrap__title">More from this Store: 12</h3>
            <MoreFromThisStore />
            <p>442 Page Views</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { IntegerPlusminus } from "vue-integer-plusminus";

import ProductRating from "../components/CardArea/ProductRating.vue";
import PurpleButton from "../components/Buttons/PurpleButton.vue";
import RedButton from "../components/Buttons/RedButton.vue";
import Checkbox from "../components/FormElements/Checkbox.vue";
import SizeChoose from "../components/FormElements/SizeChoose.vue";
import ColorChoose from "../components/FormElements/ColorChoose.vue";
import BestOffer from "../components/CardArea/BestOffer.vue";
import MoreFromThisStore from "../components/CardArea/MoreFromThisStore.vue";

export default {
  name: "ProductItem",
  props: ["id"],
  data() {
    return {
      popoverCustomRequest: false,

      quantity_min: 1,
      quantity_max: 15,
      quantity_step: 1,
      model_quantity: 1,

      model_size: "",
      model_color: ""
    };
  },
  components: {
    IntegerPlusminus,

    ProductRating,
    PurpleButton,
    RedButton,
    Checkbox,
    SizeChoose,
    ColorChoose,
    BestOffer,
    MoreFromThisStore
  },
  methods: {
    addToBagHandler() {
      console.log("addToBagHandler");
    },
    buyNowHandler() {
      console.log("buyNowHandler");
    },
    addToBagBestOfferHandler() {
      console.log("addToBagBestOfferHandler");
    },
    buyNowBestOfferHandler() {
      console.log("buyNowBestOfferHandler");
    },
    customRequstHandler(e) {
      console.log("customRequstHandler", e);
    },
    model_size_trigger(model_size) {
      this.model_size = model_size;
    },
    model_color_trigger(model_color) {
      this.model_color = model_color;
    }
  },
  computed: {
    product() {
      return this.$store.getters.product(this.id);
    }
  }
};
</script>
<style scoped lang="scss">
.main-actions h3 {
  font-family: $font_montserrat_regular;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: normal;
  color: $text_color;
  margin-bottom: 0;
}
.rating {
  margin-bottom: 20px;
  span {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $purple_color_btn;
  }
  .product-rating {
    margin-right: 20px;
  }
}

.price {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.price__new {
  font-family: $font_montserrat_regular;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $red_color_btn;
  padding-right: 10px;
}
.price__old {
  font-family: $font_montserrat_medium;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $text_color;
  padding-right: 10px;
  text-decoration: line-through;
}
.price__currency {
  font-family: $font_montserrat_regular;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $purple_color_btn;
}

.shipping-sale {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $text_color_red;
  margin-bottom: 30px;
}

.color,
.size {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & > span {
    margin-bottom: 10px;
    color: $purple_color_btn;
    font-family: $font_montserrat_regular;
  }
}

.quantity {
  margin-bottom: 30px;
  & > span {
    font-family: $font_montserrat_regular;
    font-size: 16px;
  }
}

.custom-request {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & > div:not(.custom-request__hint) {
    margin-right: 10px;
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
}

.buy-now__btn {
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 30px;
  margin-right: 20px;
}
.add-to-bag__btn {
  padding-left: 86px;
  padding-right: 86px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.more-from-stor-wrap__title,
.buy-set-save__title {
  font-family: $font_montserrat_medium;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;
}

.buy-set-save__title {
  margin-top: 60px;
}

.buy-set-save__btns {
  margin-bottom: 60px;
  button {
    padding-left: 50px;
    padding-right: 50px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}

.more-from-stor-wrap {
  p {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    color: $text_color;
  }
}
</style>
