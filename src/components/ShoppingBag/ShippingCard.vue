<template>
  <!-- <div
    v-if="selectedAddress"
    @click="$bvModal.show('shipping-modal__' + sellerId)"
  > -->
  <div class="shipment-info__address">
    <div class="shipment-info__gray-box">
      <button
        class="shipping-action-btn shipping-action-btn__edit"
        @click.stop="editAddress"
      >
        Edit
      </button>
      <h3 class="title-text">
        Shipping Address
      </h3>
      <p class="sub-text">
        {{ selectedAddress.name }}
        <br />
        {{ selectedAddress.zip_code }}
        {{ selectedAddress.address }}
        <br />
        {{ selectedAddress.state }}<br />
        {{ selectedAddress.country }}
      </p>
    </div>
  </div>

  <!-- </div> -->
</template>
<script>
// import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShippingCard",
  data() {
    return {};
  },
  props: {
    sellerId: String
  },
  components: {},
  methods: {
    editAddress() {
      this.$emit("editAddress", this.sellerId, this.selectedAddress);
    }
  },
  computed: {
    // ...mapGetters({
    //   selectedAddress: "getSelectedAddressBySellerId"
    // })
    selectedAddress() {
      return (
        this.$store.getters.getSelectedAddressBySellerId(this.sellerId) ||
        this.$store.getters.getDefaultAddress
      );
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.shipment-info__address {
  position: relative;
  margin-right: 30px;
  width: 100%;
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
    min-width: 270px;
    width: 100%;
    max-width: 340px;
    padding: 20px;
    padding-right: 60px;
    cursor: pointer;
    position: relative;
    margin-bottom: 20px;
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

.shipping-action-btn__edit {
  position: absolute;
  right: 15px;
  top: 25px;
  &:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M17.699.845c-1.072-1.07-2.809-1.07-3.881 0l-.972.977L2.505 12.158l-.022.022c-.005.006-.005.011-.011.011-.011.017-.028.033-.038.05 0 .005-.006.005-.006.01-.011.017-.016.028-.028.045-.005.005-.005.01-.01.016l-.017.044c0 .005-.005.005-.005.011l-2.295 6.9c-.067.196-.016.414.132.56.104.102.244.16.39.159.06-.001.118-.01.175-.028l6.895-2.3c.005 0 .005 0 .01-.005.018-.005.035-.012.05-.022.004 0 .008-.002.011-.005.016-.011.038-.022.055-.033.016-.011.033-.028.05-.039.005-.005.01-.005.01-.01.006-.006.017-.012.022-.023L19.186 6.208c1.07-1.072 1.07-2.808 0-3.88L17.7.844zM7.489 16.368l-3.82-3.82 9.562-9.562 3.82 3.82-9.562 9.562zM3.13 13.564L6.468 16.9 1.456 18.57l1.674-5.006zM18.412 5.44l-.581.587-3.821-3.82.588-.588c.642-.642 1.684-.642 2.327 0l1.493 1.493c.638.646.635 1.685-.006 2.328z' transform='translate(-1063 -392) translate(370 277) translate(29 94) translate(392) translate(272 21)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  }
}


@media (max-width: 380px) {
  .shipment-info__gray-box {
      min-width: 320px;
  }
}

</style>
