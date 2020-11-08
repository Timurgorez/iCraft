<template>
  <div class="radio-group">
    <div class="radio-group__radio">
      <div
        class="radio-group__radio-wrap"
        v-for="(item, index) of price_data_filter"
        :key="index"
      >
        <input
          class="radio-group__radio-input"
          :id="'price' + index"
          v-model="model_price"
          type="radio"
          name="price"
          :value="item"
        />
        <label class="radio-group__radio-label" :for="'price' + index">{{
          item.name
        }}</label>
      </div>
    </div>
    <div class="radio-group__inputs">
      <input
        :class="['radio-group__input-min', model_price_min && 'active']"
        type="number"
        name="price"
        v-model="model_price_min"
        placeholder="$ Min"
      />
      <input
        :class="['radio-group__input-max', model_price_max && 'active']"
        type="number"
        name="price"
        v-model="model_price_max"
        placeholder="$ Max"
      />
      <span v-show="error" class="error">Min couldn't be more than max</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceGroup",
  props: {},
  data() {
    return {
      model_price: {
        name: "ALL",
        value: "all",
        filter: { from: 0, to: ">" }
      },
      model_price_min: null,
      model_price_max: null,
      count: 0,
      price_data_filter: [
        {
          name: "ALL",
          value: "all",
          filter: { from: 0, to: ">" }
        },
        {
          name: "Under $25",
          value: "<$25",
          filter: { from: 0, to: 25 }
        },
        {
          name: "$25  -  $50",
          value: "$25-$50",
          filter: { from: 25, to: 50 }
        },
        {
          name: "$50  -  $100",
          value: "$50-$100",
          filter: { from: 50, to: 100 }
        },
        {
          name: "$100  -  $200",
          value: "$100-$200",
          filter: { from: 100, to: 200 }
        },
        {
          name: "$200  & Above",
          value: "$200>",
          filter: { from: 200, to: ">" }
        }
      ],
      error: false
    };
  },
  methods: {
    clearFilter() {
      this.model_price = {
        name: "ALL",
        value: "all",
        filter: { from: 0, to: ">" }
      };
      this.model_price_min = null;
      this.model_price_max = null;
    }
  },
  watch: {
    model_price(val) {
      if (this.price_data_filter.includes(val)) {
        this.model_price_min = "";
        this.model_price_max = "";
      }
      this.count = this.model_price.name == 'ALL' ? 0 : 1;
      this.$emit("model_price", val);
      return val;
    },
    model_price_min(val) {
      this.error =
        +this.model_price_max && +val && +this.model_price_max < +val;
      if (this.model_price_max && val) {
        this.model_price = {
          name: val + " - " + this.model_price_max,
          value: "Custom",
          filter: { from: val, to: this.model_price_max }
        };
      } else {
        this.model_price = {
          name: val + " - >",
          value: "Custom",
          filter: { from: val, to: ">" }
        };
      }
      if (!!this.model_price_max && !val) {
        this.model_price = {
          name: "0 - " + this.model_price_max,
          value: "Custom",
          filter: { from: 0, to: ">" }
        };
      }
      if (!this.model_price_max && !this.model_price_min) {
        this.model_price = {
          name: "ALL",
          value: "all",
          filter: { from: 0, to: ">" }
        };
      }
      this.count = this.model_price.name !== 'All' ? 1 : 0;
      this.$emit("model_price_min", val);
      return val;
    },
    model_price_max(val) {
      this.error =
        +this.model_price_min && +val && +this.model_price_min > +val;
      if (this.model_price_min && val) {
        this.model_price = {
          name: this.model_price_min + " - " + val,
          value: "Custom",
          filter: { from: this.model_price_min, to: val }
        };
      } else {
        this.model_price = {
          name: "0 - " + val,
          value: "Custom",
          filter: { from: 0, to: val }
        };
      }
      if (!!this.model_price_min && !val) {
        this.model_price = {
          name: this.model_price_min + " - >",
          value: "Custom",
          filter: { from: this.model_price_min, to: ">" }
        };
      }
      if (!this.model_price_max && !this.model_price_min) {
        this.model_price = {
          name: "ALL",
          value: "all",
          filter: { from: 0, to: ">" }
        };
      }
      this.count = this.model_price.name !== 'All' ? 1 : 0;
      this.$emit("model_price_max", val);
      return val;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.radio-group {
  margin-top: 5px;
  padding-left: 25px;
}

.radio-group__radio-wrap {
  position: relative;
}

.radio-group__radio-label {
  font-size: 14px;
  width: 100%;
  margin-bottom: 1rem;
  font-family: $font_montserrat_regular;
  color: $text_color;
}
.radio-group__input-max,
.radio-group__input-min {
  border: 1px solid $border_hover_grey_color;
  border-radius: 6px;
  font-size: 14px;
  padding: 11px;
  margin: 10px 0;
  width: 100%;
  font-family: $font_montserrat_italic;
}

.radio-group__inputs {
  position: relative;
}

.radio-group__radio-input {
  display: none;

  &:checked + .radio-group__radio-label {
    color: $purple_color;
  }
  &:checked + .radio-group__radio-label:after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: -25px;
    width: 18px;
    height: 18px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23BC00FF' fill-rule='evenodd' d='M17.797 2.306c-.27-.27-.708-.27-.979 0L5.596 13.528 1.182 9.114c-.27-.27-.709-.27-.98 0-.27.27-.27.709 0 .979l4.904 4.904c.27.27.71.27.98 0L17.796 3.285c.27-.27.27-.709 0-.98z'/%3E%3C/svg%3E");
  }
}

.active {
  border-color: $purple_color_btn;
}

.error {
  font-size: 12px;
  color: $text_color_red;
}

@media only screen and (max-width: 768px) {
  .radio-group {
    display: flex;
    flex-wrap: wrap;
  }
  .radio-group__radio {
  }
  .radio-group__radio,
  .radio-group__inputs {
    width: 100%;
    .radio-group__input-min,
    .radio-group__input-max {
      width: 100%;
      margin-right: 0;
      padding: 11px;
    }
  }
}
</style>
