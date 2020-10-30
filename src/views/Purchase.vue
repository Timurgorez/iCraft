<template>
<section>
  <Header />
  <b-container fluid="xl" class="mt-5">
    <b-row>
      <b-col cols="12">
        <h2 class="default-font-styles">Thank You for Your Purchase!</h2>
        <h3 class="default-font-styles">Your order # 636367</h3>
        <p class="default-font-styles mb-4">We also sent you email confirmation and a temporary password, so you could track the shippment of your order and to make your future purchases easier.</p>
        <RedButton
            text="VIEW ORDER DETAILS"
            iconClass="order-details"
            :animate="true"/>
        <div class="d-flex flex-row flex-wrap mt-4">
          <a href="#" class="default-font-styles">Browse Products  |</a>
          <a href="#" class="ml-2 default-font-styles">My Account  |</a>
          <a href="#" class="ml-2 default-font-styles">Community</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <ProductSlider/>
</section>
</template>

<script>
import ProductSlider from "@/components/StaticComponents/ProductSlider/ProductSlider";
import RedButton from "@/components/Buttons/RedButton";
import Header from "@/components/Header/Header";
export default {
name: "Purchase",
  components: {Header, RedButton, ProductSlider}
}
</script>

<style scoped lang="scss">
.default-font-styles {
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
h2 {
  font-family: $font_neue_kabel;
  font-size: 32px;
  line-height: 0.94;
}
h3 {
  font-family: $font_montserrat_medium;
  font-size: 26px;
  font-weight: 500;
}
p {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  line-height: 1.56;
}
a {
  font-size: 18px;
  font-family: $font_montserrat_regular;
  color: $purple_color_btn;
  &:hover {
    color: $purple_color;
  }
}
</style>