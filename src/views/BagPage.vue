<template>
  <div class="bag-page">
    <HeaderWhite />
    <notifications
      classes="custom-notification"
      group="app"
      position="top center"
    />
    <b-container class="default-max-container">
      <b-row>
        <b-col cols="12">
          <h1>Shopping Bag ({{ countProductsInBag }})</h1>
        </b-col>
      </b-row>

      <b-row v-if="firstProduct">
        <b-col cols="12" xl="8">
          <b-container fluid class="checkout-table__wrap">
            <b-row class="checkout-table__head d-flex" align-v="center">
              <b-col cols="6">
                <span>Product</span>
              </b-col>
              <b-col cols="2" class="d-none d-lg-block d-xl-block">
                <span>Quantity</span>
              </b-col>
              <b-col cols="2" class="d-none d-lg-block d-xl-block">
                <span>Price</span>
              </b-col>
              <b-col cols="2" class="d-none d-lg-block d-xl-block">
                <span>Amount</span>
              </b-col>
            </b-row>

            <div
              v-for="(product, sellerId, index) in products"
              :key="index + Math.random().toString(16)"
            >
              <b-row
                class="checkout-table__shipment d-flex"
                align-v="center"
                v-b-toggle="'collapse_shipping_' + sellerId"
              >
                <b-col cols="12">
                  <p>
                    <b>Shipment {{ index + 1 }} </b> ({{ product.length }}
                    Products)
                  </p>
                </b-col>
              </b-row>

              <b-collapse visible :id="'collapse_shipping_' + sellerId">
                <TableProduct
                  v-for="prod in product"
                  :product="prod"
                  :key="prod.id + Math.random().toString(16)"
                />
                <b-row class="checkout-table__delivery d-flex" align-v="center">
                  <b-col cols="12" lg="2" class="mt-4 mb-4">
                    <label
                      :for="'coupon-for-seller__' + sellerId"
                      class="coupon-for-seller__label"
                      >Store Coupon (optional)</label
                    >
                  </b-col>
                  <b-col cols="12" lg="5" class="mt-lg-4 mt-xl-4 mb-4">
                    <InputText
                      :id="'coupon-for-seller__' + sellerId"
                      inputName="coupon-for-seller"
                      placeholder="ThankYouCoupon25"
                      @changeHandler="addCouponHandler"
                    />
                  </b-col>
                  <b-col lg="5"></b-col>

                  <b-col
                    cols="12"
                    v-b-toggle="'delivery-options_' + sellerId"
                    class="mb-4 d-flex align-item-center delivery-options__title"
                    >Delivery Options</b-col
                  >
                  <b-collapse
                    visible
                    class="delivery-options__collapse"
                    :id="'delivery-options_' + sellerId"
                  >
                    <b-row class="align-items-center mb-3">
                      <b-col cols="12" lg="2" class="mb-3">
                        <label
                          :for="'delivery-options__' + sellerId"
                          class="delivery-options__label"
                          >Delivery Method
                          <div
                            class="icraft-hint"
                            :id="'delivery__' + sellerId"
                          ></div>
                        </label>

                        <Popover
                          customClass="custom-popover"
                          :target="'delivery__' + sellerId"
                          title="Placing Custom Orders"
                          text="You can place a Custom Order for this item and provide
                          seller with your color and other product preferences
                          and modifications. You will be able to add this
                          information at the Checkout."
                        />
                      </b-col>
                      <b-col cols="12" lg="5" class="mb-3">
                        <b-form-select
                          v-model="shoppingType[sellerId]"
                          :options="shoppingOptions"
                          class="type-shipping"
                        ></b-form-select>
                      </b-col>
                      <b-col lg="5" class="mb-3">
                        <Checkbox
                          labelText="Add Insurance (+ $25.00)"
                          inputName="add-insurance"
                          :id="'add-insurance'"
                          :checked="insurance[sellerId]"
                          :dataAttr="sellerId"
                          @changeHandler="addInsuranceHandler"
                        />
                      </b-col>
                    </b-row>
                    <b-row class="align-items-center ">
                      <b-col cols="12" lg="2" class="mb-3">
                        <label class="ship-to-address__label"
                          >Ship to this Address
                          <div
                            class="icraft-hint"
                            :id="'ship__' + sellerId"
                          ></div>
                        </label>
                        <Popover
                          customClass="custom-popover"
                          :target="'ship__' + sellerId"
                          title="Placing Custom Orders"
                          text="You can place a Custom Order for this item and provide
                          seller with your color and other product preferences
                          and modifications. You will be able to add this
                          information at the Checkout."
                        />
                      </b-col>
                      <b-col
                        cols="12"
                        lg="8"
                        class="mb-3 d-flex align-items-center flex-wrap"
                      >
                        <button
                          v-show="!selectedAddress[sellerId] && !defaultAddress"
                          class="shipping-action-btn shipping-action-btn__select"
                          @click="$bvModal.show('shipping-modal__' + sellerId)"
                        >
                          Select Address
                        </button>
                        <div
                          v-if="selectedAddress && selectedAddress[sellerId]"
                          @click="$bvModal.show('shipping-modal__' + sellerId)"
                        >
                          <div class="shipment-info__address">
                            <div class="shipment-info__gray-box">
                              <button
                                class="shipping-action-btn shipping-action-btn__edit"
                                @click.stop="
                                  editAddress(
                                    sellerId,
                                    selectedAddress[sellerId]
                                  )
                                "
                              >
                                Edit
                              </button>
                              <h3 class="title-text">
                                Shipping Address
                              </h3>
                              <p class="sub-text">
                                {{
                                  selectedAddress[sellerId] &&
                                    selectedAddress[sellerId].name
                                }}
                                <br />
                                {{
                                  selectedAddress[sellerId] &&
                                    selectedAddress[sellerId].zip_code
                                }}
                                {{
                                  selectedAddress[sellerId] &&
                                    selectedAddress[sellerId].address
                                }}
                                <br />
                                {{
                                  selectedAddress[sellerId] &&
                                    selectedAddress[sellerId].state
                                }}<br />
                                {{
                                  selectedAddress[sellerId] &&
                                    selectedAddress[sellerId].country
                                }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="!selectedAddress[sellerId] && defaultAddress"
                          @click="$bvModal.show('shipping-modal__' + sellerId)"
                        >
                          <div class="shipment-info__address">
                            <div class="shipment-info__gray-box">
                              <button
                                class="shipping-action-btn shipping-action-btn__edit"
                                @click.stop="
                                  editAddress(sellerId, defaultAddress)
                                "
                              >
                                Edit
                              </button>

                              <h3 class="title-text">Shipping Address</h3>
                              <p class="sub-text">
                                {{ defaultAddress && defaultAddress.name }}
                                <br />
                                {{ defaultAddress && defaultAddress.zip_code }}
                                {{ defaultAddress && defaultAddress.address }}
                                <br />
                                {{ defaultAddress && defaultAddress.state
                                }}<br />
                                {{ defaultAddress && defaultAddress.country }}
                              </p>
                              <div
                                class="same-billing-address d-flex align-items-end mb-2"
                              >
                                Same as Billing Address
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          class="shipping-action-btn shipping-action-btn__addNew"
                          @click="addNewAddress"
                        >
                          Add New
                        </button>

                        <SelectAddress
                          :key="shippingAdresses.length"
                          :sellerId="sellerId"
                          :shippingAdresses="shippingAdresses"
                          @selectAddress="selectAddress"
                          @editAddress="editAddress"
                        />
                      </b-col>
                      <b-col lg="2" class="mb-3"></b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="12">
                        <p class="delivery-date">
                          Approx. Delivery Date: <span>Aug 16, 2018</span>
                        </p>
                      </b-col>
                    </b-row>
                  </b-collapse>
                </b-row>
              </b-collapse>
            </div>
          </b-container>
        </b-col>
        <b-col cols="12" xl="4">
          <OrderSummary :product="firstProduct" />
        </b-col>
      </b-row>
      <b-row v-else class="text-center d-inline">
        <h3>Your Shopping Bag is Empty</h3>
      </b-row>
    </b-container>
    <EditAddress
      v-if="editingAddress"
      :address="editingAddress"
      @cancelEdit="cancelEdit"
    />
    <AddNewAddress />
    <ProductSlider />
    <Footer />
  </div>
</template>
<script>
import HeaderWhite from "../components/Header/HeaderWhite.vue";
import Footer from "../components/Footer/Footer.vue";
import ProductSlider from "../components/StaticComponents/ProductSlider/ProductSlider.vue";
import TableProduct from "../components/Checkout/TableProduct.vue";
import OrderSummary from "../components/Checkout/OrderSummary.vue";
import InputText from "../components/FormElements/InputText.vue";
import Checkbox from "../components/FormElements/Checkbox.vue";
import SelectAddress from "../components/ShoppingBag/SelectAddress.vue";
import Popover from "../components/StaticComponents/Popover.vue";
import AddNewAddress from "../components/ShoppingBag/AddNewAddress.vue";
import EditAddress from "../components/ShoppingBag/EditAddress.vue";

export default {
  name: "BagPage",
  props: "",
  data() {
    return {
      editingAddress: null,

      selectedAddress: this.$store.getters.getSelectedAddress,
      defaultAddress: this.$store.getters.getDefaultAddress,

      shippingAdresses: this.$store.getters.getShippingAdresses,

      insurance: this.$store.getters.getInsurance,
      shoppingOptions: [
        { value: null, text: "Please select delivery" },
        {
          value: { type: "UPS", price: 15 },
          text: "Standard Shipping (UPS) - $15.00"
        },
        {
          value: { type: "UkrPost", price: 25 },
          text: "Standard Shipping (UkrPost) - $25.00"
        },
        {
          value: { type: "DHL", price: 35 },
          text: "Standard Shipping (DHL) - $35.00"
        }
      ]
    };
  },
  components: {
    HeaderWhite,
    Footer,
    ProductSlider,
    TableProduct,
    OrderSummary,
    InputText,
    Checkbox,
    SelectAddress,
    Popover,
    AddNewAddress,
    EditAddress
  },
  methods: {
    addNewAddress() {
      console.log("addNewAddress");
      this.$bvModal.show("add-new-modal");
    },
    cancelEdit(oldEditAddress) {
      this.editingAddress = oldEditAddress;
    },
    addInsuranceHandler(val) {
      console.log("addInsuranceHandler", val.target.dataset.id);
      if (val.target.dataset.id) {
        const sellerId = val.target.dataset.id;
        const value = val.target.checked;
        this.insurance[sellerId] = value;
        this.$store.commit("modifyInsurance", { sellerId, value });
      }
    },
    addCouponHandler(val) {
      console.log("addCouponHandler", val);
    },
    editAddress(sellerId, address) {
      console.log("editAddress", address);
      this.editingAddress = null;
      this.$nextTick(() => {
        this.editingAddress = address;
      })
      this.$bvModal.show("edit-modal");
    },
    selectAddress(newAddress) {
      console.log("selectAddress bug page", newAddress);
      this.$store.dispatch("addAddressToSelectedAddress", newAddress);
      this.$bvModal.hide("shipping-modal__" + newAddress.sellerId);
      this.selectedAddress = null;
      this.selectedAddress = this.$store.getters.getSelectedAddress;
      (this.shippingAdresses = []),
        (this.shippingAdresses = this.$store.getters.getShippingAdresses);
    }
  },
  computed: {
    shoppingType() {
      return this.$store.getters.getShoppingType;
    },
    countProductsInBag() {
      return this.$store.getters.countProductsInBag;
    },
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
      return arrSort;
    },
    firstProduct() {
      return this.$store.getters.getProductsInBag[0]
        ? this.$store.getters.product(
            this.$store.getters.getProductsInBag[0].prodId
          )
        : null;
    }
    // defaultAddress() {
    //   console.log("defaultAddress", this.$store.getters.getDefaultAddress);
    //   return this.$store.getters.getDefaultAddress;
    // },
    // selectedAddress() {
    //   console.log("selectedAddress", this.$store.getters.getSelectedAddress);
    //   return this.$store.getters.getSelectedAddress;
    // }
  },
  watch: {
    selectedAddress() {
      console.log("watch", this.selectedAddress);
    },
    shoppingType() {
      console.log("shoppingType", this.shoppingType);
    }
  },
  created() {}
};
</script>
<style scoped lang="scss">
::v-deep .checkout-table__head {
  text-transform: uppercase;
  background-color: #d9d9d9;
  font-family: $font_montserrat_bold;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  min-height: 60px;
}
.checkout-table__shipment {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  min-height: 60px;
  background: $bg_grey;
  border-left: solid 1px #d9d9d9;
  border-right: solid 1px #d9d9d9;
  p {
    margin: 0;
  }
  b {
    text-transform: uppercase;
  }
}
.checkout-table__delivery {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  min-height: 60px;
  border-left: solid 1px #d9d9d9;
  border-right: solid 1px #d9d9d9;
}

