<template>
    <b-container  class="wrapper-card default-max-container">
        <b-row align-h="start">
            <ProductCard v-for="( item, index ) in productItems" :item="item" :key="item.id" :limit="limit" :index="index" />
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
        productItems: Array,
        limit: Number
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


.wrapper-card{
    padding-top: 80px;
}

@media only screen and (max-width: 580px) {
    .wrapper-card{
        padding-top: 35px;
    }
}

</style>
