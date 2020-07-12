<template>
    <b-container fluid="xl" class="wrapper-card">
        <b-row align-h="center">
            <ProductCard v-for="item in productItems" :item="item" :key="item.id" />
        </b-row>
    </b-container>
</template>

<script>
import ProductCard from './ProductCard.vue';


export default {
    name: 'WrapperCard',
    data() {
      return {

      }
    },
    props: {
        productItems: Array
    },
    components:{
        ProductCard
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style.scss";


.wrapper-card{
    padding-top: 80px;
}

</style>