.checkout-table__wrap {
  border-bottom: solid 1px #d9d9d9;
}

::v-deep .custom-request {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
  .custom-request__hint {
    width: 18px;
    height: 18px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(0 .5)'%3E%3Ccircle cx='9' cy='9' r='9' fill='%237F13A6'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M9.68 10.384c0-.275.07-.511.211-.71.141-.198.357-.427.647-.687.237-.214.428-.403.573-.567.145-.164.27-.365.372-.601.103-.237.155-.512.155-.825 0-.65-.254-1.159-.762-1.53-.508-.37-1.19-.555-2.045-.555-.702 0-1.313.12-1.832.36-.52.241-.943.587-1.272 1.038l1.111.721c.42-.588 1.043-.882 1.867-.882.436 0 .783.1 1.043.298.26.199.39.458.39.779 0 .229-.068.433-.201.613-.134.18-.338.391-.613.635-.359.321-.632.617-.819.888-.187.271-.28.613-.28 1.025h1.454zm-.723 2.738c.26 0 .476-.086.648-.258.171-.172.257-.383.257-.635s-.086-.462-.257-.63c-.172-.168-.388-.252-.648-.252-.267 0-.486.084-.658.252-.172.168-.258.378-.258.63s.086.463.258.635c.172.172.391.258.658.258z'/%3E%3C/g%3E%3C/svg%3E%0A");
  }

  & > div:not(.custom-request__hint) {
    margin-right: 10px;
  }
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

.ship-to-address__label,
.delivery-options__label,
.coupon-for-seller__label {
  font-family: $font_montserrat_regular;
  font-size: 16px;
  color: #000000;
  position: relative;
  padding-left: 35px;
  padding-right: 10px;
  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 12px);
    left: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M23.063 3.692H.938c-.518 0-.938.42-.938.938v3.562c0 .518.42.938.938.938 1.55 0 2.812 1.261 2.812 2.812S2.488 14.755.937 14.755c-.517 0-.937.42-.937.937v3.563c0 .518.42.937.938.937h22.125c.517 0 .937-.42.937-.937V4.63c0-.518-.42-.938-.938-.938zm-.938 14.625H9.375V16.63c0-.518-.42-.938-.938-.938-.517 0-.937.42-.937.938v1.687H1.875v-1.781c2.137-.436 3.75-2.33 3.75-4.594 0-2.263-1.613-4.157-3.75-4.593V5.567H7.5v1.688c0 .518.42.937.938.937.517 0 .937-.42.937-.937V5.567h12.75v12.75zm-12.75-7.312v1.875c0 .518-.42.937-.938.937-.517 0-.937-.42-.937-.937v-1.875c0-.518.42-.938.938-.938.517 0 .937.42.937.938z'/%3E%3C/svg%3E%0A");
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
}
.delivery-options__label:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M19.406 10.014c-1.522 0-2.76 1.238-2.76 2.761 0 1.522 1.238 2.761 2.76 2.761 1.523 0 2.762-1.239 2.762-2.76 0-1.524-1.239-2.762-2.762-2.762zm0 3.973c-.668 0-1.212-.544-1.212-1.212 0-.67.544-1.213 1.212-1.213.67 0 1.213.544 1.213 1.213 0 .668-.544 1.212-1.213 1.212zM15.432.026H.774C.347.026 0 .373 0 .801v11.922c0 .428.347.774.774.774H3.2V11.95H1.548V1.575h13.11v11.148h1.548V.801c0-.428-.346-.775-.774-.775z' transform='translate(0 4.615)'/%3E%3Cpath d='M6.994 11.949H17.42V13.497H6.994z' transform='translate(0 4.615)'/%3E%3Cpath d='M5.084 10.014c-1.523 0-2.761 1.238-2.761 2.761 0 1.522 1.238 2.761 2.76 2.761 1.523 0 2.762-1.239 2.762-2.76 0-1.524-1.239-2.762-2.761-2.762zm0 3.973c-.669 0-1.213-.544-1.213-1.212 0-.67.544-1.213 1.213-1.213s1.213.544 1.213 1.213c0 .668-.544 1.212-1.213 1.212zM23.226 6.452h-7.794v1.549h7.02v3.948h-1.11v1.548h1.884c.427 0 .774-.346.774-.774V7.226c0-.427-.347-.774-.774-.774z' transform='translate(0 4.615)'/%3E%3Cpath d='M20.885 3.24c-.136-.247-.396-.4-.679-.4h-4.774v1.548h4.317L21.515 7.6l1.357-.747-1.987-3.613z' transform='translate(0 4.615)'/%3E%3C/g%3E%3C/svg%3E%0A");
}

