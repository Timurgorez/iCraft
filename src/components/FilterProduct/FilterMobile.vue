<template>
  <div class="filter-product-block">
    <b-container class="default-max-container">
      <b-row align-h="center" class="filter-product-block__wrapper">
        
        <b-col
          v-b-toggle.collapse-filter-price
          cols="12"
          lg="2"
          class="centered filter-product-block-wrap"
        >
          <div class="filter-product-block__one-filter">
            <span class="filter-product-block__text">Price Range:</span>
            <span class="filter-product-block__blue-text"
              >({{ model_price_name }})</span>
          </div>
          <span class="d-flex filter-product-block__arrow"></span>
        </b-col>
        <b-collapse id="collapse-filter-price" class="w-100" :style="{backgroundColor: '#fff'}">
          <b-col
            cols="12"
            lg="2"
            class="filter-block__filter-price"
          >
            <PriceGroup
              ref="priceFilter"
              :mobile="true"
              @model_price="model_price_trigger"
              @model_price_min="model_price_min_trigger"
              @model_price_max="model_price_max_trigger"
            />
          </b-col>
        </b-collapse>

        <b-col
          v-b-toggle.collapse-filter-color
          cols="12"
          lg="4"
          class="centered filter-product-block-wrap"
        >
          <div class="filter-product-block__one-filter">
            <span
              class="filter-product-block__text d-flex align-content-center align-items-center"
            >
              <div class="mr-1"><span>Color:</span></div>
              <div class="filter-product-block__colors-wrap">
                <div class="filter-product-block__colors">
                  <div
                    v-for="(color, index) of countOfColors"
                    :key="index"
                    :style="[
                      color === 'Multi-Colored'
                        ? { backgroundImage: 'url(./icons/multi-color.svg)' }
                        : { backgroundColor: color },
                      all_color || model_color.length == colors.length
                        ? { display: 'none' }
                        : {}
                    ]"
                    class="filter-product-block__color"
                  ></div>
                </div>
                <span class="filter-product-block__blue-text"
                  >{{
                    (all_color && model_color.length == 0) ||
                    model_color.length == colors.length
                      ? "All"
                      : leftCountColors
                  }}</span>
              </div>
            </span>
          </div>
          <span class="d-flex filter-product-block__arrow"></span>
        </b-col>
        <b-collapse id="collapse-filter-color" class="w-100" :style="{backgroundColor: '#fff'}">
          <b-col
            cols="12"
            lg="4"
            class="filter-block__filter-color"
          >
            <CheckboxColorGroup
              ref="colorFilter"
              :colors="colors"
              @model_color="model_color_trigger"
              @all_color="all_color_trigger"
            />
          </b-col>
        </b-collapse>

        <b-col
          v-b-toggle.collapse-filter-category
          cols="12"
          lg="4"
          class="centered filter-product-block-wrap"
        >
          <div class="filter-product-block__one-filter">
            <span class="filter-product-block__text">Category:</span>
            <span class="filter-product-block__blue-text"
              >{{ categoryNames }}</span>
          </div>
          <span class="d-flex filter-product-block__arrow"></span>
        </b-col>

        <b-collapse id="collapse-filter-category" class="w-100" :style="{backgroundColor: '#fff'}">
          <b-col
            cols="12"
            lg="4"
            class="filter-block__filter-category"
          >
            <CheckboxCategoryGroup
              ref="categoryFilter"
              @model_category="model_category_trigger"
            />
          </b-col>
        </b-collapse>


        <b-col
          v-b-toggle.collapse-filter-sort
          cols="12"
          lg="2"
          class="centered filter-product-block-wrap"
        >
          <div class="filter-product-block__one-filter justify-content-start">
            <span class="filter-product-block__text">Sort By:</span>
            <span class="filter-product-block__blue-text"
              >{{ this.model_sort }}</span>
          </div>
          <span class="d-flex filter-product-block__arrow"></span>
        </b-col>

        <b-collapse id="collapse-filter-sort" class="w-100" :style="{backgroundColor: '#fff'}">
          <b-col
              cols="12"
              lg="2"
              class="filter-block__filter-sort"
            >
              <SortGroup
                ref="sortFilter"
                :model_sort="model_sort"
                @model_sort="model_sort_trigger"
              />
            </b-col>
        </b-collapse>
      </b-row>

      <b-row
        class="filter-block__filter-btns d-flex justify-content-md-end justify-content-sm-center"
      >
        <b-col
          cols="12"
          md="6"
          offset-md="6"
          class="d-flex justify-content-md-end justify-content-sm-center justify-content-center align-items-center"
        >
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
</template>

<script>
import PriceGroup from "./PriceGroup";
import CheckboxColorGroup from "./CheckboxColorGroup";
import CheckboxCategoryGroup from "./CheckboxCategoryGroup";
import SortGroup from "./SortGroup";
import PurpleButton from "../Buttons/PurpleButton";

