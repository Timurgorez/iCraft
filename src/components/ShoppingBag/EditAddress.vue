<template>
  <b-modal
    size="lg"
    :id="'edit-modal'"
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
            >Your Name
            (optional)</label
          >
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="9">
          <b-form-input
            id="input-name"
            size="sm"
            placeholder="Enter your name"
            class="add-address-modal__input"
            v-model="edited_model.name"
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
            v-model="edited_model.country"
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
            v-model="edited_model.state"
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
            v-model="edited_model.zip_code"
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
            v-model="edited_model.city"
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
            v-model="edited_model.address"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="add-new-checkbox d-flex">
            <Checkbox
              class="mr-4 mb-4 mt-3"
              labelText="Same as Billing Address"
              inputName="billing-address"
              :id="'billing-address-'"
              value="true"
              @changeHandler="makeBillingHandler"
            />

            <Checkbox
              class="mb-4 mt-3"
              labelText="Make it as Default Address"
              inputName="default-address"
              :id="'default-address-'"
              value="true"
              @changeHandler="makeDefaultHandler"
            />
          </div>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col cols="12" class="mb-3 mt-3 add-new-btns">
          <PurpleButton
            text="Cancel"
            :simpleButton="true"
            :animate="true"
            customClass="add-to-bag__btn mr-3 mb-2"
            @clickHandler="cancelHandler"
          />
          <RedButton
            text="Save"
            :simpleButton="true"
            :animate="true"
            customClass="save__btn mb-2"
            @clickHandler="saveAddress"
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
      edited_model: this.address
    };
  },
  props: {
    addressId: Number,
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
    cancelHandler() {
      console.log("cancelHandler");
      this.$bvModal.hide("edit-modal");
      this.$emit("cancelEdit", this.edited_model);
    },
    saveAddress() {
      console.log("address", this.edited_model);
      this.$store.commit("modifyShippingAddress", {
        newModel: this.edited_model
      });
      this.$bvModal.hide("edit-modal");
    },
    makeBillingHandler(e) {
      console.log("makeBillingHandler", e);
    },
    makeDefaultHandler(e) {
      console.log("makeDefaultHandler", e, this.address_model);
      this.address_model.default = e.target.checked;
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
  margin-bottom: 30px;
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
.add-new-checkbox{
    justify-content: center;
  }

@media only screen and (max-width: 480px) {
 .padding {
    padding: 0;
    margin-bottom: 0;
  }
  label {
    margin: 0;
    padding: 20px 0 10px;
  }
  .add-new-checkbox{
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .add-new-btns{
    button{
      width: 100%;
    }
  }
  ::v-deep .modal-body {
    padding: 0;
  }
}
</style>
