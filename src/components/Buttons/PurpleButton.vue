<template>
  <button
    :data-size="this.size"
    :class="[
      'purple-custom-btn',
      this.customClass,
      this.size,
      this.animate && 'animate',
      this.simpleButton && 'simple-button'
    ]"
    @click="onClick"
  >
    <span :class="['purple-custom-btn__icon', iconClass]"> </span>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "PurpleButton",
  data() {
    return {};
  },
  props: {
    text: String,
    iconClass: String,
    animate: Boolean,
    customClass: String,
    size: String,
    simpleButton: Boolean
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
.purple-custom-btn {
  border: 1.5px solid $purple_color_btn;
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  color: $purple_color_btn;
  padding: 12px 28px;
  display: inline-flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  &[data-size="xl"] {
    padding-left: 100px;
    padding-right: 100px;
  }
}

.purple-custom-btn__icon {
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

.bag-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M22.592 6.68c-.024-.282-.256-.498-.532-.495h-4.042V4.62c0-2.552-2.024-4.62-4.52-4.62C11 0 8.976 2.068 8.976 4.62v1.565H4.935c-.275 0-.505.214-.532.494L3.01 23.05c-.064.759.187 1.51.692 2.072.504.56 1.216.88 1.961.879h15.673c.746 0 1.458-.318 1.962-.88.505-.56.756-1.312.692-2.07L22.592 6.68zM10.04 4.62c0-1.951 1.548-3.533 3.457-3.533 1.91 0 3.457 1.582 3.457 3.533v1.565H10.04V4.62zm12.472 19.766c-.301.338-.728.53-1.176.527H5.658c-.447 0-.874-.191-1.176-.528-.303-.337-.453-.788-.414-1.244l1.35-15.87h3.559v3.392c-.856.269-1.39 1.137-1.257 2.041.133.904.894 1.573 1.789 1.573.894 0 1.654-.669 1.788-1.573.133-.904-.402-1.772-1.257-2.041V7.266h6.914v3.397c-.855.269-1.39 1.137-1.256 2.041.133.904.893 1.573 1.788 1.573s1.655-.669 1.788-1.573c.133-.904-.401-1.772-1.256-2.041V7.266h3.553l1.35 15.87c.044.457-.105.912-.41 1.25zM9.429 11.674c.053.007.106.007.16 0 .393.043.684.394.663.797-.021.404-.348.72-.743.72-.396 0-.723-.316-.744-.72-.021-.403.27-.754.664-.797zm7.977 0c.053.007.107.007.16 0 .393.043.685.394.664.797-.022.404-.348.72-.744.72s-.722-.316-.743-.72c-.022-.403.27-.754.663-.797z'/%3E%3C/svg%3E%0A");
}

.check-purple-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M23.73 3.741c-.36-.36-.945-.36-1.306 0L7.461 18.704l-5.885-5.885c-.36-.361-.945-.361-1.306 0-.36.36-.36.944 0 1.305l6.539 6.538c.36.36.945.36 1.305 0L23.73 5.046c.36-.36.36-.945 0-1.305z'/%3E%3C/svg%3E%0A");
}

.message {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M23.833 3H2.167C.972 3 0 3.972 0 5.167v15.166C0 21.528.972 22.5 2.167 22.5h21.666c1.195 0 2.167-.972 2.167-2.167V5.167C26 3.972 25.028 3 23.833 3zM2.167 4.083h21.666c.08 0 .15.03.225.046-1.875 1.717-8.095 7.407-10.272 9.368-.17.153-.445.336-.786.336s-.616-.183-.787-.337c-2.176-1.96-8.396-7.65-10.272-9.367.075-.016.146-.046.226-.046zm-1.084 16.25V5.167c0-.106.032-.203.06-.3 1.437 1.314 5.777 5.285 8.59 7.844-2.804 2.409-7.145 6.525-8.592 7.905-.026-.092-.058-.183-.058-.283zm22.75 1.084H2.167c-.087 0-.164-.03-.245-.05 1.496-1.425 5.864-5.565 8.62-7.922l.946.856c.447.403.97.616 1.512.616.543 0 1.065-.213 1.511-.616l.947-.856c2.756 2.357 7.124 6.496 8.62 7.922-.081.02-.158.05-.245.05zm1.084-1.084c0 .1-.032.19-.057.283-1.448-1.381-5.789-5.496-8.594-7.905 2.815-2.56 7.154-6.53 8.59-7.844.029.097.06.194.06.3v15.166z'/%3E%3C/svg%3E%0A");
}

.animate {
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: "";
    width: 0;
    bottom: 0;
    background: $purple_color_btn;
    opacity: 0.4;
    height: 120%;
    left: -10%;
    transform: skewX(-45deg);
    z-index: 1;
  }
  &:hover {
    cursor: pointer;
    &:after {
      left: -10%;
      width: 130%;
    }
  }
}

.simple-button {
  .purple-custom-btn__icon {
    display: none;
  }
}

@media only screen and (max-width: 480px) {
}
</style>
