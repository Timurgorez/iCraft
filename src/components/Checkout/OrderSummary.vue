<template>
  <b-container class="order-summary">
    <b-row class="checkout-table__head d-flex" align-v="center">
      <b-col cols="12">
        <span>Order Summary</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="text-right">
        <p>
          Sub-total: <span>${{ sumPriceWithoutDiscount }}</span>
        </p>
        <p>
          Discounts:
          <span>-${{ sumPriceWithoutDiscount - sumPriceWithDiscount }}</span>
        </p>
        <p>DExpedited Shipping (by UPS): <span>$15.00</span></p>
        <p>Expedited Shipping (by Canada Post): <span>$25.00</span></p>
        <p>Insurance: <span>$25.00</span></p>
        <p>
          Total (CAD): <span>${{ sumPriceWithDiscount + 15 }}</span>
        </p>
        <p>(You Save ${{ sumPriceWithoutDiscount - sumPriceWithDiscount }})</p>
        <RedButton
          text="PROCEED TO CHECKOUT"
          iconClass="accepted-icon"
          :animate="true"
          customClass="buy-now__btn"
          @clickHandler="proceedToCheckoutHandler"
        />
        <p>Additional duties & taxes may apply</p>
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
  props: {},
  components: {
    RedButton
  },
  methods: {
    proceedToCheckoutHandler() {
      console.log("proceedToCheckoutHandler");
      this.$router.push("/checkout");
    }
  },
  computed: {
    sumPriceWithoutDiscount() {
      let sum = 0;
      this.$store.getters.getProductsInBag.forEach(el => {
        sum += this.$store.getters.product(el.prodId).price.old * el.count;
      });
      return sum;
    },
    sumPriceWithDiscount() {
      let sum = 0;
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
}
.text-right {
  border: 1px solid #d7d7d7;
  border-top: none;
}

@media only screen and (max-width: 480px) {
}
</style>
