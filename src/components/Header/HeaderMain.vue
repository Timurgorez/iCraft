<template>
  <b-container class="header-main" fluid>
    <b-row class="header-main__top">
      <b-col cols="12" lg="3" class="header-logo mb-3">
        <router-link :to="{ name: 'CollectionPage' }">
          <img
            src="~@/assets/desctop/pages/collectionPage/group.png"
            alt="iCraft Logo"
          />
        </router-link>
      </b-col>
      <b-col
        cols="12"
        lg="6"
        class="search-bar mb-3 d-flex justify-content-center"
      >
        <form class="form-search">
          <!-- <select name="" id="">
            <option value="all">All</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
          </select> -->
          <b-form-select
            v-model="selectedSearch"
            :options="searchOptions"
          ></b-form-select>
          <input type="text" placeholder="Search for handmade" />
          <button type="submit"></button>
        </form>
      </b-col>
      <b-col cols="12" lg="3" class="personal-info mb-3">
        <div class="personal-info__top">
          <a href="#" class="sell-handmade__link">Sell Handmade</a>
          <CurrencyLang />
        </div>
        <div class="personal-info__bottom">
          <ShoppingBag />
          <Favorite />
          <Notification />
          <UserMenu />
        </div>
      </b-col>
    </b-row>
    <Navigation />
  </b-container>
</template>

<script>
import ShoppingBag from "@/components/Header/ShoppingBag.vue";
import Favorite from "@/components/Header/Favorite.vue";
import Notification from "@/components/Header/Notification.vue";
import CurrencyLang from "@/components/CurrencyLang/CurrencyLang.vue";
import Navigation from "@/components/Header/Navigation.vue";
import UserMenu from "@/components/Header/UserMenu.vue";

export default {
  name: "HeaderMain",
  data() {
    return {
      selectedSearch: "all",
      searchOptions: [
        { value: "all", text: "All" },
        { value: "Option1", text: "Option1" },
        { value: "Option2", text: "Option2" }
      ]
    };
  },
  props: {},
  components: {
    ShoppingBag,
    CurrencyLang,
    Navigation,
    Favorite,
    Notification,
    UserMenu
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.header-main {
  min-height: 100px;
  width: 100%;
  background-size: 120%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #fff;
  box-shadow: 0 11px 16px 0 rgba(38, 38, 38, 0.15);
  justify-content: space-between;
}
.header-main__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 150px;
  width: 100%;
}

.personal-info {
  justify-content: flex-end;
  display: flex;
  flex-wrap: wrap;

  .sell-handmade__link {
    margin-right: 20px;
  }
}
.personal-info__top {
  margin-bottom: 22px;
}
.personal-info__top,
.personal-info__bottom {
  display: flex;
  align-items: center;
}

.header-logo img {
  height: 74px;
  padding-left: 30px;
}

.form-search {
  border: 1px solid #5f5f5f;
  border-radius: 4px;
  height: 60px;
  display: flex;
  align-items: center;
  max-width: 740px;
  width: 100%;
  input {
    border: none;
    outline: none;
    font-size: 16px;
    font-family: $font_montserrat_regular;
    color: $text_color;
    padding-left: 20px;
    width: 100%;
  }
  .custom-select {
    border: none;
    border-right: 1px solid #dadada;
    border-radius: 0;
    height: 80%;
    width: 70px;
    font-family: $font_montserrat_regular;
    color: $text_color;
    &:focus {
      outline: none;
    }
    option {
      color: $text_color;
    }
  }
  button {
    border: none;
    background: $bg_purple;
    height: 100%;
    display: inline-block;
    width: 78px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFF'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M11 2.5c4.694 0 8.5 3.806 8.5 8.5 0 2.167-.811 4.145-2.146 5.646L23.707 23l-.707.707-6.354-6.353C15.145 18.689 13.167 19.5 11 19.5c-4.694 0-8.5-3.806-8.5-8.5S6.306 2.5 11 2.5zm0 1c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5z' transform='translate(-1285 -63) translate(590 45) translate(695 18)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 26px;
  }
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 580px) {
}
</style>
