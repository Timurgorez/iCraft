<template>
  <div :class="['size-choose', classWrap]">
    <span>Size:</span>
    <div v-if="!one" class="d-flex ">
      <div
        class="size-choose__wrap-input"
        v-for="(size, index) in productSizes"
        :key="index"
      >
        <input
          class="size-choose__radio-input"
          :id="randomID + index"
          v-model="model_size"
          type="radio"
          :name="randomID + index"
          :value="size"
        />
        <label class="size-choose__radio-label" :for="randomID + index">{{
          size
        }}</label>
      </div>
    </div>
    <div v-else class="d-flex">
      <div
        class="size-choose__wrap-input"
        v-for="(size, index) in productSizes"
        :key="index"
        v-show="initialSize == size"
      >
        <label class="size-choose__radio-label" :for="randomID + index">{{
          size
        }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SizeChoose",
  data() {
    return {
      model_size: this.initialSize
    };
  },
  props: {
    initialSize: {
      type: String,
      default: "S"
    },
    one: {
      type: Boolean,
      default: false
    },
    classWrap: String,
    productSizes: {
      type: Array,
      default: () => {
        return ["S", "M", "L", "XL"];
      }
    }
  },
  components: {},
  methods: {},
  computed: {
    randomID() {
      return `size-choose-${(~~(Math.random() * 1e8)).toString(16)}-`;
    }
  },
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

  &:hover {
    cursor: pointer;
    background-color: #f9e6ff;
  }
}

.size-choose__radio-input:checked ~ .size-choose__radio-label {
  background-color: #f9e6ff;
  color: $purple_color_btn;
  border-color: $purple_color_btn;
  border-width: 2px;
}

@media only screen and (max-width: 768px) {
  .size-choose__radio-label {
    width: 40px;
    height: 40px;
  }
  .size-choose {
    flex-wrap: nowrap;
  }
  .size-choose span {
    min-width: 70px;
  }
}
</style>
