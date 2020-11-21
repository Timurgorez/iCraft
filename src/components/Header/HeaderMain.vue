<template>
  <div>
    <b-container v-if="!isMobile" class="header-main" fluid>
      <b-row class="header-main__top">
        <b-col cols="6" xl="3" lg="4" class="header-logo mb-1 mt-1">
          <router-link :to="{ name: 'HomePage' }">
            <img
              src="~@/assets/desctop/pages/collectionPage/group.png"
              alt="iCraft Logo"
            />
          </router-link>
        </b-col>
        <b-col
          cols="12"
          xl="6"
          lg="4"
          class="search-bar mb-1 mt-1 d-lg-flex justify-content-center d-none"
        >
          <MainSearch />
        </b-col>
        <b-col cols="6" xl="3" lg="4" class="personal-info mb-1 mt-1">
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
    <HeaderMainMobile v-if="isMobile" :showFilterBtn="showFilterBtn" />
  </div>
</template>

<script>
import ShoppingBag from "@/components/Header/ShoppingBag.vue";
import Favorite from "@/components/Header/Favorite.vue";
import Notification from "@/components/Header/Notification.vue";
import CurrencyLang from "@/components/CurrencyLang/CurrencyLang.vue";
import Navigation from "@/components/Header/Navigation.vue";
import UserMenu from "@/components/Header/UserMenu.vue";
import HeaderMainMobile from "@/components/Header/HeaderMainMobile.vue";
import MainSearch from "@/components/Header/MainSearch.vue";

export default {
  name: "HeaderMain",
  data() {
    return {
      isMobile: false
    };
  },
  props: {
    showFilterBtn: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ShoppingBag,
    CurrencyLang,
    Navigation,
    Favorite,
    Notification,
    UserMenu,
    HeaderMainMobile,
    MainSearch
  },
  methods: {
    isMobileHandler() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        window.innerWidth < 992
      ) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  mounted() {
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler, { passive: true });
  }
};
</script>

<style scoped lang="scss">
.header-main {
  min-height: 100px;
  width: 100%;
  background-size: 120%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #fff;
  // box-shadow: 0 11px 16px 0 rgba(38, 38, 38, 0.15);
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
    font-size: 16px;
    font-family: $font_montserrat_regular;
    color: $purple_color_btn;
    text-decoration: underline;
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
  width: 100%;
  padding-left: 30px;
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 580px) {
}
</style>
