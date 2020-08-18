<template>
  <div :class="['checkbox-wrap', this.wrapClass]">
    <input
      :id="this.id"
      type="checkbox"
      :name="this.inputName"
      :value="this.value"
      @change="onChange"
      :checked="this.checked"
    />
    <label :for="this.id" class="checkbox-wrap__label">
      {{ this.labelText }}
    </label>
    <div class="error-msg">{{ this.errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  data() {
    return {};
  },
  props: {
    labelText: String,
    inputName: String,
    wrapClass: String,
    checked: {
      type: Boolean,
      default: false
    },
    id: String,
    value: String,
    errorMsg: String
  },
  components: {},
  methods: {
    onChange(e) {
      this.$emit("changeHandler", e);
    }
  }
};
</script>

<style scoped lang="scss">
.checkbox-wrap {
  input {
    display: none;
  }
}

.checkbox-wrap__label {
  position: relative;
  padding-left: 35px;
  font-size: 16px;
  font-family: $font_montserrat_regular;
  margin-bottom: 0;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    border: 2px solid $border_hover_grey_color;
    background-color: #fff;
  }
  &:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    display: none;
    height: 16px;
    width: 16px;
    background: no-repeat 50%/50% 50%;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='97.619px' height='97.618px' viewBox='0 0 97.619 97.618' style='enable-background:new 0 0 97.619 97.618;' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23fff' d='M96.939,17.358L83.968,5.959c-0.398-0.352-0.927-0.531-1.449-0.494C81.99,5.5,81.496,5.743,81.146,6.142L34.1,59.688 L17.372,37.547c-0.319-0.422-0.794-0.701-1.319-0.773c-0.524-0.078-1.059,0.064-1.481,0.385L0.794,47.567 c-0.881,0.666-1.056,1.92-0.39,2.801l30.974,40.996c0.362,0.479,0.922,0.771,1.522,0.793c0.024,0,0.049,0,0.073,0 c0.574,0,1.122-0.246,1.503-0.68l62.644-71.297C97.85,19.351,97.769,18.086,96.939,17.358z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
  }

  &:focus {
    outline: none;
  }
}

.checkbox-wrap input:checked ~ .checkbox-wrap__label {
  &:after {
    display: inline-block;
  }
  &:before {
    border-color: $green_color;
    background-color: $green_color;
  }
}

.error-msg {
  display: none;
}

@media only screen and (max-width: 480px) {
}
</style>
