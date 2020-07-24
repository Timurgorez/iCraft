<template>
    <div class="header-block">
      <img class="header-block__image" src="~@/assets/desctop/pages/collectionPage/group.png" alt="">
      <div class="shoping-card-lang-block">
        <ShoppingBag />
        <CurrencyLang />
      </div>
      
    </div>
</template>

<script>
import ShoppingBag from '../ShoppingBag/ShoppingBag.vue';
import CurrencyLang from '../CurrencyLang/CurrencyLang.vue';

export default {
    name: 'Header',
    data() {
      return {
          
      }
    },
    props: {
        
    },
    components:{
         ShoppingBag, CurrencyLang,
    },
    methods:{
        
    }
}
</script>

<style scoped lang="scss">

  .header-block {
    min-height: 100px;
    width: 100%;
    background-color: #fff;
    background-size: 120%;
    background-repeat: no-repeat;
    position: relative;
    box-shadow: 0px 0px 40px rgba(0,0,0,0.3);
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .header-block__image{
      width: 280px;
      height: 74px;
      margin: 13px 30px;

    }
    
  }
  
  .shoping-card-lang-block{
    display: flex;
    align-items: center;
    min-height: 70px;
  }


  @media only screen and (max-width: 768px) {
    .header-block{
      background-size: 170%;
      background-position: -6% 50%;
      // min-height: 162px;
    }
    
    
    
  }


  @media only screen and (max-width: 580px) {
    .shoping-card-lang-block {
      width: 100%;
      justify-content: flex-end;
    }
    
    
  }





</style>