export default {
  name: "FilterMobile",
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
      model_price_name: "ALL",
      model_price_min: "",
      model_price_max: "",
      model_color: [],
      all_color: true,
      model_category: [],
      model_sort: "Featured",

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
        { name: "Aqua1", color: "red", url: "", border: false },
        { name: "Bright", color: "yellow", url: "", border: false },
        { name: "Bronze", color: "black", url: "", border: false },
        { name: "Burgundy", color: "grey", url: "", border: false },
        { name: "Clear", color: "lightgrey", url: "", border: false },
        { name: "Colorless", color: "orange", url: "", border: false },
        { name: "Copper", color: "green", url: "", border: false },
        { name: "Cranberry", color: "lightgreen", url: "", border: false },
        { name: "Floral", color: "pink", url: "", border: false },
        { name: "Gold", color: "purple", url: "", border: false },
        { name: "Magenta", color: "lightblue", url: "", border: false },
        { name: "Navy", color: "coral", url: "", border: false },
        { name: "Neutral", color: "#30bfcc", url: "", border: false },
        { name: "Peach", color: "blue", url: "", border: false },
        { name: "Purple", color: "#d4d4d4", url: "", border: false },
        { name: "Silver", color: "#f3f3f3", url: "", border: true },
        { name: "Teal", color: "teal", url: "", border: false },
        { name: "Turquoise", color: "turquoise", url: "", border: false },
        { name: "Warm", color: "#af5af5", url: "", border: false },
        {
          name: "Multi",
          color: "Multi-Colored",
          url: "./icons/multi-color.svg",
          border: true
        }
      ],
      selected_colors: [],
      // countOfColors: [],
      showAllFilters: [
        "colorFilter",
        "sortFilter",
        "priceFilter",
        "categoryFilter"
      ],
      isMobile: false
    };
  },
  methods: {
    model_price_trigger(model_price) {
      this.countingCount();
      this.model_price = model_price.filter;
      this.model_price_name = model_price.name;
      //model_price.filter.from + " - " + model_price.filter.to;
    },
    model_price_min_trigger(model_price_min) {
      this.countingCount();
      this.model_price_min = parseFloat(model_price_min);
    },
    model_price_max_trigger(model_price_max) {
      this.countingCount();
      this.model_price_max = parseFloat(model_price_max);
    },
    model_category_trigger(model_category) {
      this.countingCount();
      this.model_category = model_category;
    },
    model_color_trigger(model_color) {
      this.countingCount();
      this.model_color = model_color;
    },
    all_color_trigger(all_color) {
      this.countingCount();
      this.all_color = all_color;
    },
    model_sort_trigger(model_sort) {
      this.countingCount();
      this.model_sort = model_sort;
    },
    countingCount(){
      let count = 0;
      this.showAllFilters.forEach((el) => count += this.$refs[el].count);
      this.$emit('countFilter', count);
    },
    closeFilter() {
      const filter = document.querySelector(".filter-block");
      if (this.showFilter) filter.style.height = "0px";
      this.showFilter = false;
    },
    resizeHandler(e) {
      if (e.target.innerWidth <= 992) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      if (e.target.innerWidth > 992) {
        this.showAllFilters = [
          "priceFilter",
          "colorFilter",
          "categoryFilter",
          "sortFilter"
        ];
        return (this.countOfColors = this.colors.slice(1, 3));
      } else if (e.target.innerWidth > 750) {
        this.closeFilter();
      }
      if (e.target.innerWidth > 360 && e.target.innerWidth < 768)
        return (this.countOfColors = this.colors.slice(1, 3));
      if (e.target.innerWidth < 360)
        return (this.countOfColors = this.colors.slice(1, 4));

      return (this.countOfColors = this.colors.slice(1, 3));
    },
    onCleanHandler() {
      this.$emit('countFilter', 0);
      this.showAllFilters.forEach(el => this.$refs[el].clearFilter());
      this.productsForFilter = this.$store.dispatch("loadProducts");
    },
    onApplyHandler() {
      console.log("onApplyHandler");

      this.$emit('closeFilter');

      let newProduct = [];

      this.productsForFilter = this.$store.getters.products;

      if (
        (this.model_price_min && this.model_price_min > 0) ||
        (this.model_price_max && this.model_price_max > 0) ||
        this.model_price
      ) {
        newProduct = this.productsForFilter.filter(current => {
          let check = false;
          if (
            (this.model_price_min && this.model_price_min > 0) ||
            (this.model_price_max && this.model_price_max > 0)
          ) {
            if (
              parseFloat(current.price.new) >= this.model_price_min &&
              parseFloat(current.price.new) <= this.model_price_max
            ) {
              check = true;
            } else if (
              parseFloat(current.price.new) >= this.model_price_min &&
              !this.model_price_max
            ) {
              check = true;
            } else if (
              parseFloat(current.price.new) <= this.model_price_max &&
              !this.model_price_min
            ) {
              check = true;
            }
          } else if (this.model_price) {
            if (
              current.price.new >= this.model_price.from &&
              current.price.new <= this.model_price.to
            ) {
              check = true;
            }
          }
          return check;
        });
      }

      if (newProduct.length > 0) {
        this.productsForFilter = newProduct;
      }

      if (this.model_category.length > 0) {
        newProduct = this.productsForFilter.filter(current => {
          let check = false;
          current.category.forEach(element => {
            this.model_category.forEach(el => {
              if (element == el) {
                check = true;
              }
            });
          });
          return check;
        });
      }

      if (newProduct.length > 0) {
        this.productsForFilter = newProduct;
      }

      if (this.model_color.length > 0) {
        newProduct = this.productsForFilter.filter(current => {
          let check = false;
          this.model_color.forEach(el => {
            if (current.dominant_color == el) {
              check = true;
            }
          });
          return check;
        });
      }

      if (newProduct.length > 0) {
        this.productsForFilter = newProduct;
      }

      this.$emit("filterProduct", newProduct);
      this.closeFilter();
    }
  },
  computed: {
    countOfColorsDefault() {
      return this.model_color.slice(0, 2);
    },
    countOfColors() {
      if (window.innerWidth > 998) {
        return this.model_color.slice(0, 4);
      }
      if (window.innerWidth > 480 && window.innerWidth < 998)
        return this.model_color.slice(0, 5);
      return this.model_color.slice(0, 5);
    },
    leftCountColors() {
      return this.model_color.length > this.countOfColors.length
        ? "+ " +
            (this.model_color.length - this.countOfColors.length).toString()
        : "";
    },
    categoryNames() {
      return this.model_category.length > 2
        ? this.model_category[0] +
            ", " +
            this.model_category[1] +
            ", " +
            "+" +
            (this.model_category.length - 2).toString()
        : this.model_category.join(", ");
    }
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
    if (window.innerWidth <= 992) this.isMobile = true;
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  }
};
</script>

