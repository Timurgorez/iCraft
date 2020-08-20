<template>
  <div class="more-from-store">
    <div
      class="best-offer__product"
      v-for="(product, index) in getProduct"
      :key="index"
      :data-id="index"
    >
      <router-link
        :to="{ name: 'ProductPage', params: { id: product.id } }"
        class="product-card__link"
      >
        <div
          class="best-offer__img"
          :style="{ backgroundImage: 'url(' + product.images[0] + ')' }"
        ></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreFromThisStore",
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  computed: {
    getProduct() {
      return this.$store.getters.products.slice(0, 8);
    }
  }
};
</script>

<style scoped lang="scss">
.more-from-store {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
}

.best-offer__product {
  display: flex;
  align-items: center;
  margin: 10px;
}

.best-offer__img {
  width: 170px;
  height: 142px;
  border-radius: 6px;
  border: 1px solid $border_grey_color;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;
}

.best-offer__img:hover {
  border: 1px solid $border_hover_grey_color;
}

.best-offer__plus {
  width: 40px;
  height: 100%;
  position: relative;
  text-align: center;
  &:after {
    content: "";
    background-color: #000;
    width: 3px;
    height: 26px;
    display: block;
    position: absolute;
    top: calc(50% - 13px);
    left: calc(50% - 1.5px);
  }
  &:before {
    content: "";
    background-color: #000;
    width: 26px;
    height: 3px;
    display: block;
    position: absolute;
    top: calc(50% - 1.5px);
    left: 7px;
  }
}

.best-offer__equal {
  width: 40px;
  height: 100%;
  position: relative;
  text-align: center;
  &:after {
    content: "";
    background-color: #000;
    width: 20px;
    height: 4px;
    display: block;
    position: absolute;
    top: calc(50% - 8px);
    left: 10px;
  }
  &:before {
    content: "";
    background-color: #000;
    width: 20px;
    height: 4px;
    display: block;
    position: absolute;
    top: calc(50% + 8px);
    left: 10px;
  }
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
}

@media only screen and (max-width: 768px) {
  .best-offer__img {
    width: 160px;
    height: 133px;
  }
}

@media only screen and (max-width: 580px) {
}
</style>
