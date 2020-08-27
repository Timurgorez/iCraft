<template>
    <div :class="'product-icon product-icon__'+ icon" >
<!--     <img :src="url" alt=""> -->
<!--    <img src="@/assets/product_icons/new.svg" alt="">-->
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
    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-icon {
  width: 42px;
  height: 42px;
  background-size: cover;
  margin-right: 13px;
  background-repeat: no-repeat;
}

.product-icon__new {
  background-image: url("~@/assets/product_icons/new.svg");
}

.product-icon__exclusive {
  background-image: url("~@/assets/product_icons/exclusive.svg");
}

.product-icon__free-delivery {
  background-image: url("~@/assets/product_icons/free-delivery.svg");
}

.product-icon__best {
  background-image: url("~@/assets/product_icons/best.svg");
}

@media only screen and (max-width: 580px) {
  .product-icon {
    width: 25px;
    height: 25px;
    margin-right: 6px;
  }
}

</style>
