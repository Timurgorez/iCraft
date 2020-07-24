<template>
    <div class="product-icon" :style="{backgroundImage: `url(~@/assets/product_icons/${icon})`}">
    <!-- <img :src="url" alt=""> -->
    <img src="@/assets/product_icons/new.svg" alt="">
    </div>
</template>

<script>

export default {
    name: 'ProductIcon',
    data() {
      return {
          
      }
    },
    props: {
        icon: String,
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



    .product-icon{
        width: 42px;
        height: 42px;
        background-size: cover;
        margin-right: 13px;
        img{
            width: 42px;
            height: 42px;
        }
    }

    @media only screen and (max-width: 580px) {
        .product-icon{
            width: 33px;
            height: 33px;
            margin-right: 6px;
            img{
                width: 33px;
                height: 33px;
            }
        }
    }

</style>
