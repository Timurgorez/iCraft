<template>
  <section class="payment-form">
    <div class="payment-form__header d-flex justify-content-between">
      <div class="d-flex flex-row flex-wrap align-items-center">
        <h3 class="mr-3">Payment Information</h3>
        <div class="payment-form__secure d-flex flex-row align-items-center">
          <div class="secure-icon mr-2"></div>
          <p>Secure options</p>
        </div>
      </div>
      <div class="payment-form__edit">EDIT</div>
    </div>
    <p class="payment-form__remainder mt-3 mb-4">We don’t store your credit cards.</p>
    <div class="payment-form__options mb-4">
      <b-row>
        <b-col cols="12" sm="12" md="6" lg="6" xl="6">
          <b-form-radio v-model="paymentMethod" name="some-radios" value="card">
            <div class="payment-form__card-icons d-flex flex-row">
              <div class="payment-form__card-type-container d-flex justify-content-center payment-form__card-type-container-border">
                <div class="payment-form__card-type visa-card"></div>
              </div>
              <div class="payment-form__card-type-container d-flex justify-content-center payment-form__card-type-container-border">
                <div class="payment-form__card-type master-card"></div>
              </div>
              <div class="payment-form__card-type-container d-flex justify-content-center payment-form__card-type-container-border">
                <div class="payment-form__card-type amer-exp-card"></div>
              </div>
              <div class="payment-form__card-type-container d-flex justify-content-center payment-form__card-type-container-border">
                <div class="payment-form__card-type discover-card"></div>
              </div>
            </div>
          </b-form-radio>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0">
          <b-form-radio v-model="paymentMethod" name="some-radios" value="paypal">
            <div class="payment-form__card-type-container d-flex justify-content-center payment-form__card-type-container-border">
              <div class="payment-form__card-type paypal"></div>
            </div>
          </b-form-radio>
        </b-col>
      </b-row>
    </div>
    <form>
      <b-container class="payment-form__container">
        <b-row class="mb-3">
          <b-col cols="12">
            <div class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row align-items-md-center align-items-lg-center align-items-xl-center">
              <label for="card-number">Card Number</label>
              <div class="d-flex flex-row align-items-center w-100 card-number-wrapper">
                <div class="payment-form__card-type-container d-flex justify-content-center" :class="cardNumber.length > 1 ? 'payment-form__card-type-container-border': ''">
                  <div :class="cardBrandClass"></div>
                </div>
                <b-form-input id="card-number" ref="cardNumInput" @input="validateCardNumber" :data-error="(cardErrors.cardNumber)?true:false" v-model="cardNumber" type="tel" placeholder="#### #### #### ####" v-cardformat:formatCardNumber></b-form-input>
              </div>
            </div>
            <div v-if="cardErrors.cardNumber" class="error">
              <small>{{ cardErrors.cardNumber }}</small>
            </div>
          </b-col>
        </b-row>
        <b-row class="pt-2">
          <b-col cols="6">
            <div class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row align-items-md-center align-items-lg-center align-items-xl-center">
              <label for="card-exp">Card Expiration</label>
              <b-form-input ref="cardExpInput" id="card-exp" @input="validateExpirationDate" :data-error="(cardErrors.cardExpiry)?true:false" v-model="cardExpiry" maxlength="10" v-cardformat:formatCardExpiry></b-form-input>
            </div>
            <div v-if="cardErrors.cardExpiry" class="error">
              <small>{{ cardErrors.cardExpiry }}</small>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row align-items-md-center align-items-lg-center align-items-xl-center">
              <label for="card-cvc">Security Code</label>
              <b-form-input ref="cardCvcInput" id="card-cvc" @input="validateCVC" :data-error="(cardErrors.cardCvc)?true:false" v-model="cardCvc" placeholder="XXX" v-cardformat:formatCardCVC></b-form-input>
              <div class="custom-request__hint" id="popover-card-save__hint"></div>
              <b-popover
                  custom-class="custom-popover"
                  target="popover-card-save__hint"
                  triggers="hover"
              >
                Your security code is a three digt number on the back of your credit card.
              </b-popover>
            </div>
            <div v-if="cardErrors.cardCvc" class="error secure-code-error">
              <small>{{ cardErrors.cardCvc }}</small>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </form>
  </section>
