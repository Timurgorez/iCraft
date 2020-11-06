<template>
  <b-container fluid>
    <b-row class="new-arrivals">
      <ProductCard
        v-for="(item, index) in products"
        :key="item.id"
        class="new-arrivals__card"
        :showRating="false"
        :item="item"
        :index="index"
        :limit="6"
        :size="{
          cols: '6',
          sm: '6',
          md: '4',
          lg: '3',
          xl: '2'
        }"
      />
    </b-row>
  </b-container>
</template>

<script>
import ProductCard from "@/components/ProductInfo/ProductCard";

export default {
  name: "NewArrivals",
  data() {
    return {};
  },
  props: {},
  components: {
    ProductCard
  },
  methods: {},
  computed: {
    products() {
      return this.$store.getters.productSlider;
    }
  }
};
</script>

<style scoped lang="scss">
.new-arrivals {
  justify-content: center;
}
.new-arrivals__card {
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

  ::v-deep.product-card {
    padding-bottom: 10px;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
