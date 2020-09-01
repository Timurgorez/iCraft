<template>
  <div class="best-offer">
    <div
      class="best-offer__product"
      v-for="(product, index) in getBestOffer"
      :key="index"
      :data-id="index"
    >
      <div
        class="best-offer__img"
        :style="{ backgroundImage: 'url(' + product.images[0] + ')' }"
      ></div>
      <div
        v-if="index < getBestOffer.length - 1"
        class="best-offer__plus"
      >+</div>
      <div v-else class="best-offer__equal">=</div>
    </div>
    <div class="best-offer__final-price">
      <div>
        <span
          >${{ sumProducts }} {{ getBestOffer[0].price.currency_code }}</span
        >
        <span class="best-offer__final-price__discount">15% Off</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BestOffer",
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  computed: {
    getBestOffer() {
      const products = this.$store.getters.products;
      const currenntProduct = products.find(
        obj => obj.id == this.$route.params.id
      );
      const chepestProduct = products.reduce((prev, current) => {
        return +prev.price.new > +current.price.new ? prev : current;
      });
      const randomProduct =
        products[Math.floor(Math.random() * products.length)];

      return [currenntProduct, chepestProduct, randomProduct];
    },
    sumProducts() {
      const products = this.getBestOffer;
      const price = products.map(el => +el.price.new);

      var sum = price.reduce(function(previousValue, value) {
        return previousValue + value;
      });
      return sum * 0.85;
    }
  }
};
</script>

<style scoped lang="scss">
.best-offer {
  display: flex;
  flex-wrap: wrap;
}

.best-offer__product {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
}

.best-offer__img {
  width: 150px;
  height: 144px;
  border-radius: 6px;
  border: 1px solid $border_grey_color;
  background-size: cover;
  background-position: 50% 50%;
}

.best-offer__plus {
  width: 40px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  // &:after {
  //   content: "";
  //   background-color: #000;
  //   width: 3px;
  //   height: 26px;
  //   display: block;
  //   position: absolute;
  //   top: calc(50% - 13px);
  //   left: calc(50% - 1.5px);
  // }
  // &:before {
  //   content: "";
  //   background-color: #000;
  //   width: 26px;
  //   height: 3px;
  //   display: block;
  //   position: absolute;
  //   top: calc(50% - 1.5px);
  //   left: 7px;
  // }
}

.best-offer__equal {
  width: 40px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  // &:after {
  //   content: "";
  //   background-color: #000;
  //   width: 20px;
  //   height: 4px;
  //   display: block;
  //   position: absolute;
  //   top: calc(50% - 8px);
  //   left: 10px;
  // }
  // &:before {
  //   content: "";
  //   background-color: #000;
  //   width: 20px;
  //   height: 4px;
  //   display: block;
  //   position: absolute;
  //   top: calc(50% + 8px);
  //   left: 10px;
  // }
}

.best-offer__final-price {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 140px;
  text-align: left;
  span {
    width: 100%;
    display: block;
    font-size: 20px;
    color: #000;
  }
}
span.best-offer__final-price__discount {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  color: $text_color_red;
  margin-bottom: 10px;
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 580px) {
  .best-offer__img {
    width: 90px;
    height: 75px;
  }
  .best-offer__final-price span {
    font-size: 16px;
  }
}

</style>
