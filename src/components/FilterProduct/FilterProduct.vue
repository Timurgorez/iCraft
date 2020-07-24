<template>
  <div class="filter-product-block">
    <b-container fluid="xl">
      <b-row align-h="center" @click="openFilter">
        <b-col cols="6" md="2" class="centered filter-product-block-wrap">
          <div class="filter-product-block__one-filter">
            <span class="filter-product-block__text">Price Range</span>
            <span class="filter-product-block__blue-text"
              >($50 - $100) <span class="filter-product-block__arrow"></span
            ></span>
          </div>
        </b-col>
        <b-col cols="6" md="4" class="centered filter-product-block-wrap">
          <div class="filter-product-block__one-filter">
            <span class="filter-product-block__text">
              Color <br />
              <div class="filter-product-block__colors-wrap">
              <div
                v-if="countOfColors.length == 0"
                class="filter-product-block__colors"
              >
                <div
                  v-for="(color, index) of countOfColorsDefault"
                  :key="index"
                  :style="{
                    backgroundColor: color.color,
                    backgroundImage: 'url(' + color.url + ')'
                  }"
                  class="filter-product-block__color"
                ></div>
              </div>
              <div v-else class="filter-product-block__colors">
                <div
                  v-for="(color, index) of countOfColors"
                  :key="index"
                  :style="{
                    backgroundColor: color.color,
                    backgroundImage: 'url(' + color.url + ')'
                  }"
                  class="filter-product-block__color"
                ></div>
              </div>

              <span class="filter-product-block__blue-text"
                >+{{ leftCountColors }}
                <span class="filter-product-block__arrow"></span
              ></span>
              </div>
            </span>
          </div>
        </b-col>
        <b-col cols="6" md="4" class="centered filter-product-block-wrap">
          <div class="filter-product-block__one-filter">
            <span class="filter-product-block__text">Category</span>
            <span class="filter-product-block__blue-text"
              >(Earrings / Funky Jewelry / +4)
              <span class="filter-product-block__arrow"></span
            ></span>
          </div>
        </b-col>
        <b-col cols="6" md="2" class="centered filter-product-block-wrap">
          <div class="filter-product-block__one-filter">
            <span class="filter-product-block__text">Sort By:</span>
            <span class="filter-product-block__blue-text"
              >Price Low - High <span class="filter-product-block__arrow"></span
            ></span>
          </div>
        </b-col>
      </b-row>

      <div v-show="showFilter" class="filter-block">
        <b-container fluid="xl">
          <b-row
            align-h="center"
            class="filter-block__filter"
            align-v="stretch"
          >
            <b-col cols="6" md="2" class="filter-block__filter-price">
              <PriceGroup
                @model_price="model_price_trigger"
                @model_price_min="model_price_min_trigger"
                @model_price_max="model_price_max_trigger"
              />
            </b-col>
            <b-col cols="6" md="4" class="filter-block__filter-color">
              <CheckboxColorGroup
                :colors="colors"
                @model_color="model_color_trigger"
              />
            </b-col>
            <b-col cols="6" md="4" class="filter-block__filter-category">
              <CheckboxCategoryGroup
                @model_category="model_category_trigger"
              />
            </b-col>
            <b-col cols="6" md="2" class="filter-block__filter-sort">
              <SortGroup
                :model_sort="model_sort"
                @model_sort="model_sort_trigger"
              />
            </b-col>
          </b-row>
          <b-row align-h="left" class="filter-block__filter-btns">
            <b-col cols="12" md="6" offset-md="6">
              <PurpleButton
                text="Clear all"
                iconClass="clear-icon"
                @clickHandler="onCleanHandler"
              />
              <PurpleButton
                class="ml-4"
                text="Apply"
                iconClass="apply-icon"
                @clickHandler="onApplyHandler"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
import PriceGroup from "./PriceGroup";
import CheckboxColorGroup from "./CheckboxColorGroup";
import CheckboxCategoryGroup from "./CheckboxCategoryGroup";
import SortGroup from "./SortGroup";
import PurpleButton from "../Buttons/PurpleButton";

