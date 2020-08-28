<template>
  <div :class="['note-seller-wrap', this.wrapClass]">
    <label :for="this.id" class="note-seller__label">
      {{ this.labelText }}

      <textarea
        :id="this.id"
        :name="this.inputName"
        :value="this.value"
        @change="onChange"
        rows="2"
        cols="35"
      ></textarea>
    </label>
    <div class="error-msg">{{ this.errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "NoteForSeller",
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
.note-seller-wrap {
  input {
    display: none;
  }
}

.note-seller__label {
  position: relative;
  font-size: 16px;
  font-family: $font_montserrat_regular;
  margin-bottom: 0;

  &:focus {
    outline: none;
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
