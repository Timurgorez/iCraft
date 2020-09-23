<template>
  <b-popover :custom-class="customClass" :target="target" triggers="hover">
    <h4>{{ title }}</h4>
    {{ text }}
  </b-popover>
</template>
<script>
export default {
  name: "Popover",
  data() {
    return {
      model_select_address:
        this.$store.getters.getSelectedAddress[this.sellerId] ||
        this.$store.getters.getDefaultAddress
    };
  },
  props: {
    customClass: String,
    target: String,
    title: String,
    text: String
  },
  components: {},
  methods: {}
};
</script>
<style scoped lang="scss">
.custom-popover {
  background: #faeeff !important;
  border: 1px solid $purple_color_btn;
  max-width: 250px;
  overflow: hidden;
  .arrow {
    display: none;
  }
}
</style>
