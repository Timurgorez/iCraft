<template>
  <div>
    <Header />

    <div class="header-block__text">
        <div class="header-block__text-wrap">
          <h2>Buy One of a Kind Jewelry<br> Direct from Crafters</h2>
          <h1>Handmade & Stunning</h1>
        </div>
        <img class="header-block__image" src="~@/assets/desctop/pages/collectionPage/group.png" alt="">
    </div>

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

    <FilterProduct :products="products" @filterProduct="filterProduct" />
    <WrapperCard :productItems="products" :limit="12"/>
    <WhyBuyHere />
    <WrapperCard :productItems="products" :limit="8"/>
    
    <div class="footer-subscribe-block">
      <b-container fluid="xl">
          <b-row align-v="center" class="text-center">
              <b-col cols="12" class="centered">
                <div class="footer-subscribe-block__wrap">
                  <h3 class="footer-subscribe-block__title">BE THE FIRST TO KNOW</h3>
                  <p class="footer-subscribe-block__text">Subscribe to our Newsletter to stay up-to-date on new arrivals and special deals.</p>
                  <form action="" @submit.prevent="subscribeSubmit" :class="['footer-subscribe-block__form', isEmailValid()]">
                    <div class="footer-subscribe-block__input-wrap">
                      <input class="footer-subscribe-block__input" type="text" v-model="subscribe_email">
                      <button type="submit" class="footer-subscribe-block__submit"></button>
                    </div>
                    <span v-if="validationError" class="footer-subscribe-block__validation-error">{{validationError}}</span>
                  </form>
                  <b-modal @hide="hideModal" ref="subscribe_modal" hide-footer hide-header>
                    <p class="my-4">Your email {{subscribe_email}} has been added.</p>
                  </b-modal>
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
      return{
        products: data,
        subscribe_email: '',
        validationError: ''
      }
  },
  components: {
    FilterProduct, WrapperCard, Header, WhyBuyHere
  },
  // mounted(){
  //   $(this.$refs.subscribe_modal).on("hidden.bs.modal", this.hideModal)
  // },
  methods:{
    filterProduct(newProducts){
      this.products = newProducts;
    },
    subscribeSubmit(){
      const email = this.subscribe_email.trim();
      if(email == ''){
        this.validationError = 'This field is mandatory!'
        return ;
      }
      if(this.isEmailValid() === 'has-error'){
        this.validationError = 'Incorrect email!'
        return ;
      }
      this.validationError = '';
      this.$refs['subscribe_modal'].show();
    },
    hideModal(){
      this.subscribe_email = '';
    },

    isEmailValid: function() {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // regex.test(String(this.subscribe_email.trim()).toLowerCase()) ? '' : 'has-error';
      return (this.subscribe_email == "")? "" : (regex.test(this.subscribe_email)) ? '' : 'has-error';
    },

  },
  // computed () {
  //   data: DATA
  // },
}
</script>

<style lang="scss" scoped>

.header-block__text{
    min-height: 700px;
    width: 100%;
    background-image: url('~@/assets/desctop/pages/collectionPage/bgTop.png');
    background-color: #f2f4ef;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    box-shadow: 0px 0px 40px rgba(0,0,0,0.3);
    text-align: right;
    
    h2{
        font-family: $font_montserrat_regular;
        font-size: 30px;
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
        font-size: 40px;
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
.header-block__text-wrap{
    padding-top: 200px;
    display: inline-block;
    padding-right: 5%;
    padding-bottom: 30px;
}

.header-block__image{
      width: 36%;
      position: absolute;
      bottom: 14%;
      right: 7%;
}

  .main-desc-block{
    padding: 90px 0 80px;
    text-align: center;
    h3{
      font-family: $font_didot;
      font-size: 1.875rem;
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
      font-size: 1.25rem;
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
  position: relative;
}
.footer-subscribe-block__input-wrap{
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
}
.footer-subscribe-block__input{
  width: 88%;
  height: 100%;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  padding: 10px;
  font-family: $font_montserrat_regular;
}
.footer-subscribe-block__submit{
  width: 12%;
  height: 100%;
  background-color: #452650;
  border: none;
  background-image: url('~@/assets/search.svg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 4px 4px 0;
}
.footer-subscribe-block__input:focus,
.footer-subscribe-block__submit:focus{
  outline: none;
  border: none;
}
.footer-subscribe-block__validation-error{
  position: absolute;
  bottom: -25px;
  left: 0;
  color: $text_color_red;
}
.has-error{
  border-color: $text_color_red;
}


@media only screen and (max-width: 998px) {
  .header-block__text-wrap{
    padding-top: 310px;
  }
}

@media only screen and (max-width: 768px) {
    .header-block__image{
        display: none;
    }

    .header-block__text-wrap{
      padding-top: 520px;
      width: 100%;
      padding-right: 0;
    }
    .header-block__text{
      background-size: 220%;
      background-position: 7% 0%;
      h1{
        font-size: 30px;
      }
      h2{
        font-size: 24px;
      }
    }
}

@media only screen and (max-width: 580px) {
  .footer-subscribe-block{
    background-position: 40% 0;
  }
  .footer-subscribe-block__title{
    font-size: 22px;
  }
  .footer-subscribe-block__text{
    font-size: 14px;
  }
  .footer-subscribe-block__wrap{
    margin-top: 30%;
  }


  .main-desc-block{
    padding: 50px 0 30px;
    h3{
      font-size: 22px;
    }
    img{
      width: 101px;
    }
    p{
      font-size: 14px;
    }

  }
}

@media only screen and (max-width: 480px) {
  .header-block__text{
    h1{
      font-size: 22px;
    }
    h2{
      font-size: 18px;
    }
  }
  .header-block__text-wrap{
    padding-top: 350px;
  }
  .header-block__text{
    min-height: 500px;
  }
}

</style>
