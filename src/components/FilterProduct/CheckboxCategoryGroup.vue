<template>
  <div class="checkbox-category-group" >
    <div class="checkbox-category-group__category-wrap" >
      <input class="checkbox-category-group__input" 
        @change="onChangeAllHandler"
        id="category-all"
        v-model="all"
        type="checkbox" 
        name="category" 
        value="all" />
      <label 
        class="checkbox-category-group__label"
        for="category-all">
        ALL
      </label>
    </div>

    <div 
      class="checkbox-category-group__category-wrap" 
      v-for="(item, index) of categories" 
      :key="index"
    >
      <input class="checkbox-category-group__input" 
        :id="'category'+index" 
        v-model="model_category" 
        type="checkbox" 
        name="category" 
        :value="item.value" />
      <label class="checkbox-category-group__label" :for="'category'+index">{{item.name}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxCategoryGroup",
  props: {
    
  },
  data() {
    return {
      all: true,
      model_category: [],
      categories: [
        { value: "Gold Jewelry", name: "Gold Jewelry" },
        { value: "Silver Earrings", name: "Silver Earrings" },
        // { value: 'Eirings', name: 'Eirings', notEnabled: true },
        { value: "Eirings", name: "Eirings", notEnabled: false },
        { value: "Wedding Jewelry", name: "Wedding Jewelry" },
        { value: "Knitted Hats", name: "Knitted Hats" },
        { value: "Chain Charms", name: "Chain Charms" },
        { value: "Handmade Scarves", name: "Handmade Scarves" },
        { value: "iPod/ Phone Accessories", name: "iPod/ Phone Accessories" },
        { value: "Hair Accessories", name: "Hair Accessories" },
        { value: "Steam Punk", name: "Steam Punk" },
        { value: "Funky Jewelry", name: "Funky Jewelry" },
        { value: "Beanie Hats", name: "Beanie Hats" },
        { value: "Vintage Inspired Jewelry", name: "Vintage Inspired Jewelry" },
        {
          value: "Swarovski Cristal Jewelry",
          name: "Swarovski Cristal Jewelry"
        },
        { value: "Stafish Jewelry", name: "Stafish Jewelry" },
        { value: "Jewelry Sets", name: "Jewelry Sets" }
      ],
    };
  },
  methods: {
    onChangeAllHandler(e){
      if(e.target.checked) {
        this.model_category = [];
        this.model_category = this.categories.map(el => el.value);
      }else{
        this.model_category = [];
      }
    },
  },
  watch:{
    model_category(val){
      this.$emit('model_category', val);
      this.all = this.model_category.length === this.categories.length;
      return val;
    },
  },
  created() {
    this.model_category = this.categories.map(el => el.value);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.checkbox-category-group{
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
}

.checkbox-category-group__category-wrap{
  width: 50%;
  padding-right: 40px;
}
.checkbox-category-group__category-wrap:first-child{
  width: 100%;
  height: 34px;
  .checkbox-category-group__label{
    height: 20px;
  }
}

.checkbox-category-group__label{
  font-family: $font_montserrat_regular;
  font-size: 14px;
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 1rem;
}


.checkbox-category-group__input{
  display: none;
  &:checked + .checkbox-category-group__label{
    color: $purple_color;
  }
  &:checked + .checkbox-category-group__label:after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -30px;
    width: 18px;
    height: 18px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23BC00FF' fill-rule='evenodd' d='M17.797 2.306c-.27-.27-.708-.27-.979 0L5.596 13.528 1.182 9.114c-.27-.27-.709-.27-.98 0-.27.27-.27.709 0 .979l4.904 4.904c.27.27.71.27.98 0L17.796 3.285c.27-.27.27-.709 0-.98z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
}



</style>
