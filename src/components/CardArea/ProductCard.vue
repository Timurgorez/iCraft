<template>
    <b-col v-if="limit > index" cols="6" sm="6" md="4" lg="3" class="centered product-card-wrap">
        <router-link :to="{name: 'item', params: { id: item.id }}" class="product-card__link">
            <b-card
                    :img-src="item.images[0]+item.id"
                    img-alt="item.name"
                    img-top
                    tag="div"
                    class="product-card"
            >
                <b-card-text>
                    {{item.name}}
                </b-card-text>

                <div class="product-card__bottom-wrap">
                    <div class="product-card__price-wrap">
                        <span class="product-card__price">{{item.price.new}} {{item.price.currency_formatting}}</span>
                        <span class="product-card__price-old">{{item.price.old}} {{item.price.currency_formatting}}</span>
                    </div>

                    <ProductRating :rating="item.reting"/>

                    <div class="product-icons">
                        <ProductIcon 
                            v-for="(icon, index) in item.icons" 
                            :key="index"  
                            :icon="icon" />
                    </div>
                </div>

            </b-card>
        </router-link>
    </b-col>
</template>

<script>
import ProductIcon from './ProductIcon.vue';
import ProductRating from './ProductRating.vue';

export default {
    name: 'ProductCard',
    data() {
      return {
        
      }
    },
    props: {
        item: Object,
        limit: Number,
        index: Number
    },
    components:{
        ProductIcon, ProductRating
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


    .product-card__link{
        &:hover{
            text-decoration: none;
        }
    }

    .product-card{
        width: 100%;
        border: none;
        height: 100%;
        padding-bottom: 30px;
        &:hover{
            text-decoration: none;
        }
        &>img{
            border: 1px solid grey;
            border-radius: 4px;
        }
        .card-body{
            padding: 12px;
            padding-bottom: 135px;
            text-align: left;
            position: relative;
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
            display: inline-block;
            margin-bottom: 5px;
            max-height: 90px;
            overflow: hidden;
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
        .product-card__bottom-wrap{
            position: absolute;
            bottom: 0;
            right: 12px;
            left: 12px;
        }
    }


    .product-card__price-wrap{
        margin-bottom: 10px;
    }



    .product-icons{
        display: flex;
    }
    

    @media only screen and (max-width: 580px) {
        h1 {
            font-size: 14px
        }

        p {
            font-size: 12px
        }

        .product-card-wrap{
            padding-right: 10px;
            padding-left: 10px;
        }

        .product-card{
            .card-text{
                font-size: 14px;
            }
            .product-card__price,
            .product-card__price-old{
                font-size: 14px;
            }
            .card-body{
                padding: 6px 6px 105px 6px;
            }
            .product-card__price-wrap{
                margin-bottom: 0;
                
            }
            .product-card__bottom-wrap{
                right: 6px;
                left: 6px;
            }
        }

    }
</style>
