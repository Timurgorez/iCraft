<template>
    <div class="product-icon" :style="{backgroundImage: 'url(~@/assets/product_icons/' + icon + '})'}">
    <img src="~@/assets/product_icons/new.svg" alt="">
    </div>
</template>

<script>

export default {
    name: 'ProductCard',
    data() {
      return {
          
      }
    },
    props: {
        icon: String
    },
    components:{
        
    },
    computed:{
        url(){
            return {
                backgroundImage: 'url(~@/assets/product_icons/'+this.icon+'})'
            }
        }
    },
    methods:{
        getLink(){
            return "~@/assets/product_icons/" + this.icon;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style.scss";


    .product-icons{
        display: flex;
    }
    .product-icon{
        width: 50px;
        height: 50px;
        background-size: cover;
    }

</style>
