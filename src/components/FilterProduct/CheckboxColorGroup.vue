<template>
  <div class="checkbox-color-group" >
    <div 
      class="checkbox-color-group__color-wrap" 
      >
      <input class="checkbox-color-group__input" 
        @change="onChangeAllHandler"
        id="color-all"
        type="checkbox" 
        name="color" 
        value="all"
        v-model="all"
        />
      <label 
        class="checkbox-color-group__label align-items-start"
        for="color-all"
        >
        <span>ALL</span>
      </label>
    </div>

    <div
      class="checkbox-color-group__color-wrap"
      v-for="(item, index) of colors" 
      :key="index" 
      :style="[{
        backgroundColor: item.color,
        backgroundImage: 'url('+item.url+')',
        border: item.border && '1px solid #000000'
      }]"
    >
      <input class="checkbox-color-group__input" 
        :id="'color'+index" 
        v-model="model_color" 
        type="checkbox" 
        name="color" 
        :value="item.color"
        />
      <label 
        class="checkbox-color-group__label" 
        :for="'color'+index"
        >
        <span>{{item.name}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxColorGroup",
  props: {
    colors: Array
  },
  data() {
    return {
      all: true,
      model_color: [],
    };
  },
  methods: {
    onChangeAllHandler(e){
      if(e.target.checked) {
        this.model_color = [];
        this.model_color = this.colors.map(el => el.color);
      }else{
        this.model_color = [];
      }
    }
  },
  created() {
     this.model_color = this.colors.map(el => el.color);
  },
  watch:{
    model_color(val){
      this.$emit('model_color', val);
      this.all = this.model_color.length === this.colors.length;
      return val;
    },
  }
};
</script>

<style scoped lang="scss">


.checkbox-color-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -20px;
}

.checkbox-color-group__color-wrap{
  position: relative;
  width: 42px;
  height: 42px;
  margin: 20px;
  border-radius: 2px
}
.checkbox-color-group__color-wrap:first-child{
  width: 100%;
  height: 34px;
  padding: 7px 18px 10px;
  margin: 0;
  .checkbox-color-group__label{
    height: 20px;
  }
  .checkbox-color-group__label span{
    position: static;
    font-size: 14px;
  }
}

.checkbox-color-group__label{
  font-family: $font_montserrat_regular;
  font-size: 12px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  span{
    position: relative;
    bottom: -30px;
    left: 0;
  }
}


.checkbox-color-group__input{
  display: none;
  &:checked + .checkbox-color-group__label{
    color: $purple_color;
  }
  &:checked + .checkbox-color-group__label:after{
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: $purple_color;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M15.82 2.05c-.24-.24-.63-.24-.87 0l-9.976 9.975L1.051 8.1c-.24-.24-.63-.24-.87 0-.241.24-.241.63 0 .87l4.358 4.36c.24.24.63.24.87 0L15.82 2.92c.241-.24.241-.63 0-.87z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
}


.checkbox-color-group__color-wrap:first-child .checkbox-color-group__input:checked + .checkbox-color-group__label:after{
  border-radius: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23BC00FF' fill-rule='evenodd' d='M17.797 2.306c-.27-.27-.708-.27-.979 0L5.596 13.528 1.182 9.114c-.27-.27-.709-.27-.98 0-.27.27-.27.709 0 .979l4.904 4.904c.27.27.71.27.98 0L17.796 3.285c.27-.27.27-.709 0-.98z'/%3E%3C/svg%3E");
}


</style>
