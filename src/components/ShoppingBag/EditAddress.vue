<template>
  <b-modal
    size="lg"
    :id="'edit-modal__' + sellerId"
    hide-footer
    hide-header
    class="add-address-modal"
    :visible="true"
  >
    <b-container>
      <b-row>
        <b-col cols="12" class="mb-3 mt-2">
          <h3 class="add-address-modal__title">Edit Address</h3>
        </b-col>
      </b-row>
      <b-row class="padding">
        <b-col cols="12" sm="12" md="3" lg="3" xl="3">
          <label for="input-name"
            >Your Name <br />
            (optional)</label
          >
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="9">
          <b-form-input
            id="input-name"
            size="sm"
            placeholder="Enter your name"
            class="add-address-modal__input"
            v-model="address_modal.name"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="padding">
        <b-col cols="12" sm="12" md="3" lg="3" xl="3">
          <label for="input-country">Country</label>
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="9">
          <b-form-input
            id="input-country"
            size="sm"
            placeholder="Please Select"
            class="add-address-modal__input"
            v-model="address_modal.country"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="padding">
        <b-col cols="12" sm="12" md="3" lg="3" xl="3">
          <label for="input-state">Province / State </label>
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="9">
          <b-form-input
            id="input-state"
            size="sm"
            placeholder="Please Select"
            class="add-address-modal__input"
            v-model="address_modal.state"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="padding">
        <b-col cols="12" sm="12" md="3" lg="3" xl="3">
          <label for="input-postal">Postal / Zip Code </label>
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="9">
          <b-form-input
            id="input-postal"
            size="sm"
            placeholder=""
            class="add-address-modal__input"
            v-model="address_modal.zip_code"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="padding">
        <b-col cols="12" sm="12" md="3" lg="3" xl="3">
          <label for="input-city">City</label>
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="9">
          <b-form-input
            id="input-city"
            size="sm"
            placeholder="Select City"
            class="add-address-modal__input"
            v-model="address_modal.city"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="padding">
        <b-col cols="12" sm="12" md="3" lg="3" xl="3">
          <label for="input-address">Address</label>
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="9">
          <b-form-input
            id="input-address"
            size="sm"
            placeholder=""
            class="add-address-modal__input"
            v-model="address_modal.address"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="d-flex justify-content-center mb-4 mt-3">
            <Checkbox
              class="mr-4"
              labelText="Same as Billing Address"
              inputName="billing-address"
              :id="'billing-address-' + sellerId"
              value="true"
              @changeHandler="makeBillingHandler"
            />
            <!--                @changeHandler="customGiftHandler"-->
            <Checkbox
              labelText="Make it as Default Address"
              inputName="default-address"
              :id="'default-address-' + sellerId"
              value="true"
              @changeHandler="makeDefaultHandler"
            />
            <!--                @changeHandler="customGiftHandler"-->
          </div>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col cols="12" class="mb-3 mt-3">
          <PurpleButton
            text="Cancel"
            iconClass="bag-icon"
            :animate="true"
            customClass="add-to-bag__btn mr-3"
            @clickHandler="cancelHandler(sellerId)"
          />
          <RedButton
            text="Save"
            iconClass="accepted-icon"
            :animate="true"
            customClass="save__btn"
            @clickHandler="saveAddress(sellerId)"
          />
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import RedButton from "@/components/Buttons/RedButton";
import PurpleButton from "@/components/Buttons/PurpleButton";
import Checkbox from "@/components/FormElements/Checkbox";

export default {
  name: "EditAddress",
  components: { Checkbox, PurpleButton, RedButton },
  data() {
    return {
      address_modal: this.address
    };
  },
  props: {
    sellerId: String,
    address: {
      type: Object,
      default: () => {
        return {
          name: "",
          country: "",
          state: "",
          zip_code: "",
          city: "",
          address: "",
          default: false
        };
      }
    }
  },
  methods: {
    cancelHandler(sellerId) {
      console.log("cancelHandler", sellerId);
      this.$bvModal.hide("edit-modal__" + sellerId);
    },
    saveAddress(sellerId) {
      console.log(sellerId);
      console.log("address", this.address);

      this.$bvModal.hide("edit-modal__" + sellerId);
    },
    makeBillingHandler(e) {
      console.log("makeBillingHandler", e);
    },
    makeDefaultHandler(e) {
      console.log("makeDefaultHandler", e, this.address_modal);
      this.address_modal.default = e.target.checked;
    }
  }
};
</script>

<style scoped lang="scss">
.modal .modal-dialog {
  max-width: 50vw;
}

.padding {
  padding: 0 30px;
}

label {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  margin: 10px;
  padding: 10px;
}

.add-address-modal {
  &__title {
    font-family: $font_neue_kabel;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 2px;
  }
  &__input {
    margin: 10px;
    height: 50px;
    border-radius: 3px;
    border: solid 1px #909090;
    background-color: #ffffff;
    font-family: $font_neue_kabel;
    font-size: 16px;

    &::placeholder {
      font-family: $font_montserrat_italic;
      color: #5f5f5f;
    }
  }
}

.save__btn {
  padding: 13.5px 80px;
}
</style>
