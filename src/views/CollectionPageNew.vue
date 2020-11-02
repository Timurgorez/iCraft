<template>
  <div>
    <notifications
      class="custom-notification-wrap"
      classes="custom-notification"
      group="app-product"
      position="top center"
    />
    <HeaderMain />

    <SliderMain />

    <b-container fluid="xl">
      <b-row align-h="center" class="text-center">
        <b-col cols="12" class="centered">
          <div class="main-desc-block">
            <h3>Buy Exclusive Handmade Jewelry Direct from Crafters</h3>
            <img
              src="~@/assets/desctop/pages/collectionPage/for-title-2.svg"
              alt=""
            />
            <p>
              The iCraft Marketplace specializes in handmade art and crafts. We
              bring you the most unique, high quality jewelry from trusted
              sellers around the world. Most items are exclusive to iCraft and
              when sold out, can be recreated at your request - uniquely for
              you. By the way, nothing is mass-produced. Ever.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <FilterProduct
      v-if="!isMobile"
      :products="products"
      @filterProduct="filterProduct"
    />

    <WrapperCard :productItems="products" :limit="12" />
    <WhyBuyHere />
    <WrapperCard :productItems="products" :limit="8" />

    <div class="load-more mb-5">
      <b-container fluid="xl">
        <b-row cols="12" align-v="center" align-h="center">
          <PurpleButton
            text="LOAD MORE"
            iconClass="d-none"
            @clickHandler="loadMoreHandler"
          />
        </b-row>
      </b-container>
    </div>

    <div class="footer-subscribe-block">
      <b-container fluid="xl">
        <b-row align-v="center" class="text-center">
          <b-col cols="12" class="centered">
            <div class="footer-subscribe-block__wrap">
              <h3 class="footer-subscribe-block__title">
                Be The First To Know
              </h3>
              <p class="footer-subscribe-block__text">
                Subscribe to our Newsletter to stay up-to-date on new arrivals
                and special deals.
              </p>
              <form
                action=""
                @submit.prevent="subscribeSubmit"
                :class="['footer-subscribe-block__form', isEmailValid()]"
              >
                <div class="footer-subscribe-block__input-wrap">
                  <input
                    class="footer-subscribe-block__input"
                    type="text"
                    v-model="subscribe_email"
                  />
                  <button
                    type="submit"
                    class="footer-subscribe-block__submit"
                  ></button>
                </div>
                <span
                  v-if="validationError"
                  class="footer-subscribe-block__validation-error"
                  >{{ validationError }}</span
                >
              </form>
              <b-modal
                dialog-class="thx-for-subscribe"
                @hide="hideModal"
                ref="subscribe_modal"
                hide-footer
                hide-header
              >
                <span
                  @click="$refs['subscribe_modal'].hide()"
                  class="thx-for-subscribe__close"
                ></span>
                <div>
                  <h3>
                    Thank you for Subscribing<br />
                    to our Newsletter!
                  </h3>
                  <p class="my-4">
                    We've sent you an email to confirm your subscription.
                  </p>
                </div>
              </b-modal>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from "../components/Header/HeaderMain.vue";
import FooterMain from "../components/Footer/FooterMain.vue";
import FilterProduct from "../components/FilterProduct/FilterProduct.vue";
import WrapperCard from "../components/ProductInfo/WrapperCard.vue";
import WhyBuyHere from "../components/StaticComponents/WhyBuyHere/WhyBuyHere.vue";
import PurpleButton from "../components/Buttons/PurpleButton.vue";
import SliderMain from "../components/SliderMain/SliderMain.vue";

export default {
  name: "CollectionPageNew",
  data() {
    return {
      isMobile: false,
      subscribe_email: "",
      validationError: ""
    };
  },
  components: {
    FilterProduct,
    WrapperCard,
    HeaderMain,
    WhyBuyHere,
    FooterMain,
    PurpleButton,
    SliderMain
  },
  mounted() {
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler, { passive: true });
  },
  methods: {
    isMobileHandler() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        window.innerWidth < 992
      ) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    filterProduct(newProducts) {
      this.$store.dispatch("filterProducts", newProducts);
    },
    subscribeSubmit() {
      const email = this.subscribe_email.trim();
      if (email == "") {
        this.validationError = "This field is mandatory!";
        return;
      }
      if (this.isEmailValid() === "has-error") {
        this.validationError = "You are already subscribed with this email.";
        return;
      }
      this.validationError = "";
      this.$refs["subscribe_modal"].show();
    },
    hideModal() {
      this.subscribe_email = "";
    },

    isEmailValid: function() {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // regex.test(String(this.subscribe_email.trim()).toLowerCase()) ? '' : 'has-error';
      return this.subscribe_email == ""
        ? ""
        : regex.test(this.subscribe_email)
        ? ""
        : "has-error";
    },
    loadMoreHandler() {
      console.log("Load More");
    }
  },

  computed: {
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-block__text {
  min-height: 517px;
  width: 100%;
  background-image: url("~@/assets/desctop/pages/collectionPage/topImg-cropped.png");
  background-color: #f2f4ef;
  background-size: contain;
  background-position: 20% 50%;
  background-repeat: no-repeat;
  position: relative;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.3);
  text-align: right;
  padding-bottom: 15px;

  h2 {
    font-family: $font_montserrat_regular;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: $text_color;
  }

  h1 {
    font-family: $font_neue_kabel;
    font-size: 40px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.75;
    letter-spacing: normal;
    text-align: center;
    color: $text_color;
    text-transform: uppercase;
    margin-bottom: 35px;
  }
}

