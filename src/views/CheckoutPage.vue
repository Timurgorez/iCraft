<template>
  <div class="checkout-page">
    <HeaderMain />
    <notifications
      class="custom-notification-wrap"
      classes="custom-notification"
      group="app-product"
      position="top center"
    />
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <div class="checkout-page__title mb-3">
            <h2 class="mt-4">Guest Checkout</h2>
            <div
              class="mt-4 d-flex flex-row flex-wrap align-items-center justify-content-xl-between justify-content-lg-between justify-content-md-start justify-content-sm-start justify-content-start"
            >
              <p class="mb-0">
                You will have an opportunity to create an account later, if
                you'd like.
              </p>
              <div
                class="checkout-page__sign-in d-flex flex-row align-items-center"
              >
                <p
                  class="mb-0 mt-sm-3 mt-3 mt-md-0 mt-lg-0 mt-lg-0 mr-5 mr-sm-0 mr-md-0 mr-lg-0 mr-xl-0"
                >
                  Existing Customer? <a href="#">Sign In</a> or Sign with
                </p>
                <div
                  class="checkout-page__sign-in-options d-flex flex-row align-items-center"
                >
                  <div class="sign-in-icon google-sign-in"></div>
                  <div class="sign-in-icon facebook-sign-in"></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      fluid
      class="checkout-page__table-header d-none d-sm-none d-md-flex align-items-center d-lg-flex d-xl-flex"
    >
      <b-row>
        <b-col cols="12" sm="12" md="6" lg="6" xl="6">
          <span>Shippment and Payment</span>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6" xl="6">
          <span>Order Summary</span>
        </b-col>
      </b-row>
    </b-container>
    <div
      class="separator d-block d-sm-block d-md-none d-lg-none d-xl-none"
    ></div>
    <div
      v-for="(product, key, index) in products"
      :key="index + Math.random().toString(16)"
    >
      <b-container fluid>
        <b-row class="gray-bg">
          <b-col cols="12" sm="12" md="6" lg="6" xl="6">
            <ShipmentInfo :quantity="product.length" :products="product" :index="index" />
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="checkout-page__order-summary d-none d-sm-none d-md-block d-lg-block d-xl-block"
          >
            <CheckoutOrderSummary :products="product" />
          </b-col>
        </b-row>
      </b-container>
      <div class="separator"></div>
    </div>

    <b-container fluid>
      <b-row class="gray-bg">
        <b-col cols="12" sm="12" md="6" lg="6" xl="6">
          <PaymentForm class="mt-4" />
          <ContactInfo />
          <div
            class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row mt-4 mb-4"
          >
            <h3 class="mr-4 mb-3">Billing Address</h3>
            <div
              class="mr-4 mb-3 shipping-action-btn shipping-action-btn__select d-flex align-items-center"
            >
              Select Address
            </div>
          </div>
        </b-col>
        <b-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="checkout-page__order-summary d-none d-sm-none d-md-block d-lg-block d-xl-block"
        >
          <OrderSummary
            :checkout-page="true"
            :product="firstProduct"
          ></OrderSummary>
        </b-col>
      </b-row>
    </b-container>
    <div class="separator"></div>
    <!-- Mobile blocks   -->
    <b-container
      fluid
      class="checkout-page__table-header d-flex d-sm-flex d-md-none align-items-center d-lg-none d-xl-none"
    >
      <b-row>
        <b-col cols="12" sm="12">
          <span>Order Summary</span>
        </b-col>
      </b-row>
    </b-container>
    <div
      class="d-block d-sm-block d-md-none d-lg-none d-xl-none"
      v-for="(product, key, index) in products"
      :key="index + Math.random().toString(16)"
    >
      <b-container fluid>
        <b-row class="gray-bg">
          <b-col cols="12" sm="12" class="checkout-page__order-summary">
            <CheckoutOrderSummary :products="product" />
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container fluid class="d-block d-sm-block d-md-none d-lg-none d-xl-none">
      <b-row>
        <b-col cols="12">
          <OrderSummary
            :checkout-page="true"
            :product="firstProduct"
          ></OrderSummary>
        </b-col>
      </b-row>
    </b-container>
    <!-- Mobile blocks   -->
    <ProductSlider bgc="#fff" title="Saved For Later (6 items)" />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from "@/components/Header/HeaderMain";
import FooterMain from "@/components/Footer/FooterMain";
import ShipmentInfo from "@/components/Checkout/ShipmentInfo";
import CheckoutOrderSummary from "@/components/Checkout/CheckoutOrderSummary";
import PaymentForm from "@/components/FormElements/PaymentForm";
import ContactInfo from "@/components/FormElements/ContactInfo";
import OrderSummary from "@/components/Checkout/OrderSummary";
import ProductSlider from "@/components/StaticComponents/ProductSlider/ProductSlider";

export default {
  name: "CheckoutPage",
  components: {
    ProductSlider,
    OrderSummary,
    ContactInfo,
    PaymentForm,
    CheckoutOrderSummary,
    ShipmentInfo,
    FooterMain,
    HeaderMain
  },
  data() {
    return {};
  },
  computed: {
    products() {
      const arrSort = {};
      this.$store.getters.getProductsInBag.forEach(el => {
        const prod = Object.assign({}, this.$store.getters.product(el.prodId));
        prod["bag"] = el;

        if (prod.seller.id in arrSort) {
          arrSort[prod.seller.id].push(prod);
        } else {
          arrSort[prod.seller.id] = [prod];
        }
      });
      console.log("RTEST  ->", arrSort);
      return arrSort;
    },
    firstProduct() {
      return this.$store.getters.getProductsInBag[0]
        ? this.$store.getters.product(
            this.$store.getters.getProductsInBag[0].prodId
          )
        : null;
    }
  }
};
</script>

<style scoped lang="scss">
.container-fluid {
  padding-left: 30px;
}
.gray-bg {
  //margin-right: -30px;
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

@media screen and (max-width: 576px) {
  .container-fluid {
    padding-left: 15px;
  }
  .checkout-page {
    &__title {
      h2 {
        font-size: 26px;
      }
      p {
        font-size: 14px;
      }
    }
    &__sign-in {
      p {
        font-size: 14px;
      }
    }
    .sign-in-icon {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