</template>

<script>
export default {
  name: "PaymentForm",
  computed: {
    cardBrandClass(){
      return this.getBrandClass(this.cardBrand);
    }
  },
  data() {
    return {
      paymentMethod: 'card',
      cardNumber: '',
      cardExpiry: null,
      cardCvc: null,
      cardErrors: {},
      cardBrand: null,
    }
  },
  methods: {
    validateCardNumber() {
      this.cardErrors.cardNumber = '';
      if(!this.$cardFormat.validateCardNumber(this.cardNumber)){
        this.cardErrors.cardNumber = "Invalid Credit Card Number.";
      }
    },

    validateExpirationDate() {
      this.cardErrors.cardExpiry = '';
      if (!this.$cardFormat.validateCardExpiry(this.cardExpiry)) {
        this.cardErrors.cardExpiry = "Invalid Expiration Date.";
      }
    },

    validateCVC() {
      this.cardErrors.cardCvc = '';
      if (!this.$cardFormat.validateCardCVC(this.cardCvc)) {
        this.cardErrors.cardCvc = "Invalid CVC.";
      }
    },

    getBrandClass: function (brand) {
      let icon = '';
      brand = brand || 'unknown';
      let cardBrandToClass = {
        'visa': 'payment-form__card-type visa-card',
        'mastercard': 'payment-form__card-type master-card',
        'amex': 'payment-form__card-type amer-exp-card',
        'discover': 'payment-form__card-type discover-card',
      };
      if (cardBrandToClass[brand]) {
        icon = cardBrandToClass[brand];
      }
      return icon;
    }
  },
  mounted(){
    this.$refs.cardNumInput.focus();
  }
}
</script>

<style scoped lang="scss">
.payment-form {
  input {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    border-radius: 3px;
    border: solid 1px #909090;
    height: 45px;
    margin: 10px;
    &:focus {
      border-radius: 3px;
      border: solid 1px #909090;
      box-shadow: none;
    }
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
    margin-bottom: 0;
  }

  .secure-icon {
    width: 16px;
    height: 16px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("~@/assets/lock.svg");
  }

  &__edit {
    font-family: $font-montserrat_medium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    display: flex;

    &::before {
      content: url("~@/assets/edit.svg");
      width: 30px;
      height: 20px;
    }
  }

  .custom-request__hint {
    margin-right: -16px;
    width: 25px;
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

  &__remainder {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
  }

  &__container {
    margin-left: -15px;
  }

  label {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
  }

  .error {
    margin-left: 106px;
    color: red;
    font-family: $font_montserrat_regular;
  }

  .card-number-wrapper {
    border-radius: 3px;
    border: solid 1px #909090;
  }

  #card-number {
    border: none;
    margin: 0;

    &:focus {
      border: none;
      box-shadow: none;
    }
  }

  #card-exp {
    margin-left: 10px;
  }

  #card-cvc {
    margin-right: 0;
  }

  &__card-type-container {
    height: 100%;
    width: 35px;
    margin-left: 10px;
  }

  &__card-icons {
    .payment-form__card-type-container {
      margin-left: 5px;
    }
  }

  &__card-type-container-border {
    border: 1px solid #909090;
    border-radius: 3px;
  }

  &__card-type {
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
  .visa-card {
    background-image: url("~@/assets/visa.svg");
  }
  .master-card {
    background-image: url("~@/assets/mastercard.svg");
  }
  .discover-card {
    background-image: url("~@/assets/discover.svg");
  }
  .amer-exp-card {
    background-image: url("~@/assets/american-express.svg");
  }

  .paypal {
    background-image: url("~@/assets/paypal.svg");
  }

  .secure-code-error {
    margin-left: 95px;
  }
}

@media screen and (max-width: 576px){
  .payment-form {
    .custom-request__hint {
      position: absolute;
      top: 50px;
      right: 20px;
      left: inherit;

    }

    #card-exp {
      margin-left: 0;
    }

    #card-cvc {
      margin-right: 0;
      margin-left: 0;
      width: 130px;
    }
  }
}
</style>