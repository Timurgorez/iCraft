<template>
  <div class="filter-product-block">
    <b-container class="default-max-container">
      <b-row align-h="center" class="filter-product-block__wrapper">
        <b-col
          cols="6"
          md="2"
          class="centered filter-product-block-wrap"
          :style="{
            backgroundColor:
              showAllFilters.includes('priceFilter') && showFilter && isMobile
                ? '#7f13a6'
                : 'transparent'
          }"
          @click.stop="openPriceFilter"
        >
          <div class="filter-product-block__one-filter">
            <span class="filter-product-block__text">Price Range:</span>
            <span class="filter-product-block__blue-text"
              >({{ model_price_name }})
              <span class="filter-product-block__arrow"></span
            ></span>
          </div>
        </b-col>
        <b-col
          cols="6"
          md="4"
          class="centered filter-product-block-wrap"
          :style="{
            backgroundColor:
              showAllFilters.includes('colorFilter') && showFilter && isMobile
                ? '#7f13a6'
                : 'transparent'
          }"
          @click.stop="openColorFilter"
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
                  }}
                  <span class="filter-product-block__arrow"></span
                ></span>
              </div>
            </span>
          </div>
        </b-col>
        <b-col
          cols="6"
          md="4"
          class="centered filter-product-block-wrap"
          :style="{
            backgroundColor:
              showAllFilters.includes('categoryFilter') &&
              showFilter &&
              isMobile
                ? '#7f13a6'
                : 'transparent'
          }"
          @click.stop="openCategoryFilter"
        >
          <div class="filter-product-block__one-filter">
            <span class="filter-product-block__text">Category:</span>
            <span class="filter-product-block__blue-text"
              >{{ categoryNames }}
              <span class="filter-product-block__arrow"></span
            ></span>
          </div>
        </b-col>
        <b-col
          cols="6"
          md="2"
          class="centered filter-product-block-wrap"
          :style="{
            backgroundColor:
              showAllFilters.includes('sortFilter') && showFilter && isMobile
                ? '#7f13a6'
                : 'transparent'
          }"
          @click.stop="openSortFilter"
        >
          <div class="filter-product-block__one-filter justify-content-start">
            <span class="filter-product-block__text">Sort By:</span>
            <span class="filter-product-block__blue-text"
              >{{ this.model_sort }}
              <span class="filter-product-block__arrow"></span
            ></span>
          </div>
        </b-col>
      </b-row>

      <div :class="['filter-block', showFilter && 'show-filter']">
        <div class="filter-block__inner-wrap">
          <b-container class="default-max-container" fluid>
            <b-row
              align-h="center"
              class="filter-block__filter"
              align-v="stretch"
            >
              <b-col
                v-show="showAllFilters.includes('priceFilter')"
                cols="12"
                md="2"
                class="filter-block__filter-price"
              >
                <p class="filter-block__mobile">Price range</p>
                <PriceGroup
                  ref="priceFilter"
                  @model_price="model_price_trigger"
                  @model_price_min="model_price_min_trigger"
                  @model_price_max="model_price_max_trigger"
                />
              </b-col>
              <b-col
                v-show="showAllFilters.includes('colorFilter')"
                cols="12"
                md="4"
                class="filter-block__filter-color"
                @click="openColorFilter"
              >
                <p class="filter-block__mobile">Color</p>
                <CheckboxColorGroup
                  ref="colorFilter"
                  :colors="colors"
                  @model_color="model_color_trigger"
                  @all_color="all_color_trigger"
                />
              </b-col>
              <b-col
                v-show="showAllFilters.includes('categoryFilter')"
                cols="12"
                md="4"
                class="filter-block__filter-category"
                @click="openCategoryFilter"
              >
                <p class="filter-block__mobile">Category</p>
                <CheckboxCategoryGroup
                  ref="categoryFilter"
                  @model_category="model_category_trigger"
                />
              </b-col>
              <b-col
                v-show="showAllFilters.includes('sortFilter')"
                cols="12"
                md="2"
                class="filter-block__filter-sort"
                @click="openSortFilter"
              >
                <p class="filter-block__mobile">Sort by:</p>
                <SortGroup
                  ref="sortFilter"
                  :model_sort="model_sort"
                  @model_sort="model_sort_trigger"
                />
              </b-col>
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
      this.model_price = model_price.filter;
      this.model_price_name = model_price.name;
      //model_price.filter.from + " - " + model_price.filter.to;
    },
    model_price_min_trigger(model_price_min) {
      this.model_price_min = parseFloat(model_price_min);
    },
    model_price_max_trigger(model_price_max) {
      this.model_price_max = parseFloat(model_price_max);
    },
    model_category_trigger(model_category) {
      this.model_category = model_category;
    },
    model_color_trigger(model_color) {
      console.log("model_color_trigger", model_color);
      this.model_color = model_color;
    },
    all_color_trigger(all_color) {
      console.log("all_color_trigger", all_color);
      this.all_color = all_color;
    },
    model_sort_trigger(model_sort) {
      this.model_sort = model_sort;
    },

    openFilter(filterName, e) {
      const filter = document.querySelector(".filter-block");
      const filterOpener = document.querySelector(
        ".filter-product-block__wrapper"
      );
      const filterChild = document.querySelector(".filter-block__inner-wrap");
      const filterTop = document.querySelector(".filter-product-block");

      if (
        window.innerWidth <= 768 &&
        e.target.closest(".filter-product-block-wrap")
      ) {
        if (!this.showFilter || this.showAllFilters.includes(filterName))
          this.showFilter = !this.showFilter;
        this.showAllFilters = [filterName];
        if (!this.showFilter) {
          filter.style.height = "0px";
          // this.showAllFilters = [];
        }
      } else if (e.target.closest(".filter-product-block-wrap")) {
        this.showFilter = !this.showFilter;

        if (!this.showFilter) {
          // this.showAllFilters = [];
          filter.style.height = "0px";
        }
      }
      setTimeout(() => {
        if (
          this.showFilter &&
          window.innerHeight <
            filterChild.offsetHeight + filterOpener.offsetHeight
        ) {
          filter.style.height =
            window.innerHeight - filterOpener.offsetHeight + "px";
          window.scrollTo({
            top: filterTop.offsetTop,
            behavior: "smooth"
          });
        } else if (this.showFilter) {
          filter.style.height = filterChild.offsetHeight + "px";
          window.scrollTo({
            top: filterTop.offsetTop,
            behavior: "smooth"
          });
        }
      }, 0);
    },
    closeFilter() {
      const filter = document.querySelector(".filter-block");
      if (this.showFilter) filter.style.height = "0px";
      this.showFilter = false;
    },
    openSortFilter(e) {
      this.openFilter("sortFilter", e);
    },
    openColorFilter(e) {
      this.openFilter("colorFilter", e);
    },
    openCategoryFilter(e) {
      this.openFilter("categoryFilter", e);
    },
    openPriceFilter(e) {
      this.openFilter("priceFilter", e);
    },
    resizeHandler(e) {
      if (e.target.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      if (e.target.innerWidth > 768) {
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
      if (this.showAllFilters.length == 4) {
        this.showAllFilters.forEach(el => this.$refs[el].clearFilter());
      } else {
        this.$refs[this.showAllFilters[0]].clearFilter();
      }
      this.productsForFilter = this.$store.dispatch("loadProducts");
    },
    onApplyHandler() {
      console.log("onApplyHandler");

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
        return this.model_color.slice(0, 3);
      return this.model_color.slice(0, 2);
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
    if (window.innerWidth <= 768) this.isMobile = true;
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
  background-color: #452650;
  display: flex;
  align-items: center;
  color: #ffffff;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 102;
}
.filter-product-block-wrap {
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

@media only screen and (max-width: 1024px) {
  .filter-block {
    // height: 100%;
    // min-height: 600px;
    // overflow-y: scroll;
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
  .filter-product-block-wrap {
    max-height: 50px;
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
  .filter-product-block__arrow {
    display: none;
  }
  .filter-product-block__colors {
    min-height: 30px;
  }
}
</style>
