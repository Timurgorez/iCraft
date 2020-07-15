<template>
    <b-container fluid class="filter-product-block">
        <b-container fluid="xl">
            <b-row align-h="center" @click="openFilter">
                <b-col cols="2" class="centered">
                    <div class="filter-product-block__one-filter"> 
                        <span class="filter-product-block__text">Price Range</span> 
                        <span class="filter-product-block__blue-text">($50 - $100) <span class="filter-product-block__arrow"></span></span>
                    </div>
                </b-col>
                <b-col cols="4" class="centered">
                    <div class="filter-product-block__one-filter"> 
                        <span class="filter-product-block__text">
                            Color <br>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <span class="filter-product-block__blue-text">+5 <span class="filter-product-block__arrow"></span></span>
                        </span>
                        
                    </div>
                </b-col>
                <b-col cols="4" class="centered">
                    <div class="filter-product-block__one-filter"> 
                        <span class="filter-product-block__text">Category</span> 
                        <span class="filter-product-block__blue-text">(Earrings / Funky Jewelry / +4) <span class="filter-product-block__arrow"></span></span>
                    </div>
                </b-col>
                <b-col cols="2" class="centered">
                    <div class="filter-product-block__one-filter"> 
                        <span class="filter-product-block__text">Sort By:</span> 
                        <span class="filter-product-block__blue-text">Price Low - High <span class="filter-product-block__arrow"></span></span>
                    </div>
                </b-col>
            </b-row>


            
            <div v-show="showFilter" class="filter-block">
                <b-container fluid="xl">
                    <b-row align-h="center" class="filter-block__filter" align-v="stretch">
                        <b-col cols="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates sunt dolores quas et qui architecto eius ad impedit repellat magni, vitae debitis! Rem esse non accusantium velit eaque accusamus.</b-col>
                        <b-col cols="4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem vel, magni ad, quis et molestias enim doloribus assumenda totam quae possimus illo facere at harum suscipit tempora animi est nemo.</b-col>
                        <b-col cols="4">One of three columns</b-col>
                        <b-col cols="2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet explicabo dignissimos corporis voluptas consectetur placeat eaque suscipit, dolore, necessitatibus officiis possimus tenetur saepe nesciunt qui! Commodi sit ea consequatur obcaecati!</b-col>
                    </b-row>
                    <b-row align-h="center" class="filter-block__filter-btns">
                        <b-col>One of three columns</b-col>
                        <b-col>One of three columns</b-col>
                    </b-row>
                </b-container>
            </div>
        </b-container>
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
    position: relative;
}
.filter-product-block__arrow{
    background: url('~@/assets/arrow-white.svg') no-repeat 50% 50%;
    display: inline-block;
    width: 15px;
    height: 15px;
}
.filter-product-block__one-filter{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
        margin-right: 8px;
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
    left: 0;
    top: 100%;
    width: 100%;
    min-height: 300px;
    background-color: #fff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
    z-index: 9;
    color: $text_color;
}



.filter-block__filter{
    
    &>div{
        border-left: 1px solid #d7d7d7;
        &:first-child{
            border-left: none;
        }
    }
}


</style>
