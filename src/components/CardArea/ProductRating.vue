<template>
    <div class="product-rating" >
        <div v-for="(star, index) in rating.stars" :key="index" class="product-rating__star-wrap">
            <img src="~@/assets/star.svg" alt="">
        </div>
        <span class="product-rating__count">({{rating.count}})</span>
    </div>
</template>

<script>

export default {
    name: 'ProductRating',
    data() {
      return {
          
      }
    },
    props: {
        rating: Object,
    },
    components:{
        
    },
    computed:{
        url(){
            return '~@/assets/product_icons/' + this.icon;
        }
    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.product-rating{
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 5px;
}
.product-rating__star-wrap{
    margin-right: 8px;
    img{

    }
}
.product-rating__count{
    font-family: $font_montserrat_regular;
    font-size: 16px;
    line-height: 1.31;
    color: $text_color;
}

@media only screen and (max-width: 580px) {
    .product-rating__star-wrap{
        img{
            height: 14px;
        }
    }
    .product-rating{
        margin-bottom: 15px;
        margin-top: 5px;
    }
    .product-rating__count{
        font-size: 14px;
    }
}

</style>
