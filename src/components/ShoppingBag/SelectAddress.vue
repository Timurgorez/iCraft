<template>
  <b-modal
    size="xl"
    :id="'shipping-modal__' + sellerId"
    hide-footer
    hide-header
    class="select-addres-modal"
  >
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <h3 class="select-addres-modal__title">Select Address</h3>
        </b-col>
      </b-row>
      <b-row class="justify-content-evenly">
        <div
          v-for="(address, index) in shippingAdresses"
          :key="index"
          class="shipment-info__address"
        >
          <input
            class="d-none shipping-select__input"
            :id="'shipping-select__' + sellerId + '_' + address.id"
            v-model="model_select_address"
            type="radio"
            :name="'shipping-select__' + sellerId + '_' + address.id"
            :value="address"
          />
          <label
            :for="'shipping-select__' + sellerId + '_' + address.id"
            class="shipment-info__gray-box"
          >
            <button
              class="shipping-action-btn shipping-action-btn__edit"
              @click.stop="editAddress(address)"
            >
              Edit
            </button>
            <h3 class="title-text">Shipping Address</h3>
            <p class="sub-text">
              {{ address.name }} <br />
              {{ address.zip_code }}
              {{ address.address }} <br />
              {{ address.state }}<br />
              {{ address.country }}
            </p>
          </label>
        </div>
      </b-row>
      <b-row class="text-center mb-4 mt-3">
        <b-col cols="12" class="mb-3">
          <button
            class="shipping-action-btn shipping-action-btn__addNew"
            @click="addNewAddress(sellerId)"
          >
            Add New
          </button>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col cols="12" class="mb-3">
          <PurpleButton
            text="Cancel"
            :simpleButton="true"
            :animate="true"
            customClass="add-to-bag__btn mr-3"
            @clickHandler="cancelHandler(sellerId)"
          />
          <RedButton
            text="Save"
            :simpleButton="true"
            :animate="true"
            customClass="buy-now__btn"
            @clickHandler="selectAddress"
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
    return {
      model_select_address:
        this.$store.getters.getSelectedAddress[this.sellerId] ||
        this.$store.getters.getDefaultAddress
    };
  },
  props: {
    sellerId: String
  },
  components: {
    RedButton,
    PurpleButton
  },
  methods: {
    addNewAddress(sellerId) {
      console.log("addNewAddress");
      this.$bvModal.show("add-new-modal__" + sellerId);
    },
    selectAddress() {
      const addressObj = {
        sellerId: this.sellerId,
        address: this.model_select_address
      };
      this.$emit("selectAddress", addressObj);
    },
    cancelHandler(key) {
      console.log("cancelHandler", this.model_select_address);
      this.$bvModal.hide("shipping-modal__" + key);
    },
    editAddress(address) {
      console.log("editAddress", address);
      this.$emit("editAddress", this.sellerId, address);
      this.$bvModal.show("edit-modal__" + this.sellerId);
    }
  },
  computed: {
    shippingAdresses() {
      return this.$store.getters.getShippingAdresses;
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.modal .modal-dialog {
  max-width: 80vw;
}

.select-addres-modal__title {
  font-family: $font_neue_kabel;
  font-size: 30px;
  color: $text_color;
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
.shipping-action-btn__edit {
  position: absolute;
  right: 15px;
  top: 25px;
  &:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M17.699.845c-1.072-1.07-2.809-1.07-3.881 0l-.972.977L2.505 12.158l-.022.022c-.005.006-.005.011-.011.011-.011.017-.028.033-.038.05 0 .005-.006.005-.006.01-.011.017-.016.028-.028.045-.005.005-.005.01-.01.016l-.017.044c0 .005-.005.005-.005.011l-2.295 6.9c-.067.196-.016.414.132.56.104.102.244.16.39.159.06-.001.118-.01.175-.028l6.895-2.3c.005 0 .005 0 .01-.005.018-.005.035-.012.05-.022.004 0 .008-.002.011-.005.016-.011.038-.022.055-.033.016-.011.033-.028.05-.039.005-.005.01-.005.01-.01.006-.006.017-.012.022-.023L19.186 6.208c1.07-1.072 1.07-2.808 0-3.88L17.7.844zM7.489 16.368l-3.82-3.82 9.562-9.562 3.82 3.82-9.562 9.562zM3.13 13.564L6.468 16.9 1.456 18.57l1.674-5.006zM18.412 5.44l-.581.587-3.821-3.82.588-.588c.642-.642 1.684-.642 2.327 0l1.493 1.493c.638.646.635 1.685-.006 2.328z' transform='translate(-1063 -392) translate(370 277) translate(29 94) translate(392) translate(272 21)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  }
}
.shipment-info__address {
  margin: 15px;
  width: 358px;
  position: relative;
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
    padding: 20px;
    padding-right: 60px;
    display: inline-block;
    width: 100%;
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

.shipping-select__input:checked + label {
  background: #e5ffe8;
  border-color: #36c747;
  &:after {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #219d00;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M22.134 2L26 4.602 12.039 25 0 14.541 3.079 11.056 11.141 18.06z'/%3E%3C/svg%3E");
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: absolute;
    bottom: 15px;
    right: 10px;
  }
}

.buy-now__btn {
  padding: 13.5px 80px;
}

@media (min-width: 1200px) {
  ::v-deep .modal-xl {
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  ::v-deep .modal-xl {
    max-width: 814px;
  }
}

@media (max-width: 992px) {
  ::v-deep .modal-xl {
    max-width: 760px;
  }
  .shipment-info__address {
    width: 330px;
  }
}
@media (max-width: 768px) {
  ::v-deep .modal-xl {
    max-width: 390px;
  }
}
</style>
