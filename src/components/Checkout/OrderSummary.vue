<template>
  <b-row class="table-product">
    <b-col cols="6">
      <p>title 1</p>
    </b-col>
    <b-col cols="2">
      <p>title 2</p>
    </b-col>
    <b-col cols="2">
      <p>title 3</p>
    </b-col>
    <b-col cols="2">
      <p>title 4</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "TableProduct",
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped lang="scss">
.table-product {
}

@media only screen and (max-width: 480px) {
}
</style>
