<template>
  <div class="header-white">
    <div class="header-logo">
      <a href="/">
        <img
          src="~@/assets/desctop/pages/collectionPage/group.png"
          alt="iCraft Logo"
        />
      </a>
    </div>
    <div class="shoping-card-lang-block">
      <ShoppingBag />
      <CurrencyLang />
    </div>
  </div>
</template>

<script>
import ShoppingBag from "../ShoppingBag/ShoppingBag.vue";
import CurrencyLang from "../CurrencyLang/CurrencyLang.vue";

export default {
  name: "HeaderWhite",
  data() {
    return {};
  },
  props: {},
  components: {
    ShoppingBag,
    CurrencyLang
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.header-white {
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

.shoping-card-lang-block {
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-right: 40px;
}

.header-logo img {
  height: 74px;
  padding-left: 30px;
}

@media only screen and (max-width: 768px) {
  .header-white {
  }
}

@media only screen and (max-width: 580px) {
  .header-white {
    justify-content: flex-end;
    min-height: 50px;
  }
  .header-logo {
    display: none;
  }
  .shoping-card-lang-block {
    margin-right: 20px;
  }
}
</style>
