<template>
  <div :class="['input-text-wrap', this.wrapClass]">
    <input
      :id="id"
      type="text"
      :name="inputName"
      :placeholder="placeholder"
      @change="onChange"
    />
    <div class="error-msg">{{ this.errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  data() {
    return {};
  },
  props: {
    inputName: String,
    wrapClass: String,
    id: String,
    placeholder: String,
    errorMsg: String
  },
  components: {},
  methods: {
    onChange(e) {
      this.$emit("changeHandler", e);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.input-text-wrap {
  input {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    padding: 14px 10px;
    border: 1px solid $checkout_border_gray;
    border-radius: 3px;
    width: 100%;
  }
}

.error-msg {
  display: none;
}

@media only screen and (max-width: 768px) {
  .checkbox-wrap__label {
    font-size: 14px;
  }
}
</style>
