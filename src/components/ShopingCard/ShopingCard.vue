<template>
  <div class="shoping-card-block">
    <span class="shoping-card-block__count">{{countProduct}}</span>
  </div>
</template>

<script>
export default {
  name: 'ShopingCard',
  props: {
    products: Array
  },
  data (){
      return {
        countProduct: 2
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style.scss";


.shoping-card-block{
    width: 36px;
    height: 36px;
    display: flex;
    background: url('~@/assets/bag.svg') no-repeat 50% 50%;
    background-size: contain;
    position: relative;
    margin-right: 40px;

    .shoping-card-block__count{
        width: 26px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #c90000;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: -10px;
        color: #fff;
        font-family: $font_montserrat_regular;
        font-size: 14px;
        font-weight: 500;
    }
}
</style>
