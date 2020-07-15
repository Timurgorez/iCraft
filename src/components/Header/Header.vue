<template>
    <div class="header-block">
      <div class="shoping-card-lang-block">
        <ShopingCard />
        <CurrencyLang />
      </div>
      
      <div class="header-block__text-wrap">
        <h2>Buy One of a Kind Jewelry<br> Direct from Crafters</h2>
        <h1>Handmade & Stunning</h1>
      </div>
      <img class="header-block__image" src="~@/assets/desctop/pages/collectionPage/group.png" alt="">
    </div>
</template>

<script>
import ShopingCard from '../ShopingCard/ShopingCard.vue';
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
         ShopingCard, CurrencyLang,
    },
    methods:{
        
    }
}
</script>

<style scoped lang="scss">
@import "@/style.scss";

  .header-block {
    min-height: 700px;
    width: 100%;
    background-image: url('~@/assets/desctop/pages/collectionPage/bgTop.png');
    background-color: #f2f3ee;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    box-shadow: 0px 0px 40px rgba(0,0,0,0.3);

    .header-block__text-wrap{
      position: absolute;
      right: 5%;
      top: 20%;
    }
    h2{
      font-family: $font_montserrat_regular;
      font-size: 2.5rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.24;
      letter-spacing: normal;
      text-align: center;
      color: $text_color;
    }
    h1{
      font-family: $font_didot;
      font-size: 2.8rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: 4px;
      text-align: center;
      color: $text_color;
      text-transform: uppercase;
    }
  }
  .header-block__image{
    width: 36%;
    position: absolute;
    bottom: 14%;
    right: 7%;
    
  }
  .shoping-card-lang-block{
    position: absolute;
    top: 25px;
    right: 60px;
    display: flex;
  }
</style>