.ship-to-address__label:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath d='M8.719 0C3.926 0 .027 3.9.027 8.692c0 5.948 7.778 14.68 8.11 15.048.31.347.854.346 1.164 0 .331-.368 8.11-9.1 8.11-15.048C17.41 3.899 13.51 0 8.719 0zm0 22.019C6.1 18.909 1.592 12.774 1.592 8.692c0-3.93 3.197-7.127 7.127-7.127 3.93 0 7.126 3.197 7.126 7.127 0 4.082-4.508 10.216-7.126 13.327z' transform='translate(3.692)'/%3E%3Cpath d='M8.719 4.319c-2.412 0-4.373 1.962-4.373 4.373 0 2.411 1.961 4.373 4.373 4.373 2.411 0 4.373-1.962 4.373-4.373 0-2.411-1.962-4.373-4.373-4.373zm0 7.18C7.17 11.5 5.91 10.24 5.91 8.693s1.26-2.808 2.808-2.808c1.548 0 2.808 1.26 2.808 2.808 0 1.548-1.26 2.808-2.808 2.808z' transform='translate(3.692)'/%3E%3C/g%3E%3C/svg%3E%0A");
}

.shipping-action-btn {
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
    top: -3px;
    left: 0;
  }
}

.shipping-action-btn__select {
  margin-right: 30px;
}
.shipping-action-btn__select:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill-rule='evenodd' d='M25.707 3.33c-.39-.39-1.024-.39-1.414 0L8.083 19.54l-6.376-6.375c-.39-.391-1.024-.391-1.414 0-.39.39-.39 1.023 0 1.414l7.083 7.083c.39.39 1.024.39 1.414 0L25.707 4.745c.39-.39.39-1.024 0-1.415z'/%3E%3C/svg%3E%0A");
}

