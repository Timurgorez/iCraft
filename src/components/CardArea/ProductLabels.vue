<template>
  <section class="d-flex flex-row flex-wrap justify-content-center mb-4">
    <div v-for="(label, index) in labels"
         :key="index"
         :icon="label" :class="'product-label product-label__'+ label" >
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductLabels",
  props: {
    labels: Array
  },
  data() {
    return{}
  }
}
</script>

<style scoped lang="scss">
.product-label {
  width: 30px;
  height: 24px;
  background-size: cover;
  margin: 5px 0px;
  background-repeat: no-repeat;
}

.product-label__handmade {
  width: 120px;
  background-image: url("~@/assets/product_labels/handmade.svg");
}
.product-label__exclusive {
  width: 100px;
  background-image: url("~@/assets/product_labels/exclusive.svg");
}

.product-label__trusted {
  width: 135px;
  background-image: url("~@/assets/product_labels/trusted.svg");
}

.product-label__bestseller {
  width: 105px;
  background-image: url("~@/assets/product_labels/bestseller.svg");
}

.product-label__made-in-usa {
  width: 125px;
  background-image: url("~@/assets/product_labels/made-in-usa.svg");
}

.product-label__new {
  width: 125px;
  background-image: url("~@/assets/product_labels/new.svg");
}

.product-label__authentic-indigenous {
  width: 190px;
  background-image: url("~@/assets/product_labels/authentic-indigenous.svg");
}

.product-label__made-in-canada {
  width: 155px;
  background-image: url("~@/assets/product_labels/made-in-canada.svg");
}

.product-label__new-updated {
  width: 135px;
  background-image: url("~@/assets/product_labels/new-updated.svg");
}

// TODO: mobile styles
</style>