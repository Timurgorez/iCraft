<template>
  <section class="d-flex flex-row flex-wrap justify-content-center mt-3">
    <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block"
         v-for="(label, index) in labels"
         :key="index"
         :icon="label" :class="'product-label product-label__'+ label" >
    </div>
    <div class="d-xl-none d-lg-none d-md-none d-sm-block"
        v-for="(label, index) in labels"
         :key="index+label"
         :icon="label" :class="'product-label product-label__'+ label + '-mobile'" >
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
  height: 30px;
  background-size: contain;
  margin: 5px 5px;
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

// mobile styles
.product-label__handmade-mobile {
  background-image: url("~@/assets/product_labels/handmade-mobile.svg");
}
.product-label__exclusive-mobile {
  background-image: url("~@/assets/product_labels/exclusive-mobile.svg");
}

.product-label__trusted-mobile {
  background-image: url("~@/assets/product_labels/trusted-mobile.svg");
}

.product-label__bestseller-mobile {
  background-image: url("~@/assets/product_labels/bestseller-mobile.svg");
}

.product-label__made-in-usa-mobile {
  background-image: url("~@/assets/product_labels/made-in-usa-mobile.svg");
}

.product-label__new-mobile {
  background-image: url("~@/assets/product_labels/new-mobile.svg");
}

.product-label__authentic-indigenous-mobile {
  background-image: url("~@/assets/product_labels/authentic-indigenous-mobile.svg");
}

.product-label__made-in-canada-mobile {
  background-image: url("~@/assets/product_labels/made-in-canada-mobile.svg");
}

.product-label__new-updated-mobile {
  background-image: url("~@/assets/product_labels/new-updated-mobile.svg");
}

</style>