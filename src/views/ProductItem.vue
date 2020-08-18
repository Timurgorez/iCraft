<template>
  <div class="product-item">
<!--    возможно там контейнер больше, надо уточнить-->
    <b-container fluid="xl">
      <b-row>
        <b-col cols="12" md="6" lg="6" xl="6"></b-col>
        <b-col cols="12" md="6" lg="6" xl="6">
          <div class="main-actions">
            <h3>Beautiful Festive Earrings (Japanese Bead Embroidery)</h3>
            <div class="rating">
              <ProductRating  :rating="product.rating" />
              <span>Product Reviews (5)</span>
            </div>
            <div class="price">
              <span class="price__new">$ 40.00</span>
              <span class="price__old">$ 50.00</span>
              <span class="price__currency">CAD</span>
            </div>
            <p class="shipping-sale">Save $20.00 (15%) + Free Shipping to Canada</p>
            <div class="color">color</div>
            <div class="size">size</div>
            <div class="quantity">quantity</div>
            <div class="action-buttons">
              <RedButton
                text="BUY NOW"
                iconClass="accepted-icon"
                animate=true
                customClass="buy-now__btn"
                @clickHandler="buyNowHandler"
              />
              <PurpleButton
                text="ADD TO BAG"
                iconClass="bag-icon"
                animate=true
                customClass="add-to-bag__btn"
                @clickHandler="addToBagHandler"
              />
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6" lg="6" xl="6"></b-col>
        <b-col cols="12" md="6" lg="6" xl="6"></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProductRating from '../components/CardArea/ProductRating.vue';
import PurpleButton from '../components/Buttons/PurpleButton.vue';
import RedButton from '../components/Buttons/RedButton.vue';

export default {
  name: 'ProductItem',
  props: ['id'],
  data(){
    return{}
  },
  components: {
    ProductRating, PurpleButton, RedButton
  },
  computed: {
    product () {
      return this.$store.getters.product(this.id)
    },
  },
  methods:{
    addToBagHandler(){

    },
    buyNowHandler(){

    }
  }
}
</script>
<style scoped lang="scss">
  .main-actions h3{
    font-family: $font_montserrat_regular;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    color: $text_color;
  }
  .rating{
    span{
      font-family: $font_montserrat_regular;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: $purple_color_btn;
    }
  }

  .price{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .price__new{
    font-family: $font_montserrat_regular;
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $red_color_btn;
    padding-right: 10px;
  }
  .price__old{
    font-family: $font_montserrat_medium;
    font-size: 22px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text_color;
    padding-right: 10px;
  }
  .price__currency{
    font-family: $font_montserrat_regular;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $purple_color_btn;
  }

  .shipping-sale{
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text_color_red;
  }

  .buy-now__btn{
    padding-left: 100px;
    padding-right: 100px;
  }
  .add-to-bag__btn{
    padding-left: 86px;
    padding-right: 86px;
    margin-top: 30px;
  }
</style>