.shipping-action-btn__addNew {
  &:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill-rule='evenodd' d='M13.611 2v10.388H24v1.223H13.611V24H12.39l-.001-10.389H2V12.39l10.388-.001V2h1.223z'/%3E%3C/svg%3E%0A");
  }
}

.delivery-options__title {
  font-family: $font_montserrat_semi_bold;
  font-size: 16px;

  &:after {
    content: "";
    display: inline-block;
    width: 26px;
    height: 26px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23000' d='M7.41 8.59L12 13.17 16.59 8.59 18 10 12 16 6 10z' transform='matrix(1 0 0 -1 1 25)'/%3E%3Cpath d='M0 0L24 0 24 24 0 24z' transform='matrix(1 0 0 -1 1 25)'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    margin-left: 40px;
    transition: all 0.2s;
  }
  &.collapsed:after {
    transform: rotate(180deg);
    transition: all 0.2s;
  }
}

.delivery-options__collapse {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.delivery-date {
  font-family: $font_montserrat_regular;
  font-size: 16px;
  color: #000000;
  margin: 40px auto;
  span {
    font-family: $font_montserrat_semi_bold;
  }
}

.type-shipping {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  border: 1px solid $checkout_border_gray;
  border-radius: 3px;
  width: 100%;
  min-height: 50px;
  padding-right: 20px;
}

.icraft-hint {
  position: absolute;
  right: -15px;
  top: calc(50% - 9px);
}

.shipment-info__address {
  position: relative;
  margin-right: 30px;
  .title-text {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text_color;
  }

  .sub-text {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    margin-bottom: 0;
  }
  .shipment-info__gray-box {
    background-color: $checkout_bg_gray;
    border: 1px solid $checkout_border_gray;
    border-radius: 4px;
    max-width: 360px;
    width: 420px;
    padding: 20px;
    padding-right: 60px;
    cursor: pointer;
    .same-billing-address {
      font-family: $font_montserrat_regular;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;

      &::before {
        content: url("~@/assets/yes.svg");
        width: 35px;
        height: 26px;
      }
    }
  }
}

.shipping-action-btn__edit {
  position: absolute;
  right: 15px;
  top: 25px;
  &:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M17.699.845c-1.072-1.07-2.809-1.07-3.881 0l-.972.977L2.505 12.158l-.022.022c-.005.006-.005.011-.011.011-.011.017-.028.033-.038.05 0 .005-.006.005-.006.01-.011.017-.016.028-.028.045-.005.005-.005.01-.01.016l-.017.044c0 .005-.005.005-.005.011l-2.295 6.9c-.067.196-.016.414.132.56.104.102.244.16.39.159.06-.001.118-.01.175-.028l6.895-2.3c.005 0 .005 0 .01-.005.018-.005.035-.012.05-.022.004 0 .008-.002.011-.005.016-.011.038-.022.055-.033.016-.011.033-.028.05-.039.005-.005.01-.005.01-.01.006-.006.017-.012.022-.023L19.186 6.208c1.07-1.072 1.07-2.808 0-3.88L17.7.844zM7.489 16.368l-3.82-3.82 9.562-9.562 3.82 3.82-9.562 9.562zM3.13 13.564L6.468 16.9 1.456 18.57l1.674-5.006zM18.412 5.44l-.581.587-3.821-3.82.588-.588c.642-.642 1.684-.642 2.327 0l1.493 1.493c.638.646.635 1.685-.006 2.328z' transform='translate(-1063 -392) translate(370 277) translate(29 94) translate(392) translate(272 21)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  }
}

@media only screen and (max-width: 1200px) {
  .checkout-table__wrap {
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: 992px) {
  .ship-to-address__label,
  .delivery-options__label {
    padding-right: 30px;
  }
  .delivery-options__title {
    border-bottom: 1px solid #d9d9d9;
    &.collapsed {
      border-bottom: none;
    }
  }
}

@media only screen and (max-width: 480px) {
  .buy-set-save__btns {
    button {
      margin-right: 0;
    }
  }
  .shipping-action-btn__addNew {
    margin: 20px 0;
  }
  .shipment-info__address {
    .shipment-info__gray-box {
      width: 320px;
    }
  }
}
</style>