.header-block__text-wrap {
  display: inline-block;
  text-align: center;
  margin-top: 50px;
}

.header-block__image {
  max-width: 410px;
  width: 100%;
}

.main-desc-block {
  padding: 60px 0 30px;
  text-align: center;

  h3 {
    font-family: $font_neue_kabel;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: center;
    color: $text_color;
    margin-bottom: 20px;
  }

  img {
    margin-bottom: 20px;
  }

  p {
    font-family: $font_montserrat_regular;
    font-size: 1.25rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: normal;
    color: #000000;
    text-align: left;
  }
}

.purple-custom-btn {
  padding: 16px 80px;

  &:focus {
    outline: none;
  }
}

.footer-subscribe-block {
  background: url("~@/assets/desctop/pages/collectionPage/footer-pattern.jpg");
  min-height: 370px;
}

.footer-subscribe-block__wrap {
  margin-top: 10%;
}

.footer-subscribe-block__title {
  font-family: $font_neue_kabel;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  text-align: center;
  color: #262626;
  padding-bottom: 20px;
}

.footer-subscribe-block__text {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  padding-bottom: 20px;
}

.footer-subscribe-block__form {
  max-width: 594px;
  height: 60px;
  border-radius: 6px;
  border: solid 1px #452650;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  position: relative;
}

.footer-subscribe-block__input-wrap {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
}

.footer-subscribe-block__input {
  width: 88%;
  height: 100%;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  padding: 10px;
  font-family: $font_montserrat_regular;
}

.footer-subscribe-block__submit {
  width: 12%;
  height: 100%;
  background-color: #452650;
  border: none;
  background-image: url("~@/assets/send.svg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 4px 4px 0;
}

.footer-subscribe-block__input:focus,
.footer-subscribe-block__submit:focus {
  outline: none;
  border: none;
}

.footer-subscribe-block__validation-error {
  position: absolute;
  bottom: -25px;
  left: 0;
  color: $text_color_red;
}

.has-error {
  border-color: $text_color_red;
  border-width: 2px;
}

::v-deep .thx-for-subscribe {
  max-width: 1200px;
  padding: 50px;
  position: relative;
  &__close {
    position: absolute;
    transform: rotate(45deg);
    cursor: pointer;
    top: 26px;
    right: 26px;
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill-rule='evenodd' d='M13.611 2v10.388H24v1.223H13.611V24H12.39l-.001-10.389H2V12.39l10.388-.001V2h1.223z'/%3E%3C/svg%3E%0A");
  }

  .modal-content {
    background-image: url("~@/assets/tmp/thx-for-subscibe.jpg");
    background-position: 50% 0%;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 250px;
    border-radius: 6px;
    height: calc(90vh - 100px);
    max-height: 500px;
    .modal-body {
      justify-content: center;
      align-items: center;
      display: flex;
    }
    h3 {
      font-family: $font_neue_kabel;
      font-size: 40px;
      letter-spacing: normal;
      text-align: center;
      color: $text_color;
    }
    p {
      font-family: $font_montserrat_regular;
      font-size: 16px;
      line-height: 1.56;
      letter-spacing: normal;
      text-align: center;
      color: #000000;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .header-block__text {
    background-size: 45%;
    background-position: 10% 15%;
  }
}

@media only screen and (max-width: 998px) {
  .header-block__text-wrap {
    padding-top: 520px;
    width: 100%;
    padding-right: 0;
    margin-top: 0;
  }
  .header-block__text {
    background-size: 75%;
    background-position: 50% 20%;

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 24px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .header-block__text-wrap {
    padding-top: 520px;
    width: 100%;
    padding-right: 0;
    margin-top: 0;
  }
  .header-block__text {
    background-size: 100%;
    background-position: 0% 25%;

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 24px;
    }
  }
}

@media only screen and (max-width: 580px) {
  .footer-subscribe-block {
    background-position: 40% 0;
  }
  .footer-subscribe-block__title {
    font-size: 22px;
  }
  .footer-subscribe-block__text {
    font-size: 14px;
  }
  .footer-subscribe-block__wrap {
    margin-top: 30%;
  }

  .main-desc-block {
    padding: 50px 0 30px;

    h3 {
      font-size: 22px;
    }

    img {
      width: 101px;
    }

    p {
      font-size: 14px;
    }
  }
  .footer-subscribe-block__form {
    max-width: 325px;
  }
  .footer-subscribe-block__submit {
    width: 17%;
  }
}

@media only screen and (max-width: 480px) {
  .header-block__text {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 18px;
    }
  }
  .header-block__text-wrap {
    padding-top: 300px;
  }
  .header-block__text {
    min-height: 490px;
  }
}
</style>
