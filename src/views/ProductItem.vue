<template>
  <div class="product-item">
    <HeaderWhite />
    <b-container class="product-max-container">
      <b-row>
        <b-col cols="12">
          <div class="back-to-products">
            <a href="/" class="back-to-products__link"
              ><span class="back-to-products__icon"></span>Back To All
              Products</a
            >
          </div>
        </b-col>
      </b-row>
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
        <b-col cols="12" md="6" lg="6" xl="6">
          <div class="product-info">
            <div class="collapse-border-bottom">
              <div
                class="product-info__toggle d-flex flex-row justify-content-between align-items-center"
                v-b-toggle.collapse-description
              >
                <p class="product-info__toggle-title">Description</p>
                <div class="product-info__toggle-arrow"></div>
              </div>
              <b-collapse visible id="collapse-description" class="mt-2">
                <div class="product-info__text">
                  <div class="d-flex flex-row">
                    <ul class="product-info__main-info">
                      <li class="product-info__main-info-item list-mb">
                        Dominant Color:
                      </li>
                      <li class="product-info__main-info-item list-mb">
                        Materials:
                      </li>
                      <li class="product-info__main-info-item list-mb">
                        Size:
                      </li>
                    </ul>
                    <div class="product-info__list-data">
                      <div
                        class="product-info__color d-flex flex-row flex-wrap align-items-center list-mb"
                      >
                        <div
                          class="product-info__main-color mr-2"
                          style="background-color: #000000"
                        ></div>
                        <span>Black</span>
                      </div>
                      <div class="product-info__category list-mb">
                        <p>
                          Japanese Beads, French Sequins, Leather on reverse
                        </p>
                      </div>
                      <div class="product-info__size list-mb">
                        <p>S, M, L, XL</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    Hair Clips with Japanese and Czech beads embroidery, genuine
                    leather on reverse. This little piece of jewelry can dress
                    up a casual outfit, or complete a formal outfit. Whether you
                    have an ordinary or special day - there will be room for
                    your little new friend.
                  </p>
                  <div class="product-info__remainder mt-4 mb-4">
                    <p>
                      Please note that if this item is sold out, it will be
                      recreated or custom made for your order and may differ
                      slightly from the photo. Also, please allow additional
                      time for the product to be created.
                    </p>
                  </div>
                </div>
              </b-collapse>
            </div>

            <div class="collapse-border-bottom">
              <div
                class="product-info__toggle d-flex flex-row justify-content-between align-items-center"
                v-b-toggle.collapse-shipping
              >
                <p class="product-info__toggle-title">Shipping Options</p>
                <div class="product-info__toggle-arrow"></div>
              </div>
              <b-collapse id="collapse-shipping" class="mt-2">
                <div class="product-info__text">
                  <p>Local Pickup is Not Available.</p>
                  <p>Item ships from: Yaroslavl', Yaroslavl Oblast’, Russia.</p>
                  <ul>
                    <li>
                      Shipping to Russia: $3.00 USD by Russian Post.
                    </li>
                    <li>
                      Shipping worldwide: $15.00 USD by Russian Post.
                    </li>
                  </ul>
                  <p>All items will be shipped from: Yaroslavl, Russia</p>
                </div>
              </b-collapse>
            </div>

            <div class="collapse-border-bottom">
              <div
                class="product-info__toggle d-flex flex-row justify-content-between align-items-center"
                v-b-toggle.collapse-returns
              >
                <p class="product-info__toggle-title">Returns & Refunds</p>
                <div class="product-info__toggle-arrow"></div>
              </div>
              <b-collapse id="collapse-returns" class="mt-3">
                <div class="product-info__text">
                  <p>Return: Yes, only within 14 Days</p>
                  <p class="mt-4 mb-5">
                    Refund: Exchange Only I'll exchange your item if it's not
                    damaged. Shipping is not covered.
                  </p>
                </div>
              </b-collapse>
            </div>

            <div class="collapse-border-bottom">
              <div
                class="product-info__toggle d-flex flex-row justify-content-between align-items-center"
                v-b-toggle.collapse-payment
              >
                <p class="product-info__toggle-title">Payment Methods</p>
                <div class="product-info__toggle-arrow"></div>
              </div>
              <b-collapse id="collapse-payment" class="mt-2">
                <div class="product-info__text"></div>
              </b-collapse>
            </div>

            <div class="collapse-border-bottom">
              <div
                class="product-info__toggle d-flex flex-row justify-content-between align-items-center"
                v-b-toggle.collapse-seller
              >
                <p class="product-info__toggle-title">Seller Information</p>
                <div class="product-info__toggle-arrow"></div>
              </div>
              <b-collapse id="collapse-seller" class="mt-2">
                <div class="product-info__text"></div>
              </b-collapse>
            </div>
          </div>
        </b-col>
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
import HeaderWhite from "../components/Header/HeaderWhite.vue";

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
    MoreFromThisStore,
    HeaderWhite
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
  padding-left: 80px;
  padding-right: 80px;
  margin-top: 30px;
  margin-right: 20px;
}
.add-to-bag__btn {
  padding-left: 66px;
  padding-right: 66px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.back-to-products {
  min-height: 84px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &__link {
    font-family: $font_montserrat_regular;
    font-size: 20px;
    color: $purple_color_btn;
    display: flex;
    align-items: center;
    &:hover {
      color: $purple_color_btn;
      text-decoration: none;
    }
  }
  &__icon {
    display: inline-block;
    margin-right: 11px;
    height: 18px;
    width: 18px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M5.024 9.891l7.685 7.74c.49.492 1.282.492 1.77 0 .49-.493.49-1.29 0-1.783L7.68 9l6.8-6.848c.49-.492.49-1.29 0-1.783-.488-.492-1.28-.492-1.77 0L5.024 8.11c-.244.246-.367.568-.367.89 0 .323.123.646.367.892z'/%3E%3C/svg%3E%0A");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
}

@media only screen and (max-width: 768px) {
  .back-to-products__link {
    font-size: 16px;
  }
  .main-actions h3 {
    font-size: 20px;
  }
  .price__new {
    font-size: 30px;
  }
  .price__currency,
  .price__old {
    font-size: 22px;
  }
  .shipping-sale {
    font-size: 16px;
  }
  .size {
    flex-wrap: nowrap;
    & > span {
      font-size: 14px;
    }
  }
  .main-actions > p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 480px) {
  .buy-now__btn {
    width: 100%;
    margin-right: 0;
  }
  .add-to-bag__btn {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-set-save__btns button {
    width: 100%;
    margin-right: 0;
  }
}

// ---------------------

.product-info {
  &:focus {
    outline: none;
  }

  .list-mb {
    margin-bottom: 20px;
  }

  .collapse-border-bottom {
    border-bottom: 1px solid $border_grey_color;
  }

  &__toggle {
    width: 100%;
    margin: 10px 0;
    padding: 10px 0;

    &:focus {
      outline: none;
    }

    &.collapsed {
      .product-info__toggle-arrow {
        transform: rotateZ(-180deg);
      }
    }
  }

  &__toggle-title {
    font-family: $font_montserrat_medium;
    font-size: 22px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.05;
    letter-spacing: normal;
    color: #000000;
    margin: 0;
  }

  &__toggle-arrow {
    background-image: url("~@/assets/arrow-toggle.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    width: 36px;
    height: 36px;
    transition: transform 0.2s;
  }

  &__text {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;

    span,
    p {
      font-size: 16px;
      margin-bottom: 0;
    }
  }

  &__main-color {
    width: 29px;
    height: 29px;
    border-radius: 2px;
    border: solid 2px #545454;
  }

  &__main-info {
    padding-left: 18px;
    margin-right: 40px;
  }

  &__color {
    margin-top: -5px;
  }

  &__remainder {
    border-radius: 6px;
    border: solid 1px $purple_color_btn;
    background-color: $purple_background_color;

    p {
      margin: 10px 10px;
    }
  }
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
