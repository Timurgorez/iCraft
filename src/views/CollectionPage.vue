<template>
  <div>
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

    <b-container fluid>
      <b-row align-h="center">
        <div class="main-desc-block">
          <h3>Buy Exclusive Handmade Jewelry Direct from Crafters</h3>
          <img src="~@/assets/desctop/pages/collectionPage/for-title-2.svg" alt="">
          <p>The iCraft Marketplace specializes in handmade art and crafts. We bring you the most unique, 
            high quality jewelry from trusted sellers around the world. Most items are exclusive to iCraft and when sold out, can be recreated at your request - uniquely for you.
            By the way, nothing is mass-produced. Ever.</p>
        </div>
      </b-row>
    </b-container>

    <FilterProduct :products="products" />
    <WrapperCard :productItems="products" />
  </div>
</template>

<script>
import FilterProduct from '../components/FilterProduct/FilterProduct.vue';
import ShopingCard from '../components/ShopingCard/ShopingCard.vue';
import CurrencyLang from '../components/CurrencyLang/CurrencyLang.vue';
import WrapperCard from '../components/CardArea/WrapperCard.vue';

export default {
  name: 'CollectionPage',
  data(){
      return{
        products:[{
          id: 1,
          name: 'Unique Military-style Beaded Brooch with Vintage Button',
          images: ['https://loremflickr.com/320/240?random=3','https://loremflickr.com/320/240?random=3'],
          reting: {
            count: 17,
            stars: 3
          },
          price: {
            new: '250$',
            old: '299$'
          },
          icons: ['exclusive', 'new', 'free-shiping']
        },{
          id: 2,
          name: 'Black Beetle Brooch (Japanese Bead Embroidery))',
          images: ['https://loremflickr.com/320/240?random=3','https://loremflickr.com/320/240?random=3'],
          reting: {
            count: 13,
            stars: 5
          },
          price: {
            new: '250$',
            old: '299$'
          },
          icons: ['exclusive', 'new', 'free-shiping']
        },{
          id: 3,
          name: 'White agate daisy drop earrings sterling silver',
          images: ['https://loremflickr.com/320/240?random=3','https://loremflickr.com/320/240?random=3'],
          reting: {
            count: 10,
            stars: 2
          },
          price: {
            new: '250$',
            old: '299$'
          },
          icons: ['exclusive', 'new', 'free-shiping']
        },{
          id: 4,
          name: 'Photography - Ferntebrae',
          images: ['https://loremflickr.com/320/240?random=3','https://loremflickr.com/320/240?random=3'],
          reting: {
            count: 19,
            stars: 4
          },
          price: {
            new: '250$',
            old: '299$'
          },
          icons: ['exclusive', 'new', 'free-shiping']
        }]
      }
  },
  components: {
    FilterProduct, ShopingCard, CurrencyLang, WrapperCard
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
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
      top: 15%;
    }
    h2{
      font-family: $font_montserrat_regular;
      font-size: 50px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.24;
      letter-spacing: normal;
      text-align: center;
      color: #262626;
    }
    h1{
      font-family: $font_didot;
      font-size: 60px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: 4px;
      text-align: center;
      color: #262626;
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


  .main-desc-block{
    padding: 90px 80px 80px 80px;
    text-align: center;
    h3{
      font-family: $font_didot;
      font-size: 40px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.8;
      letter-spacing: 2.67px;
      text-align: center;
      color: #262626;
      margin-bottom: 15px;
    }
    img{
      margin-bottom: 40px;
      
    }
    p{
      font-family: $font_montserrat_regular;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.63;
      letter-spacing: normal;
      color: #000000;
      text-align: left;
    }

  }

</style>
