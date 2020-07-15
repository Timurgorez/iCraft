<template>
  <div>
    <Header />

    <b-container fluid="xl">
        <b-row align-h="center" class="text-center">
            <b-col cols="12" class="centered">
                <div class="main-desc-block">
                  <h3>Buy Exclusive Handmade Jewelry Direct from Crafters</h3>
                  <img src="~@/assets/desctop/pages/collectionPage/for-title-2.svg" alt="">
                  <p>The iCraft Marketplace specializes in handmade art and crafts. We bring you the most unique, 
                    high quality jewelry from trusted sellers around the world. Most items are exclusive to iCraft and when sold out, can be recreated at your request - uniquely for you.
                    By the way, nothing is mass-produced. Ever.</p>
                </div>
            </b-col>
        </b-row>
    </b-container>

    <FilterProduct :products="products" />
    <WrapperCard :productItems="products" />
    <WhyBuyHere />
    <WrapperCard :productItems="products" />
    
    <div class="footer-subscribe-block">
      <b-container fluid="xl">
          <b-row align-v="center" class="text-center">
              <b-col cols="12" class="centered">
                <div class="footer-subscribe-block__wrap">
                  <h3 class="footer-subscribe-block__title">BE THE FIRST TO KNOW</h3>
                  <p class="footer-subscribe-block__text">Subscribe to our Newsletter to stay up-to-date on new arrivals and special deals.</p>
                  <form action="" @submit="subscribeSubmit" class="footer-subscribe-block__form">
                    <input class="footer-subscribe-block__input" type="text">
                    <button type="submit" class="footer-subscribe-block__submit"></button>
                  </form>
                </div>
              </b-col>
          </b-row>
      </b-container>
    </div>  



  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import FilterProduct from '../components/FilterProduct/FilterProduct.vue';
import WrapperCard from '../components/CardArea/WrapperCard.vue';
import WhyBuyHere from '../components/StaticComponents/WhyBuyHere/WhyBuyHere.vue';


const data = require('../data.json')

export default {
  name: 'CollectionPage',
  data(){
    console.log(data);
      return{
        products: data
      }
  },
  components: {
    FilterProduct, WrapperCard, Header, WhyBuyHere
  },
  methods:{
    subscribeSubmit(){
      console.log('subscribeSubmit');
    }

  },
  // computed () {
  //   data: DATA
  // },
}
</script>

<style lang="scss" scoped>
@import "@/style.scss";




  .main-desc-block{
    padding: 90px 0 80px;
    text-align: center;
    h3{
      font-family: $font_didot;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: 2px;
      text-align: center;
      color: $text_color;
      margin-bottom: 20px;
    }
    img{
      margin-bottom: 20px;
      
    }
    p{
      font-family: $font_montserrat_regular;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.55;
      letter-spacing: normal;
      color: #000000;
      text-align: left;
    }

  }




.footer-subscribe-block{
  background: url('~@/assets/desctop/pages/collectionPage/footer-pattern.jpg');
  min-height: 370px;
}
.footer-subscribe-block__wrap{
  margin-top: 10%;
}

.footer-subscribe-block__title{
  font-family: $font_didot;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 2.67px;
  color: #000000;
}
.footer-subscribe-block__text{
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}

.footer-subscribe-block__form{
  max-width: 594px;
  height: 60px;
  border-radius: 6px;
  border: solid 1px #452650;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}
.footer-subscribe-block__input{
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  padding: 10px;
  font-family: $font_montserrat_regular;
}
.footer-subscribe-block__submit{
  width: 10%;
  height: 100%;
  border-radius: 0 6px 6px 0;
  background-color: #452650;
  border: none;
}
.footer-subscribe-block__submit:focus{
  outline: none;
  border: none;
}


</style>
