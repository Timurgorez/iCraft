<template>
  <button
    :data-size="this.size"
    :class="['red-custom-btn', this.customClass, this.animate && 'animate']"
    @click="onClick"
  >
    <span :class="['red-custom-btn__icon', iconClass]"> </span>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "RedButton",
  data() {
    return {};
  },
  props: {
    text: String,
    iconClass: String,
    animate: Boolean,
    customClass: String,
    size: String
  },
  components: {},
  methods: {
    onClick() {
      this.$emit("clickHandler");
    }
  }
};
</script>

<style scoped lang="scss">
.red-custom-btn {
  border: 1.5px solid $red_color_btn;
  font-family: $font_montserrat_medium;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  color: #fff;
  padding: 12px 28px;
  display: inline-flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background: $red_color_btn;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}

.red-custom-btn__icon {
  display: inline-block;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.apply-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M6.462 13.846v2.77H21.23v.922H6.46v1.847H4.616v-1.847H2.77v-.923h1.846v-2.769h1.847zm12-9.23v2.768h2.769v.924h-2.77v1.846h-1.846V8.307H2.77v-.922h13.846v-2.77h1.847z'/%3E%3C/svg%3E");
}
.clear-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M19.579 4.296l-6.781 6.78 6.78 6.782-.797.798L12 11.873l-6.781 6.783-.798-.798 6.781-6.782-6.78-6.78.797-.798L12 10.278l6.781-6.78.798.798z'/%3E%3C/svg%3E");
}

.accepted-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M25.707 3.33c-.39-.39-1.024-.39-1.414 0L8.083 19.54l-6.376-6.375c-.39-.391-1.024-.391-1.414 0-.39.39-.39 1.023 0 1.414l7.083 7.083c.39.39 1.024.39 1.414 0L25.707 4.745c.39-.39.39-1.024 0-1.415z'/%3E%3C/svg%3E");
}

.place-order-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFF'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M12.357 0c3.025 0 5.485 2.41 5.485 5.371v4.176h1.83c1.68 0 3.047 1.367 3.047 3.047v10.36c0 1.68-1.367 3.046-3.047 3.046H5.047C3.367 26 2 24.633 2 22.953v-10.36c0-1.68 1.367-3.046 3.047-3.046h1.826V5.37C6.873 2.41 9.333 0 12.357 0zm7.315 11.578H5.047c-.56 0-1.016.456-1.016 1.016v10.36c0 .56.456 1.015 1.016 1.015h14.625c.56 0 1.015-.456 1.015-1.016v-10.36c0-.56-.455-1.015-1.015-1.015zm-7.313 2.945c1.038 0 1.88.842 1.88 1.88 0 .664-.346 1.247-.866 1.58v2.228c0 .56-.455 1.016-1.016 1.016-.56 0-1.015-.455-1.015-1.016v-2.23c-.518-.334-.862-.916-.862-1.579 0-1.037.842-1.879 1.88-1.879zm-.002-12.492c-1.904 0-3.453 1.498-3.453 3.34v4.176h6.907V5.37c0-1.842-1.55-3.34-3.454-3.34z' transform='translate(-1544 -1903) translate(1296 1500) translate(160 389) translate(88 14)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
}

.animate {
  border: none;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  padding: 13.5px 28px;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: "";
    width: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.35);
    height: 120%;
    left: -10%;
    transform: skewX(-45deg);
    z-index: 1;
  }
  &:hover {
    cursor: pointer;
    &:after {
      left: -20%;
      width: 150%;
    }
  }
}

@media only screen and (max-width: 480px) {
}
</style>
