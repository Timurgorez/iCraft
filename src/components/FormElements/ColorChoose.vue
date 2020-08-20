<template>
  <div class="color-choose">
    <span>Color:</span>
    <div
      class="color-choose__wrap-input"
      v-for="(color, index) in this.product_color"
      :key="index"
      :ref="'color-choose' + index"
    >
      <input
        class="color-choose__radio-input"
        :id="'color-choose' + index"
        v-model="model_color"
        type="radio"
        name="color-choose"
        :value="color.color"
      />
      <label
        :style="{ backgroundImage: 'url(' + color.url + ')' }"
        class="color-choose__radio-label"
        :for="'color-choose' + index"
      ></label>
      <b-tooltip
        :target="() => $refs['color-choose' + index]"
        :title="color.color"
      ></b-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorChoose",
  data() {
    return {
      product_color: [
        {
          color: "red",
          url: "./tmp/colors_of_product/img-1@2x.png"
        },
        {
          color: "yellow",
          url: "./tmp/colors_of_product/img-2@2x.png"
        },
        {
          color: "green",
          url: "./tmp/colors_of_product/img-3@2x.png"
        },
        {
          color: "blue",
          url: "./tmp/colors_of_product/img-4@2x.png"
        }
      ],
      model_color: "red"
    };
  },
  props: {},
  components: {},
  methods: {},
  watch: {
    model_color(val) {
      this.$emit("model_color", val);
      return val;
    }
  }
};
</script>

<style scoped lang="scss">
.color-choose {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  span {
    display: inline-block;
    min-width: 95px;
  }
}

.color-choose__radio-input {
  display: none;
}

.color-choose__radio-label {
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
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;
}

.color-choose__radio-input:checked ~ .color-choose__radio-label {
  color: $purple_color_btn;
  border-color: $purple_color_btn;
  border-width: 2px;
}

@media only screen and (max-width: 768px) {
  .color-choose__radio-label {
    width: 40px;
    height: 40px;
  }
  .color-choose span {
    min-width: 70px;
  }
}
</style>
