<template>
  <b-row class="header-main__nav">
    <div class="header-main__wrap-link">
      <a
        href="#"
        @click.prevent="openMenu"
        :class="[
          { hide: this.isFilterOpen },
          { active: this.isMenuOpen },
          'nav-link',
          'without-line',
          'nav-link__menu'
        ]"
      >
        <span></span>Menu</a
      >
      <a
        href="#"
        @click.prevent="openFilter"
        :class="[
          { hide: this.isMenuOpen },
          { active: this.isFilterOpen },
          'nav-link',
          'without-line',
          'nav-link__filters'
        ]"
        ><span class="nav-link__filters-icon"></span>Filters
        <span class="nav-link__filters-count">3</span></a
      >
    </div>
    <div :class="[{ show: isMenuOpen }]" class="header-main__menu">
      <MainSearch classWrap="search-mobile-wrap" />
      <BuildMenuMobile />
    </div>
    <div class="filter-wrap_animate" :class="[{ show: isFilterOpen }]">
      <FilterMobile />
    </div>
  </b-row>
</template>
<script>
import FilterMobile from "@/components/FilterProduct/FilterMobile.vue";
import BuildMenuMobile from "@/components/Header/BuildMenuMobile.vue";
import MainSearch from "@/components/Header/MainSearch.vue";

export default {
  name: "NavigationMobile",
  data() {
    return {
      isFilterOpen: false,
      isMenuOpen: false
    };
  },
  props: {},
  components: { FilterMobile, BuildMenuMobile, MainSearch },
  methods: {
    openFilter() {
      if (this.isMenuOpen) this.isMenuOpen = false;
      this.isFilterOpen = !this.isFilterOpen;
    },
    openMenu() {
      if (this.isFilterOpen) this.isFilterOpen = false;
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped lang="scss">
.header-main__menu,
.filter-wrap_animate {
  width: 100%;
  height: 0;
  overflow: auto;
  transition: height 0.2s;
}

.show {
  transition: height 0.2s;
  height: calc(100vh - 100px);
  background: rgba(0, 0, 0, 0.5);
}

.border-right-grey:after {
  content: "";
  display: block;
  width: 1px;
  height: 95%;
  position: absolute;
  right: 15px;
  top: 30px;
  background: #d7d7d7;
  // border-right: 1px solid #d7d7d7;
}

.header-main__nav {
  position: relative;
  width: 100%;
  .header-main__wrap-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: $bg_purple;
    min-height: 50px;
  }
}

.nav-link {
  padding: 0.8rem 1rem;
  display: inline-block;
  position: relative;
  font-family: $font_montserrat_semi_bold;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  padding-left: 40px;

  &:hover {
    background: $red_color_btn;
    color: #fff;
    .nav-link {
      opacity: 1;
    }
  }
  &:hover {
    background: $red_color_btn;
    opacity: 1;
  }
}

.nav-link__menu {
  margin-left: 10px;
}
.nav-link__filters {
  padding-right: 30px;
  margin-right: 10px;
  &:hover .nav-link__filters-count {
    background: #fff;
    color: $text_color_red;
  }
}

.nav-link__filters .nav-link__filters-icon,
.nav-link__menu span {
  width: 26px;
  height: 26px;
  display: block;
  display: inline-block;
  position: absolute;
  left: 10px;
  top: calc(50% - 13px);
}
.nav-link__filters .nav-link__filters-icon {
  background-image: url("~@/assets/nav_mobile/filter.svg");
}
.nav-link__menu span {
  background-image: url("~@/assets/nav_mobile/menu.svg");
}

.nav-link__filters.active .nav-link__filters-icon,
.nav-link__menu.active span {
  background-image: url("~@/assets/nav_mobile/menu-close.svg");
}

.header-main__wrap-sublink {
  padding: 10px 25px 35px 25px;
  display: none;
  width: 100%;
  background: #fff;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  // transform: translateY(-20px);
  .main-category-img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    max-width: 230px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.13;
    letter-spacing: normal;
    color: $text_color;
    padding-right: 15px;
  }
  h3 {
    font-family: $font_montserrat_regular;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 21px;
    margin-top: 26px;
  }
}

.grid-img__row {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  max-width: 510px;
}

/* Create two equal columns that sits next to each other */
.grid-img__column {
  flex: 30%;
  padding: 0 10px;
}

.grid-img__column img {
  margin-top: 8px;
  vertical-align: middle;
  margin-bottom: 13px;
  width: 100%;
  height: auto;
}

.product-labels {
  margin-top: 30px;
  li {
    margin-bottom: 20px;
  }
}
.header-main__nav .header-main__wrap-link .nav-link__community {
  padding-left: 50px;
}

.nav-link__filters .nav-link__filters-count {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $text_color_red;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 12px;
  color: #fff;
  font-family: Montserrat-Regular, serif;
  font-size: 14px;
  font-weight: 500;
}

::v-deep.search-mobile-wrap {
  padding: 10px 20px;
  width: 100%;
  background: #ebebeb;
  .form-search {
    height: 42px;
  }
}

.hide {
  transform: translateX(-3000px);
}
</style>
