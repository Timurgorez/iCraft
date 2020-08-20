<template>
  <div class="size-choose">
    <span>Size:</span>
    <div
      class="size-choose__wrap-input"
      v-for="(size, index) in this.product_size"
      :key="index"
    >
      <input
        class="size-choose__radio-input"
        :id="'size-choose' + index"
        v-model="model_size"
        type="radio"
        name="size-choose"
        :value="size"
      />
      <label class="size-choose__radio-label" :for="'size-choose' + index">{{
        size
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SizeChoose",
  data() {
    return {
      product_size: ["S", "M", "L", "XL"],
      model_size: "M"
    };
  },
  props: {},
  components: {},
  methods: {},
  watch: {
    model_size(val) {
      this.$emit("model_size", val);
      return val;
    }
  }
};
</script>

<style scoped lang="scss">
.size-choose {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  span {
    display: inline-block;
    min-width: 95px;
  }
}

.size-choose__radio-input {
  display: none;
}

.size-choose__radio-label {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $font_montserrat_medium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  background: #f3f3f3;
  border: 1px solid #d8d8d8;
  cursor: pointer;
  &:hover {
    background-color: #f9e6ff;
  }
}

.size-choose__radio-input:checked ~ .size-choose__radio-label {
  background-color: #f9e6ff;
  color: $purple_color_btn;
  border-color: $purple_color_btn;
  border-width: 2px;
}

@media only screen and (max-width: 480px) {
}
</style>
