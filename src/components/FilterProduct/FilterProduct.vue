<template>
    <b-container fluid>
        <b-row align-h="center" class="filter-product-block" @click="openFilter">
            <b-col cols="3" class="centered">
                <div class="filter-product-block__one-filter"> 
                    <span class="filter-product-block__text">Price Range</span> 
                    <span class="filter-product-block__blue-text">($50 - $100)</span>
                    <span class="filter-product-block__arrow"></span>
                </div>
            </b-col>
            <b-col cols="3" class="centered">
                <div class="filter-product-block__one-filter"> 
                    <span class="filter-product-block__text">Color <div></div><div></div><div></div></span>
                    <span class="filter-product-block__blue-text">+5</span>
                    <span class="filter-product-block__arrow"></span>
                </div>
            </b-col>
            <b-col cols="3" class="centered">
                <div class="filter-product-block__one-filter"> 
                    <span class="filter-product-block__text">Category</span> 
                    <span class="filter-product-block__blue-text">(Earrings / Funky Jewelry / +4)</span>
                    <span class="filter-product-block__arrow"></span>
                </div>
            </b-col>
            <b-col cols="3" class="centered">
                <div class="filter-product-block__one-filter"> 
                    <span class="filter-product-block__text">Sort By:</span> 
                    <span class="filter-product-block__blue-text">Price Low - High</span>
                    <span class="filter-product-block__arrow"></span>
                </div>
            </b-col>
        </b-row>
        <b-row v-if="showFilter" align-h="center" class="filter-block">
            <b-col cols="3" class="centered">
                <div class="filter-product-block__one-filter"> 
                    <span class="filter-product-block__text">Price Range</span> 
                    <span class="filter-product-block__blue-text">($50 - $100)</span>
                    <span class="filter-product-block__arrow"></span>
                </div>
            </b-col>
            <b-col cols="3" class="centered">
                <div class="filter-product-block__one-filter"> 
                    <span class="filter-product-block__text">Color <div></div><div></div><div></div></span>
                    <span class="filter-product-block__blue-text">+5</span>
                    <span class="filter-product-block__arrow"></span>
                </div>
            </b-col>
            <b-col cols="3" class="centered">
                <div class="filter-product-block__one-filter"> 
                    <span class="filter-product-block__text">Category</span> 
                    <span class="filter-product-block__blue-text">(Earrings / Funky Jewelry / +4)</span>
                    <span class="filter-product-block__arrow"></span>
                </div>
            </b-col>
            <b-col cols="3" class="centered">
                <div class="filter-product-block__one-filter"> 
                    <span class="filter-product-block__text">Sort By:</span> 
                    <span class="filter-product-block__blue-text">Price Low - High</span>
                    <span class="filter-product-block__arrow"></span>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'FilterProduct',
  props: {
    products: Array
  },
  data (){
      return {
          showFilter: false
      }
  },
  methods:{
      openFilter(){
          this.showFilter = !this.showFilter;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style.scss";


.filter-product-block{
    min-height: 100px;
    background-color: #452650;
    display: flex;
    align-items: center;
    color: #ffffff;
}
.filter-product-block__arrow{
    background: url('~@/assets/arrow-white.svg') no-repeat 50% 50%;
    display: inline-block;
    width: 15px;
    height: 15px;
}
.filter-product-block__one-filter{
    display: flex;
    align-items: center;
    justify-content: center;
}
.filter-product-block__text{
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2px;
    color: #ffffff;
    text-transform: uppercase;
    margin-right: 10px;
    div{
        width: 26px;
        height: 26px;
        border-radius: 2px;
        background-color: #7f13a6;
        display: inline-flex;
        margin-bottom: -7px;
        margin-left: 8px;
    }
    div:nth-child(2){
        background-color: #ffffff;  
    }
    div:nth-child(3){
        background-color: #c90000;
    }
}
.filter-product-block__blue-text{
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2px;
    color: #afb9ec;
    margin-right: 10px;
}




.filter-block{
    position: absolute;
    width: 100%;
    min-height: 300px;
    background-color: #fff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
    z-index: 9;
}
</style>
