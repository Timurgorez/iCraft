<template>
  <div class="header-main-mobile__wrapper">
    <b-container class="header-main-mobile" fluid>
      <b-row class="header-main-mobile__top">
        <b-col cols="6" xl="3" lg="4" class="header-logo">
          <router-link :to="{ name: 'HomePage' }">
            <img
              src="~@/assets/desctop/pages/collectionPage/group.png"
              alt="iCraft Logo"
            />
          </router-link>
        </b-col>

        <b-col cols="6" xl="3" lg="4" class="personal-info align-items-center">
          <ShoppingBag />
          <UserMenuMobile />
        </b-col>
      </b-row>
      <NavigationMobile :showFilterBtn="showFilterBtn" />
    </b-container>
  </div>
</template>

<script>
import ShoppingBag from "@/components/Header/ShoppingBag.vue";
import NavigationMobile from "@/components/Header/NavigationMobile.vue";
import UserMenuMobile from "@/components/Header/UserMenuMobile.vue";

export default {
  name: "HeaderMainMobile",
  data() {
    return {};
  },
  props: {
    showFilterBtn: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ShoppingBag,
    NavigationMobile,
    UserMenuMobile
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.header-main-mobile__wrapper {
  min-height: 100px;
}
.header-main-mobile {
  min-height: 100px;
  width: 100%;
  background-size: 120%;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 11px 16px 0 rgba(38, 38, 38, 0.15);
  justify-content: space-between;
}
.header-main-mobile__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  // min-height: 150px;
  height: 50px;
  width: 100%;
  background: #fff;
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
  height: 40px;
  padding-left: 30px;
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 580px) {
}
</style>