export default {
  name: "FilterProduct",
  props: {
    products: Array
  },
  components: {
    PriceGroup,
    CheckboxColorGroup,
    CheckboxCategoryGroup,
    SortGroup,
    PurpleButton
  },
  data() {
    return {
      model_price: "",
      model_price_min: "",
      model_price_max: "",
      model_color: [],
      model_category: [],
      model_sort: "",

      productsForFilter: this.products,
      
      showFilter: false,
      colors: [
        { name: "Violet", color: "#7f13a6", url: "", border: false },
        { name: "White", color: "#ffffff", url: "", border: true },
        { name: "Red", color: "#c90000", url: "", border: false },
        { name: "Grey", color: "#808080", url: "", border: false },
        { name: "Pink", color: "#ff36a5", url: "", border: false },
        { name: "Blue", color: "#00afff", url: "", border: false },
        { name: "Yellow", color: "#fed533", url: "", border: false },
        { name: "Black", color: "#000000", url: "", border: false },
        { name: "Orange", color: "#f36b26", url: "", border: false },
        { name: "Green", color: "#36c747", url: "", border: false },
        { name: "Brown", color: "#825d41", url: "", border: false },
        {
          name: "Multi",
          color: "Multi-Colored",
          url: "./assets/multi-color.svg",
          border: true
        }
      ],
      countOfColors: []
    };
  },
  methods: {
    model_price_trigger(model_price) {
      this.model_price = model_price;
    },
    model_price_min_trigger(model_price_min) {
      this.model_price_min = model_price_min;
    },
    model_price_max_trigger(model_price_max) {
      this.model_price_max = model_price_max;
    },
    model_category_trigger(model_category) {
      this.model_category = model_category;
    },
    model_color_trigger(model_color) {
      this.model_color = model_color;
    },
    model_sort_trigger(model_sort) {
      this.model_sort = model_sort;
    },

    openFilter() {
      this.showFilter = !this.showFilter;
    },
    resizeHandler(e) {
      console.log(this.countOfColors);
      if (e.target.innerWidth > 768)
        return (this.countOfColors = this.colors.slice(1, 8));
      if (e.target.innerWidth > 360 && e.target.innerWidth < 768)
        return (this.countOfColors = this.colors.slice(1, 6));
      if (e.target.innerWidth < 360)
        return (this.countOfColors = this.colors.slice(1, 5));

      return (this.countOfColors = this.colors.slice(1, 8));
    },
    onCleanHandler() {
      console.log("onCleanHandler");
    },
    onApplyHandler() {
      console.log("onApplyHandler");
      this.showFilter = false;

      let newProduct = [];

      if(this.model_price_min && this.model_price_min > 0 || this.model_price_max && this.model_price_max > 0 || this.model_price){
        newProduct = this.productsForFilter.filter(current => {
          let check = false;
          if(this.model_price_min && this.model_price_min > 0 || this.model_price_max && this.model_price_max > 0){
            if(current.price.new >= this.model_price_min && current.price.new <= this.model_price_max ){
              check = true;
              console.log('min max  --> ', this.model_price_min, this.model_price_max);
            }
          }else if(this.model_price){
            if(current.price.new >= this.model_price.from && current.price.new <= this.model_price.to){
              check = true;
              console.log('model_price --> ', this.model_price);
              }
          }
          console.log('check', check);
          return check;
        });
      }

      console.log('after price  -> ', newProduct);

      if(this.model_category.length > 0){
        newProduct = this.productsForFilter.filter(current => {
          let check = false;
          current.category.forEach(element => {
            this.model_category.forEach(el => {
              if(element == el){
                console.log('model_category  --> ', this.model_category);
                check = true;
                }
            });
          });
          return check;
        });
      }

      if(this.model_color.length > 0){
        newProduct = this.productsForFilter.filter(current => {
          let check = false;
          this.model_color.forEach(el => {
            if(current.dominant_color == el){
              console.log('model_color  --> ', this.model_color);
              check = true;
              }
          });
          return check;
        });
      }

        
      console.log("newProduct", newProduct);
      
      this.$emit('filterProduct', newProduct);
    }
  },
  computed: {
    countOfColorsDefault() {
      if (window.innerWidth > 768) return this.colors.slice(1, 8);
      if (window.innerWidth > 360 && window.innerWidth < 768)
        return this.colors.slice(1, 6);
      if (window.innerWidth < 360) return this.colors.slice(1, 5);

      return this.colors.slice(1, 8);
    },
    leftCountColors() {
      return this.countOfColors.length
        ? this.colors.length - this.countOfColors.length
        : this.colors.length - this.countOfColorsDefault.length;
    }
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  }
};
</script>

<style scoped lang="scss">
.filter-product-block {
  min-height: 100px;
  width: 100%;
  background-color: #452650;
  display: flex;
  align-items: center;
  color: #ffffff;
  position: relative;
}
.filter-product-block-wrap {
  padding-top: 15px;
  padding-bottom: 15px;
}
.filter-product-block__arrow {
  background: url("~@/assets/arrow-white.svg") no-repeat 50% 50%;
  display: inline-block;
  width: 15px;
  height: 8px;
}
.filter-product-block__one-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.filter-product-block__text {
  font-family: $font_montserrat_regular;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  margin-right: 10px;
}
.filter-product-block__blue-text {
  font-family: $font_montserrat_regular;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2px;
  color: #afb9ec;
  margin-right: 10px;
  padding: 5px 0;
}

.filter-product-block__colors {
  display: inline-block;
  min-height: 40px;
}

.filter-product-block__color {
  margin-top: 7px;
  width: 26px;
  height: 26px;
  border-radius: 2px;
  display: inline-flex;
  // margin-bottom: -7px;
  margin-right: 8px;
}

.filter-product-block__colors-wrap{
  display: flex;
  align-items: center;
}

.filter-block {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  min-height: 300px;
  background-color: #fff;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  z-index: 9;
  color: $text_color;
  padding-top: 20px;
}

.filter-block__filter-price {
  fieldset {
    padding: 0;
  }
  .custom-control .custom-radio {
    padding-left: 0;
  }
  .custom-control-label {
    font-family: $font_montserrat_regular;
    font-size: 14px;
    color: $text_color;
  }
  input[type="text"] {
    padding: 5px;
    border: 1px solid $border_grey_color;
    border-radius: 6px;
    width: 100%;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .custom-control-label:before,
  .custom-control-label:after {
    display: none;
  }
}

.filter-block__filter-color-group {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.filter-block__filter-color {
  border-left: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
}

.custom-checkbox {
  width: 50%;
  margin-right: 0;
}

.filter-block__filter-category {
  border-right: 1px solid #d7d7d7;
}

.filter-block__filter-btns {
  text-align: right;
  padding: 40px 0;
}

@media only screen and (max-width: 768px) {
  .filter-block__filter-color {
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d7d7d7;
  }
  .filter-block__filter-price {
    border-right: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
  }
}

@media only screen and (max-width: 580px) {
  .filter-product-block__text,
  .filter-product-block__blue-text {
    font-size: 14px;
  }
  .filter-product-block__color {
    width: 18px;
    height: 18px;
  }
  .filter-product-block__arrow{
    display: none;
  }
  .filter-product-block__colors{
    min-height: 30px;
  }
}
</style>
