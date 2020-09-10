<template>
  <b-modal
    size="xl"
    :id="'shipping-modal__' + sellerId"
    hide-footer
    hide-header
    class="select-addres-modal"
  >
    <b-container>
      <b-row>
        <b-col cols="12" class="mb-3">
          <h3 class="my-4">Select Address</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4" class="mb-3">
          <p>Address Card</p>
        </b-col>
        <b-col cols="4" class="mb-3">
          <p>Address Card</p>
        </b-col>
        <b-col cols="4" class="mb-3">
          <p>Address Card</p>
        </b-col>
        <b-col cols="4" class="mb-3">
          <p>Address Card</p>
        </b-col>
        <b-col cols="4" class="mb-3">
          <p>Address Card</p>
        </b-col>
        <b-col cols="4" class="mb-3">
          <p>Address Card</p>
        </b-col>
        <b-col cols="4" class="mb-3">
          <p>Address Card</p>
        </b-col>
        <b-col cols="4" class="mb-3">
          <p>Address Card</p>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col cols="12" class="mb-3">
          <button
            class="shipping-action-btn shipping-action-btn__addNew"
            @click="addNewAddress()"
          >
            Add New
          </button>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col cols="12" class="mb-3">
          <PurpleButton
            text="Cancel"
            iconClass="bag-icon"
            :animate="true"
            customClass="add-to-bag__btn mr-3"
            @clickHandler="cancelHandler()"
          />
          <RedButton
            text="Save"
            iconClass="accepted-icon"
            :animate="true"
            customClass="buy-now__btn"
            @clickHandler="selectAddress(sellerId, 'some address')"
          />
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>
<script>
import PurpleButton from "../Buttons/PurpleButton";
import RedButton from "../Buttons/RedButton.vue";

export default {
  name: "SelectAddress",
  data() {
    return {};
  },
  props: {
    sellerId: String
  },
  components: {
    RedButton,
    PurpleButton
  },
  methods: {
    addNewAddress() {
      console.log("addNewAddress");
    },
    selectAddress(sellerId, address) {
      console.log(sellerId, address);
      const addressObj = {
        sellerId: sellerId,
        address: address
      };

      this.$store.dispatch("addAddressToSelectedAddress", addressObj);
      this.$forceUpdate();
    },
    cancelHandler() {
      console.log("cancelHandler");
    }
  },
  computed: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.modal .modal-dialog {
  max-width: 80vw;
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

.shipping-action-btn__addNew:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill-rule='evenodd' d='M13.611 2v10.388H24v1.223H13.611V24H12.39l-.001-10.389H2V12.39l10.388-.001V2h1.223z'/%3E%3C/svg%3E%0A");
}
</style>
