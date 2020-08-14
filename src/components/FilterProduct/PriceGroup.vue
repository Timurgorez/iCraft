<template>
  <div class="radio-group">
    <div class="radio-group__radio">
      <div class="radio-group__radio-wrap" v-for="(item, index) of price_data_filter" :key="index">
        <input 
          class="radio-group__radio-input" 
          :id="'price'+index" 
          v-model="model_price" 
          type="radio" 
          name="price" 
          :value="item" />
        <label class="radio-group__radio-label" :for="'price'+index">{{item.name}}</label>
      </div>
    </div>
    <div class="radio-group__inputs">
      <input class="radio-group__input-min" type="text" name="price" v-model="model_price_min" placeholder="$ Min">
      <input class="radio-group__input-max" type="text" name="price" v-model="model_price_max" placeholder="$ Max">
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceGroup",
  props: {

  },
  data() {
    return {
      model_price:  {
        name: 'ALL',
        value: 'all',
        filter: {from: 0, to: 999999999}
      },
      model_price_min: '',
      model_price_max: '',


      price_data_filter: [
      {
        name: 'ALL',
        value: 'all',
        filter: {from: 0, to: 999999999}
      },{
        name: 'Under $25',
        value: '<$25',
        filter: {from: 0, to: 25}
      },{
        name: '$25  -  $50',
        value: '$25-$50',
        filter: {from: 25, to: 50}
      },{
        name: '$50  -  $100',
        value: '$50-$100',
        filter: {from: 50, to: 100}
      },{
        name: '$100  -  $200',
        value: '$100-$200',
        filter: {from: 100, to: 200}
      },{
        name: '$200  & Above',
        value: '$200>',
        filter: {from: 200, to: 999999999}
      }]
    };
  },
  methods: {
    clearFilter(){
      this.model_price =  {
        name: 'ALL',
        value: 'all',
        filter: {from: 0, to: 999999999}
      };
      this.model_price_min = '';
      this.model_price_max = '';
    }
  },
  watch:{
    model_price(val){
      this.$emit('model_price', val);
      return val;
    },
    model_price_min(val){
      this.$emit('model_price_min', val);
      return val;
    },
    model_price_max(val){
      this.$emit('model_price_max', val);
      return val;
    }
  },
  computed: {
    
  }
};
</script>

<style scoped lang="scss">


.radio-group{
  margin-top: 10px;
}

.radio-group__radio-wrap{
  position: relative;
}

.radio-group__radio-label{
  font-size: 14px;
  width: 100%;
  margin-bottom: 1rem;
  font-family: $font_montserrat_regular;
}
.radio-group__input-max,
.radio-group__input-min{
  border: 1px solid $border_hover_grey_color;
  border-radius: 6px;
  font-size: 14px;
  padding: 11px;
  margin: 10px 0;
  width: 48%;
  font-family: $font_montserrat_italic;
}
.radio-group__input-min{
  margin-right: 4%;
}

.radio-group__radio-input{
  display: none;
  
  &:checked + .radio-group__radio-label{
    color: $purple_color;
  }
  &:checked + .radio-group__radio-label:after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 18px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23BC00FF' fill-rule='evenodd' d='M17.797 2.306c-.27-.27-.708-.27-.979 0L5.596 13.528 1.182 9.114c-.27-.27-.709-.27-.98 0-.27.27-.27.709 0 .979l4.904 4.904c.27.27.71.27.98 0L17.796 3.285c.27-.27.27-.709 0-.98z'/%3E%3C/svg%3E");
  }
  
}

@media only screen and (max-width: 768px) {
  .radio-group{
    display: flex;
    flex-wrap: wrap;
  }
  .radio-group__radio{
    margin-right: 4%;
  }
  .radio-group__radio,
  .radio-group__inputs{
    width: 48%;
    .radio-group__input-min,
    .radio-group__input-max{
      width: 100%;
      margin-right: 0;
      padding: 11px;
    }
  }
}

</style>
