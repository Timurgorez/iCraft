<template>
  <div class="product-item">
    <!--    возможно там контейнер больше, надо уточнить-->
    <b-container fluid="xl">
      <b-row>
        <b-col cols="12" md="6" lg="6" xl="6"></b-col>
        <b-col cols="12" md="6" lg="6" xl="6">
          <div class="main-actions">
            <h3>{{ this.product.name }}</h3>
            <div class="rating">
              <ProductRating :rating="this.product.reting" />
              <span>Product Reviews (5)</span>
            </div>
            <div class="price">
              <span class="price__new">$ {{ this.product.price.new }}</span>
              <span class="price__old">$ {{ this.product.price.old }}</span>
              <span class="price__currency">{{
                this.product.price.currency_code
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
            <div class="quantity">quantity</div>
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
        <b-col cols="12" md="6" lg="6" xl="6"></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProductRating from "../components/CardArea/ProductRating.vue";
import PurpleButton from "../components/Buttons/PurpleButton.vue";
import RedButton from "../components/Buttons/RedButton.vue";
import Checkbox from "../components/FormElements/Checkbox.vue";
import SizeChoose from "../components/FormElements/SizeChoose.vue";
import ColorChoose from "../components/FormElements/ColorChoose.vue";

export default {
  name: "ProductItem",
  data() {
    return {
      popoverCustomRequest: false,
      reting: {
        count: 17,
        stars: 3
      },

      model_size: "",
      model_color: ""
    };
  },
  components: {
    ProductRating,
    PurpleButton,
    RedButton,
    Checkbox,
    SizeChoose,
    ColorChoose
  },
  methods: {
    addToBagHandler() {
      console.log("addToBagHandler", this.product);
    },
    buyNowHandler() {
      console.log("buyNowHandler");
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
      return this.$store.getters.products.find(
        obj => obj.id == this.$route.params.id
      );
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
}
.rating {
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
}

.color,
.size {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  span {
    margin-bottom: 10px;
    color: $purple_color_btn;
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
</style>
