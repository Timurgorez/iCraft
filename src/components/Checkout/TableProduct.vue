<template>
  <transition name="fade">
    <b-row class="table-product">
      <b-col cols="12" lg="6">
        <div class="first-block">
          <div class="img-block">
            <div class="img-block__img">
              <img :src="product.images[0]" :alt="product.name" />
            </div>
            <router-link
              :to="{ name: 'ProductPage', params: { id: product.id } }"
              class="product-card__link d-block  d-md-none d-lg-none d-xl-none"
              ><h3 class="desc-block__title">
                {{ product.name }}
              </h3>
            </router-link>
            <div class="img-block__btns">
              <button
                class="img-block__remove-btn d-none d-lg-block d-xl-block"
                @click="removeProductFromBag(product.bag.id)"
              >
                Remove
              </button>
            </div>
          </div>
          <div class="desc-block">
            <router-link
              :to="{ name: 'ProductPage', params: { id: product.id } }"
              class="product-card__link d-none d-md-block d-lg-block d-xl-block"
              ><h3 class="desc-block__title">
                {{ product.name }}
              </h3>
            </router-link>
            <div class="color-size-choosen">
              <div class="color">
                <ColorChoose
                  @model_color="model_color_trigger"
                  :initialColor="product.bag.color"
                  :one="true"
                />
              </div>
              <div class="size">
                <SizeChoose
                  @model_size="model_size_trigger"
                  :initialSize="product.bag.size"
                  :one="true"
                />
                <span class="d-none d-lg-block d-xl-block">Sizing Chart</span>
              </div>
            </div>
            <div class="d-none d-lg-block d-xl-block">
              <div class="custom-request">
                <Checkbox
                  labelText="This will be a gift"
                  inputName="gift-order"
                  :id="'gift-order-' + product.id"
                  value="true"
                  @changeHandler="customGiftHandler"
                />
                <div
                  class="custom-request__hint"
                  :id="'popover-gift__hint' + product.bag.id"
                ></div>

                <b-popover
                  custom-class="custom-popover"
                  :target="'popover-gift__hint' + product.bag.id"
                  triggers="hover"
                >
                  <h4>Placing Custom Orders</h4>
                  You can place a Custom Order for this item and provide seller
                  with your color and other product preferences and
                  modifications. You will be able to add this information at the
                  Checkout.
                </b-popover>
              </div>
              <div class="custom-request">
                <Checkbox
                  labelText="This is a Custom Order"
                  inputName="custom-order"
                  :id="'custom-order-' + product.id"
                  value="custom-order"
                  :checked="this.product.bag.customRequest"
                  @changeHandler="customRequstHandler"
                />
                <div
                  class="custom-request__hint"
                  :id="'popover-custom-request__hint' + product.bag.id"
                ></div>

                <b-popover
                  custom-class="custom-popover"
                  :target="'popover-custom-request__hint' + product.bag.id"
                  triggers="hover"
                >
                  <h4>Placing Custom Orders</h4>
                  You can place a Custom Order for this item and provide seller
                  with your color and other product preferences and
                  modifications. You will be able to add this information at the
                  Checkout.
                </b-popover>
              </div>
              <transition name="fade">
                <NoteForSeller
                  v-show="this.product.bag.customRequest"
                  labelText="Note for Seller (Optional)"
                  placeholder="Add Note to Seller"
                  inputName="note-order"
                  id="note-order"
                  @changeHandler="noteHandler"
                />
              </transition>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" lg="2">
        <div class="quantity">
          <span class="quantity__title d-block d-lg-none d-xl-none"
            >Quantity</span
          >
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
          <span class="quantity-available"
            >Only {{ product.available }} Avaliable</span
          >
        </div>
      </b-col>
      <b-col cols="12" lg="2">
        <div class="price">
          <span class="price-title d-block d-lg-none d-xl-none">Price:</span>
          <div class="prices-wrap">
            <span class="price__new"
              >$ {{ product.price.new }}
              <span class="price__currency">{{
                product.price.currency_code
              }}</span>
            </span>
            <span class="price__old"
              >$ {{ product.price.old }}
              <span class="price__currency">{{
                product.price.currency_code
              }}</span>
            </span>
          </div>
        </div>
      </b-col>
      <b-col cols="12" lg="2">
        <div class="count-sum-price">
          <span class="count-sum-price__title d-block d-lg-none d-xl-none">
            Amount:
          </span>
          <span class="count-sum-price__price">
            $ {{ countSumPrice }} {{ product.price.currency_code }}
          </span>
        </div>
      </b-col>

      <b-col cols="12" lg="2" class="d-block d-lg-none d-xl-none">
        <div class="custom-request">
          <Checkbox
            labelText="This will be a gift"
            inputName="gift-order"
            :id="'gift-order-' + product.id"
            value="true"
            @changeHandler="customGiftHandler"
          />
          <div
            class="custom-request__hint"
            :id="'popover-gift__hint' + product.bag.id"
          ></div>

          <b-popover
            custom-class="custom-popover"
            :target="'popover-gift__hint' + product.bag.id"
            triggers="hover"
          >
            <h4>Placing Custom Orders</h4>
            You can place a Custom Order for this item and provide seller with
            your color and other product preferences and modifications. You will
            be able to add this information at the Checkout.
          </b-popover>
        </div>
        <div class="custom-request">
          <Checkbox
            labelText="This is a Custom Order"
            inputName="custom-order"
            :id="'custom-order-' + product.id"
            value="custom-order"
            :checked="this.product.bag.customRequest"
            @changeHandler="customRequstHandler"
          />
          <div
            class="custom-request__hint"
            :id="'popover-custom-request__hint' + product.bag.id"
          ></div>

          <b-popover
            custom-class="custom-popover"
            :target="'popover-custom-request__hint' + product.bag.id"
            triggers="hover"
          >
            <h4>Placing Custom Orders</h4>
            You can place a Custom Order for this item and provide seller with
            your color and other product preferences and modifications. You will
            be able to add this information at the Checkout.
          </b-popover>
        </div>
        <transition name="fade">
          <NoteForSeller
            v-show="this.product.bag.customRequest"
            labelText="Note for Seller (Optional)"
            placeholder="Add Note to Seller"
            inputName="note-order"
            id="note-order"
            @changeHandler="noteHandler"
          />
        </transition>
      </b-col>

      <b-col cols="12" lg="2" class="d-block d-lg-none d-xl-none">
        <div class="img-block__remove-btn-wrap">
          <button
            class="img-block__remove-btn"
            @click="removeProductFromBag(product.bag.id)"
          >
            Remove
          </button>
        </div>
      </b-col>
    </b-row>
  </transition>