<style scoped lang="scss">
.filter-product-block {
  min-height: 60px;
  //max-height: 100px;
  width: 100%;
  
  display: flex;
  align-items: center;
  color: #ffffff;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
}
.filter-product-block-wrap {
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #fff;
  background-color: #452650;
}
.filter-product-block__arrow {
  background: url("~@/assets/arrow-white.svg") no-repeat 50% 50%;
  display: inline-block;
  width: 15px;
  height: 8px;
  // position: absolute;
  // top: calc(50% - 4px);
  // right: 8px;
}
.not-collapsed .filter-product-block__arrow {
    transform: rotate(180deg);
  }
.filter-product-block__one-filter {
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.filter-product-block__text {
  font-family: $font_montserrat_regular;
  font-size: 15px;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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

.filter-product-block__colors-wrap {
  display: flex;
  align-items: center;
}

.filter-block {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  // min-height: 300px;
  background-color: #fff;
  z-index: 101;
  color: $text_color;
  overflow-y: auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;

  opacity: 0.5;
  height: 0;
}
.show-filter {
  height: 300px;
  opacity: 1;
  transition: all 0.3s;
}
.filter-block__inner-wrap {
  padding-top: 20px;
  background: #fff;
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

.filter-block__mobile {
  display: none;
  font-family: $font_montserrat_regular;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $purple_color_btn;
  text-transform: uppercase;
}

.custom-checkbox {
  width: 50%;
  margin-right: 0;
}

.filter-block__filter-category {
  border-right: 1px solid #d7d7d7;
}

.filter-block__filter-category,
.filter-block__filter-price,
.filter-block__filter-sort,
.filter-block__filter-color {
  padding-left: 24px;
  padding-right: 24px;
}
.filter-block__filter-price {
  padding-left: 15px;
}
.filter-block__filter-sort {
  padding-right: 15px;
}

.filter-block__filter-btns {
  text-align: right;
  padding: 20px 0;
  background-color: #fff;
}

@media only screen and (max-width: 1024px) {
  .filter-block {
    // height: 100%;
    // min-height: 600px;
    // overflow-y: scroll;
  }
}
@media only screen and (max-width: 992px) {
  .filter-product-block-wrap {
    max-height: 50px;
  }
  .filter-product-block .default-max-container {
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media only screen and (max-width: 768px) {
  .filter-block__mobile {
    display: block;
  }

  .filter-block__filter-sort {
    margin-top: 20px;
  }

  .filter-block__filter-color {
    margin-top: 20px;
    padding-bottom: 10px;
    border-left: none;
    border-right: none;
  }
  .filter-block__filter-price {
    margin-top: 20px;
  }
  .filter-block__filter-category {
    margin-top: 20px;
    border-right: none;
  }
  .purple-custom-btn {
    padding: 12px 15px;
  }

  .filter-block__filter-category,
  .filter-block__filter-price,
  .filter-block__filter-sort,
  .filter-block__filter-color {
    padding-left: 15px;
    padding-right: 15px;
  }
  .filter-block__inner-wrap {
    padding-top: 0;
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
  .filter-product-block__colors {
    min-height: 30px;
  }
}
</style>
