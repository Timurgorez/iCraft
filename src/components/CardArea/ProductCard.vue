<template>
    <b-col cols="3" class="centered">
        <b-card
                img-src="item.images[0]"
                img-alt="item.name"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 product-card"
        >
            <b-card-text>
                {{item.name}}
                {{item.images[0]}}
            </b-card-text>

            <div class="product-card__price-wrap">
                <span class="product-card__price">{{item.price.new}}</span>
                <span class="product-card__price-old">{{item.price.new}}</span>
            </div>

            <div class="product-card__rating">
                <div class="rating">
                    <input type="radio" name="rating" value="5" id="5">
                    <label for="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4">
                    <label for="4">☆</label>
                    <input type="radio" name="rating" value="3" id="3">
                    <label for="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2">
                    <label for="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1">
                    <label for="1">☆</label>
                </div>
                <span>({{item.reting.count}})</span>
            </div>


        </b-card>
    </b-col>
</template>

<script>

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
        
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style.scss";


    .product-card{
        width: 100%;
        border: none;
        img{
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
            color: #262626;
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
            color: #262626;
            text-decoration: line-through;
            padding-left: 27px;
        }
        .product-card__rating{
            display: inline-flex;
            span{
                padding-top: 11px;
            }
        }
    }





    .rating {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
    }

    .rating>input {
        display: none
    }

    .rating>label {
        position: relative;
        width: 1em;
        font-size: 2vw;
        color: #ffb000;
        cursor: pointer
    }

    .rating>label::before {
        content: "\2605";
        position: absolute;
        opacity: 0
    }

    .rating>label:hover:before,
    .rating>label:hover~label:before {
        opacity: 1 !important
    }

    .rating>input:checked~label:before {
        opacity: 1
    }

    .rating:hover>input:checked~label:before {
        opacity: 0.4
    }

    body {
        background: #222225;
        color: white
    }

    h1,
    p {
        text-align: center
    }

    h1 {
        margin-top: 150px
    }

    p {
        font-size: 1.2rem
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
