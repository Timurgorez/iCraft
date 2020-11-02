<template>
  <div class="user-menu-mobile">
    <b-dropdown
      variant="link"
      toggle-class="text-decoration-none d-flex align-items-center"
      no-caret
    >
      <template v-slot:button-content>
        <span class="user-menu-mobile__icon"></span>
      </template>
      <b-dropdown-item>EN ($CAD)</b-dropdown-item>
      <b-dropdown-item>EN ($GBR)</b-dropdown-item>
      <b-dropdown-item>EN ($AUD)</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "UserMenuMobile",
  props: {},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-menu-mobile {
  display: flex;
  align-items: center;
  margin-top: -10px;
}
.user-menu-mobile__icon {
  width: 26px;
  height: 26px;
  display: inline-flex;
  background: url("~@/assets/nav_mobile/avatar.svg") no-repeat 50% 50%;
  margin-left: 5px;
}

@media only screen and (max-width: 992px) {
  .user-menu-mobile {
    margin-top: 0;
  }
}
</style>
