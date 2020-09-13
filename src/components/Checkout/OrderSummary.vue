<template>
  <b-container fluid class="order-summary">
    <b-row
      v-if="!checkoutPage"
      class="checkout-table__head d-flex"
      align-v="center"
    >
      <b-col cols="12">
        <span>Order Summary</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        :class="checkoutPage ? 'text-right no-border' : 'text-right'"
      >
        <div class="price-desc">
          <p>
            Sub-total:
            <span
              >{{ (product && product.price.currency_formatting) || "$"
              }}{{ sumPriceWithoutDiscount }}</span
            >
          </p>
          <p>
            Discounts:
            <span class="red-text"
              >-{{ (product && product.price.currency_formatting) || "$"
              }}{{ sumPriceWithoutDiscount - sumPriceWithDiscount }}</span
            >
          </p>
          <p>
            DExpedited Shipping (by UPS):
            <span
              >{{
                (product && product.price.currency_formatting) || "$"
              }}15.00</span
            >
          </p>
          <p>
            Expedited Shipping (by Canada Post):
            <span
              >{{
                (product && product.price.currency_formatting) || "$"
              }}25.00</span
            >
          </p>
          <p>
            Insurance:
            <span
              >{{
                (product && product.price.currency_formatting) || "$"
              }}25.00</span
            >
          </p>
        </div>
        <p class="price-total">
          Total ({{ (product && product.price.currency_code) || "CAD" }}):
          <span
            >{{ (product && product.price.currency_formatting) || "$"
            }}{{ sumPriceWithDiscount + 15 }}</span
          >
        </p>
        <p>
          (You Save {{ (product && product.price.currency_formatting) || "$"
          }}{{ sumPriceWithoutDiscount - sumPriceWithDiscount }})
        </p>
        <p v-if="!checkoutPage">
          <RedButton
            text="PROCEED TO CHECKOUT"
            iconClass="accepted-icon"
            :animate="true"
            customClass="proceed-btn"
            @clickHandler="proceedToCheckoutHandler"
          />
        </p>
        <p v-if="checkoutPage">
          <RedButton
            text="PLACE ORDER"
            iconClass="place-order-icon"
            :animate="true"
            customClass="place-order-btn"
            @clickHandler="placeOrder"
          />
        </p>
        <p>
          <router-link
            :to="{ name: 'CollectionPage' }"
            class="price-additianal-duties"
            >Additional duties & taxes <span>may apply</span>
          </router-link>
        </p>
        <p v-if="!checkoutPage">
          <router-link
            :to="{ name: 'CollectionPage' }"
            class="back-to-products__link"
            ><span class="back-to-products__icon"></span>Continue Shopping
          </router-link>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RedButton from "../Buttons/RedButton.vue";

export default {
  name: "OrderSummary",
  data() {
    return {};
  },
  props: {
    product: Object,
    checkoutPage: Boolean
  },
  components: {
    RedButton
  },
  methods: {
    proceedToCheckoutHandler() {
      console.log("proceedToCheckoutHandler");
      this.$router.push("/checkout");
    },
    placeOrder() {
      console.log("placeOrder");
    }
  },
  computed: {
    sumPriceWithoutDiscount() {
      let sum = 0;
      this.$store.getters.getProductsInBag &&
        this.$store.getters.getProductsInBag.forEach(el => {
          sum += this.$store.getters.product(el.prodId).price.old * el.count;
        });
      return sum;
    },
    sumPriceWithDiscount() {
      let sum = 0;
      this.$store.getters.getProductsInBag &&
        this.$store.getters.getProductsInBag.forEach(el => {
          sum += this.$store.getters.product(el.prodId).price.new * el.count;
        });
      return sum;
    }
  },
  created() {},
  destroyed() {}
};
</script>

<style scoped lang="scss">
.order-summary {
  position: sticky;
  top: 0;
  p {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    color: #000000;
  }
  .red-text {
    color: $text_color_red;
  }
  .price-desc span {
    min-width: 90px;
    display: inline-block;
  }
  .price-total {
    font-family: $font_montserrat_medium;
    font-size: 22px;
    margin-top: 40px;
    span {
      padding-left: 20px;
    }
  }
  .price-additianal-duties {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    color: $purple_color_btn;
    margin-bottom: 60px;
    display: inline-block;
    span {
      color: #000000;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
.text-right {
  border: 1px solid #d7d7d7;
  border-top: none;
  padding: 30px;
}

.no-border {
  border: none;
}

.proceed-btn {
  margin-bottom: 30px;
}

.place-order-btn {
  padding: 10px 70px;
}

.back-to-products__link {
  font-family: $font_montserrat_regular;
  font-size: 20px;
  color: $purple_color_btn;
  display: inline-flex;
  align-items: center;
  &:hover {
    color: $purple_color_btn;
    text-decoration: none;
  }
}
.back-to-products__icon {
  display: inline-block;
  margin-right: 11px;
  height: 18px;
  width: 18px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M5.024 9.891l7.685 7.74c.49.492 1.282.492 1.77 0 .49-.493.49-1.29 0-1.783L7.68 9l6.8-6.848c.49-.492.49-1.29 0-1.783-.488-.492-1.28-.492-1.77 0L5.024 8.11c-.244.246-.367.568-.367.89 0 .323.123.646.367.892z'/%3E%3C/svg%3E%0A");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

@media only screen and (max-width: 992px) {
}
</style>
