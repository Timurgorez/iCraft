<template>
    <b-col cols="12" sm="6" md="4" lg="3" class="centered">
        <router-link :to="{name: 'item', params: { id: item.id }}" class="product-card__link">
            <b-card
                    :img-src="item.images[0]+item.id"
                    img-alt="item.name"
                    img-top
                    tag="div"
                    class="mb-5 product-card"
            >
                <b-card-text>
                    {{item.name}}
                </b-card-text>

                <div class="product-card__price-wrap">
                    <span class="product-card__price">{{item.price.new}}</span>
                    <span class="product-card__price-old">{{item.price.new}}</span>
                </div>

                <div class="product-icons">
                    <ProductIcon 
                        v-for="(icon, index) in item.icons" 
                        :key="index"  
                        :icon="icon" />
                </div>


            </b-card>
        </router-link>
    </b-col>
</template>

<script>
import ProductIcon from './ProductIcon.vue';

export default {
    name: 'ProductCard',
    data() {
      return {
        
      }
    },
    props: {
        item: Object
    },
    components:{
        ProductIcon
    },
    methods:{
        urlIcon(icon){
            return '~@/assets/product_icons/' + icon;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style.scss";


    .product-card__link{
        &:hover{
            text-decoration: none;
        }
    }

    .product-card{
        width: 100%;
        border: none;
        &:hover{
            text-decoration: none;
        }
        &>img{
            border: 1px solid grey;
            border-radius: 4px;
        }
        .card-body{
            padding: 12px;
            text-align: left;
        }
        .card-text{
            font-family: Montserrat;
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.28;
            letter-spacing: normal;
            color: $text_color;
            text-align: left;
        }
        .product-card__price{
            font-family: Montserrat;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #c90000;
        }
        .product-card__price-old{
            font-family: Montserrat;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: $text_color;
            text-decoration: line-through;
            padding-left: 27px;
        }
        .product-card__rating{
            display: inline-flex;
            span{
                padding-top: 14px;
            }
        }
    }





    .product-icons{
        display: flex;
    }
    .product-icon{
        width: 50px;
        height: 50px;
        background-size: cover;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 14px
        }

        p {
            font-size: 12px
        }
    }
</style>
