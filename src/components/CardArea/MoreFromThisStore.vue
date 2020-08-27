<template>
  <div class="more-from-store">
    <div
      class="more-from-store__product"
      v-for="(product, index) in getProduct"
      :key="index"
      :data-id="index"
    >
      <router-link
        :to="{ name: 'ProductPage', params: { id: product.id } }"
        class="product-card__link"
      >
        <div
          class="more-from-store__img"
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

.more-from-store__product {
  display: flex;
  align-items: center;
  margin: 10px;
}

.more-from-store__img {
  width: 170px;
  height: 142px;
  border-radius: 6px;
  border: 1px solid $border_grey_color;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  cursor: pointer;
}

.more-from-store__img:hover {
  border: 1px solid $border_hover_grey_color;
}



@media only screen and (max-width: 768px) {
  
}

@media only screen and (max-width: 480px) {
  .more-from-store{
    justify-content: space-evenly;
  }
  .best-offer__product{
      margin: 6px 0;
  }
  .more-from-store__img {
    width: 160px;
    height: 133px;
  }
  .more-from-store__product {
    margin: 7px 5px;
  }
}

</style>
