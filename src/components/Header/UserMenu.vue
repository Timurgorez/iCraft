<template>
  <div class="user-menu">
    <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
      <template v-slot:button-content>
        <span class="user-menu__text"
          ><img
            class="user-menu__photo"
            src="~@/assets/tmp/group-10.jpg"
            alt=""/>
          <span class="user-menu__icon"></span
        ></span>
      </template>
      <b-dropdown-item>EN ($CAD)</b-dropdown-item>
      <b-dropdown-item>EN ($GBR)</b-dropdown-item>
      <b-dropdown-item>EN ($AUD)</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "UserMenu",
  props: {
    products: Array
  },
  data() {
    return {
      countProduct: 2
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-menu {
  display: flex;
  align-items: center;
  margin-top: -10px;
}
.user-menu__photo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.user-menu__text {
  font-family: $font_montserrat_regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.14px;
  color: #070707;
}
.user-menu__icon {
  width: 14px;
  height: 10px;
  display: inline-flex;
  background: url("~@/assets/arrow.svg") no-repeat 50% 50%;
  margin-left: 5px;
}

@media only screen and (max-width: 768px) {
  .user-menu {
    bottom: 18px;
    right: 30px;
    img {
      width: 22px;
      height: 22px;
    }
    .dropdown-menu {
      font-size: 14px;
    }
    .user-menu__text {
      font-size: 14px;
    }
  }
}
</style>
