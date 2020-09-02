<template>
  <div :class="['note-seller-wrap', this.wrapClass]">
    <label :for="this.id" class="note-seller__label">
      {{ this.labelText }}
    </label>
      <textarea
        :id="this.id"
        :name="this.inputName"
        v-model="value"
        rows="2"
        cols="35"
        :placeholder="this.placeholder"
      ></textarea>
    
    <div class="error-msg">{{ this.errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "NoteForSeller",
  data() {
    return {
      value: ''
    };
  },
  props: {
    labelText: String,
    placeholder:String,
    inputName: String,
    wrapClass: String,
    checked: {
      type: Boolean,
      default: false
    },
    id: String,
    errorMsg: String
  },
  components: {},
  methods: {
    // onChange(e) {
    //   console.log(e);
    //   this.$emit("changeHandler", e);
    // }
  },
  watch:{
    value(val){
      this.$emit("changeHandler", val);
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