</template>

<script>
import { IntegerPlusminus } from "vue-integer-plusminus";
import Checkbox from "../FormElements/Checkbox.vue";
import SizeChoose from "../FormElements/SizeChoose.vue";
import ColorChoose from "../FormElements/ColorChoose.vue";
import NoteForSeller from "../FormElements/NoteForSeller.vue";

export default {
  name: "TableProduct",
  data() {
    return {
      quantity_min: 1,

      quantity_step: 1,
      model_quantity: this.product.bag.count,

      countSumPrice: this.product.price.new * this.product.bag.count

      // customRequst: this.product.bag.customRequst
    };
  },
  props: {
    product: Object
  },
  components: {
    IntegerPlusminus,
    Checkbox,
    SizeChoose,
    ColorChoose,
    NoteForSeller
  },
  methods: {
    customRequstHandler(val) {
      console.log("customRequstHandler");
      this.customRequst = val.target.checked;
      this.$store.commit("modifyFieldInBag", {
        id: this.product.bag.id,
        name: "customRequest",
        value: this.customRequst
      });
      if (this.customRequst) {
        this.$store.commit("modifyFieldInBag", {
          id: this.product.bag.id,
          name: "note",
          value: ""
        });
      }
    },
    customGiftHandler(val) {
      console.log("customGiftHandler", val.target.checked);
      this.$store.commit("modifyFieldInBag", {
        id: this.product.bag.id,
        name: "gift",
        value: val.target.checked
      });
    },
    noteHandler(val) {
      console.log("noteHandler", val);
      this.$store.commit("modifyFieldInBag", {
        id: this.product.bag.id,
        name: "note",
        value: val
      });
    },
    model_size_trigger(model_size) {
      this.$store.commit("modifyFieldInBag", {
        id: this.product.bag.id,
        name: "size",
        value: model_size
      });
    },
    model_color_trigger(model_color) {
      this.$store.commit("modifyFieldInBag", {
        id: this.product.bag.id,
        name: "color",
        value: model_color
      });
    },
    removeProductFromBag(id) {
      console.log(id);
      this.$store.commit("removeProductFromBag", id);
    }
  },
  computed: {
    quantity_max() {
      return this.product.available;
    }
  },
  watch: {
    model_quantity(value) {
      this.$store.commit("modifyFieldInBag", {
        id: this.product.bag.id,
        name: "count",
        value: value
      });
      this.countSumPrice = this.product.price.new * value;
    }
  },
  created() {
    console.log("Bag product ->", this.product);
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped lang="scss">
.table-product {
  border-bottom: 1px solid #d7d7d7;
  border-left: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
  padding-top: 15px;
  padding-bottom: 15px;
}

.first-block {
  display: flex;
  flex-wrap: wrap;
}

.img-block {
  width: 30%;
  padding-right: 20px;
  text-align: center;
}
.desc-block {
  width: 70%;
}

.desc-block__title {
  font-family: NeueKabel;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: normal;
  color: $purple_color_btn;
}

.quantity__title {
  font-family: $font_montserrat_regular;
  font-size: 16px;
  color: #000000;
  margin-bottom: 10px;
}
.quantity-available {
  font-family: $font_montserrat_regular;
  font-size: 14px;
  color: $text_color_red;
  display: inline-block;
  width: 100%;
}

.price-title {
  font-family: $font_montserrat_regular;
  font-size: 20px;
  color: #000;
}

.price__new {
  font-family: $font_montserrat_regular;
  font-size: 20px;
  color: #000000;
}

.price__new,
.price__old {
  display: inline-block;
  width: 100%;
}
.price__old {
  font-family: $font_montserrat_medium;
  font-size: 14px;
  font-weight: 500;
  color: #545454;
  padding-right: 10px;
  text-decoration: line-through;
}
.img-block__img {
  margin-bottom: 35px;
  img {
    max-height: 140px;
    width: 100%;
    max-width: 220px;
  }
}

.img-block__remove-btn {
  border: none;
  font-family: $font_montserrat_medium;
  font-size: 16px;
  color: #000000;
  background-color: transparent;
  padding-left: 30px;
  text-transform: uppercase;
  position: relative;
  &:before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='26px' height='26px' viewBox='0 0 26 26' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E1BA3205A-E980-4696-A271-6845886D6AF5%3C/title%3E%3Cg id='Step-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Shopping-Bag' transform='translate(-85.000000, -824.000000)' fill='%23000000'%3E%3Cg id='Helper/Product-1---1440-variant' transform='translate(50.000000, 663.000000)'%3E%3Cg id='Group-10' transform='translate(22.000000, 23.000000)'%3E%3Cg id='Group-5' transform='translate(13.000000, 5.000000)'%3E%3Cg id='icons/pluss-copy-3' transform='translate(0.000000, 133.000000)'%3E%3Cpath d='M16.6111111,5 L16.611,15.388 L27,15.3888889 L27,16.6111111 L16.611,16.611 L16.6111111,27 L15.3888889,27 L15.388,16.611 L5,16.6111111 L5,15.3888889 L15.388,15.388 L15.3888889,5 L16.6111111,5 Z' id='Combined-Shape' transform='translate(16.000000, 16.000000) rotate(45.000000) translate(-16.000000, -16.000000) '%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
    position: absolute;
    top: -6px;
    left: 0;
  }
}

.count-sum-price {
  font-family: $font_montserrat_regular;
  font-size: 20px;
  color: $text_color;
}

.count-sum-price__title {
  font-family: $font_montserrat_regular;
  font-size: 20px;
  color: $text_color;
}
.count-sum-price__price {
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 992px) {
  .quantity {
    text-align: right;
    margin-bottom: 20px;
  }
  .color-size-choosen {
    display: flex;
    flex-wrap: wrap;
  }
  .price {
    display: flex;
    justify-content: space-between;
  }
  .price__old {
    padding-right: 0;
  }
  .prices-wrap {
    text-align: right;
  }
  .count-sum-price {
    display: flex;
    justify-content: space-between;
  }
  .img-block__remove-btn-wrap {
    display: flex;
    justify-content: center;
    margin: 30px auto;
  }
  .count-sum-price {
    margin-bottom: 25px;
  }
}
@media only screen and (max-width: 768px) {
  .img-block {
    display: flex;
    width: 100%;
    text-align: left;
  }
  .desc-block {
    width: 100%;
  }
  .img-block__img {
    padding-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
