<template>
    <div :style="{'background-image': `url("~@/assets/product_icons/new.svg")`}">
       
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


    .product-icons{
        display: flex;
    }
    .product-icon{
        width: 50px;
        height: 50px;
        background-size: cover;
    }

</style>
