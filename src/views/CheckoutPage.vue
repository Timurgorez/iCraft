<template>
  <div class="checkout-page">
    <HeaderWhite/>
    <b-container class="default-max-container">
      <b-row>
        <b-col cols="12">
          <div class="checkout-page__title mb-3">
            <h2 class="mt-4">Guest Checkout</h2>
            <div class="mt-4 d-flex flex-row flex-wrap align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-start justify-content-sm-start justify-content-start">
              <p class="mb-0">You will have an opportunity to create an account later, if you'd like.</p>
              <div class="checkout-page__sign-in d-flex flex-row align-items-center">
                <p class="mb-0">Existing Customer? <a href="#">Sign In</a> or Sign with</p>
                <div class="checkout-page__sign-in-options d-flex flex-row align-items-center">
                  <div class="sign-in-icon google-sign-in"></div>
                  <div class="sign-in-icon facebook-sign-in"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="checkout-page__table-header default-max-container d-flex align-items-center">
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6">
            <span>Shippment and Payment</span>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6">
            <span>Order Summary</span>
          </b-col>
      </b-row>
    </b-container>
    <b-container class="default-max-container">
      <b-row class="gray-bg">
        <b-col cols="12" sm="12" md="6" lg="6" xl="6">
          <ShipmentInfo />
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="checkout-page__order-summary">
          <CheckoutOrderSummary />
          <CheckoutOrderSummary />
        </b-col>
      </b-row>
    </b-container>

    <div class="separator"></div>
    <b-container class="default-max-container">
      <b-row class="gray-bg">
        <b-col cols="12" sm="12" md="6" lg="6" xl="6">
          <PaymentForm class="mt-4" />
          <ContactInfo/>
          <div class="d-flex flex-row align-items-center mt-4 mb-4">
            <h3 class="mr-4">Billing Address</h3>
            <div class="mr-4 shipping-action-btn shipping-action-btn__select d-flex align-items-center">Select Address </div>
            <div class="shipping-action-btn shipping-action-btn__add-new d-flex align-items-center">Add New</div>

          </div>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="checkout-page__order-summary">
          <OrderSummary :checkout-page="true" :product="firstProduct" ></OrderSummary>
        </b-col>
      </b-row>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
import HeaderWhite from "@/components/Header/HeaderWhite";
import Footer from "@/components/Footer/Footer";
import ShipmentInfo from "@/components/Checkout/ShipmentInfo";
import CheckoutOrderSummary from "@/components/Checkout/CheckoutOrderSummary";
import PaymentForm from "@/components/FormElements/PaymentForm";
import ContactInfo from "@/components/FormElements/ContactInfo";
import OrderSummary from "@/components/Checkout/OrderSummary";
export default {
  name: "CheckoutPage",
  components: {
    OrderSummary,
    ContactInfo,
    PaymentForm,
    CheckoutOrderSummary,
    ShipmentInfo,
    Footer,
    HeaderWhite
  },
  data() {
    return{}
  },
  computed: {
    firstProduct() {
      return this.$store.getters.getProductsInBag[0]
          ? this.$store.getters.product(
              this.$store.getters.getProductsInBag[0].prodId
          )
          : null;
    }
  }
}
</script>

<style scoped lang="scss">
.gray-bg {
  margin-right: -30px;
}

.separator {
  height: 15px;
  width: 100%;
  background-color: #ebebeb;
}

.checkout-page {
  h2 {
    font-family: $font_neue_kabel;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.75;
    letter-spacing: normal;
    color: $text_color;
  }

  h3 {
    font-family: $font_montserrat_medium;
    font-size: 22px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: 0;
  }

  p {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  a {
    color: $purple_color_btn;
  }

  &__sign-in {
    p {
      font-size: 22px;
    }
  }
  &__sign-in-options {
    .sign-in-icon {
      width: 32px;
      height: 32px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      margin: 0 5px;
    }
    .google-sign-in {
      background-image: url("~@/assets/google.svg");
    }
    .facebook-sign-in {
      background-image: url("~@/assets/facebook-2.svg");
    }
  }

  &__order-summary {
    background-color: $checkout_bg_gray;
  }

  .shipping-action-btn {
    font-family: $font_montserrat_medium;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;

    &__select {
      &:before {
        width: 35px;
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill-rule='evenodd' d='M25.707 3.33c-.39-.39-1.024-.39-1.414 0L8.083 19.54l-6.376-6.375c-.39-.391-1.024-.391-1.414 0-.39.39-.39 1.023 0 1.414l7.083 7.083c.39.39 1.024.39 1.414 0L25.707 4.745c.39-.39.39-1.024 0-1.415z'/%3E%3C/svg%3E%0A");
      }
    }
    &__add-new {
      &:before {
        width: 35px;
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill-rule='evenodd' d='M13.611 2v10.388H24v1.223H13.611V24H12.39l-.001-10.389H2V12.39l10.388-.001V2h1.223z'/%3E%3C/svg%3E%0A");
      }
    }
  }
}

::v-deep .checkout-page__table-header {
  text-transform: uppercase;
  background-color: #d9d9d9;
  font-family: $font_montserrat_bold;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  min-height: 60px;
}
</style>