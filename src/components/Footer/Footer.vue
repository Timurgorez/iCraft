<template>
    <b-container fluid="xl" class="footer">
        <b-row align-h="center">
            <b-col cols="6" sm="6" md="4" lg="3" class="centered">

            </b-col>
            <b-col cols="6" sm="6" md="4" lg="3" class="centered">
              
            </b-col>
            <b-col cols="6" sm="6" md="4" lg="3" class="centered">
              
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ShoppingBag from '../ShoppingBag/ShoppingBag.vue';

export default {
    name: 'Footer',
    data() {
      return {
          
      }
    },
    props: {
        
    },
    components:{
         ShoppingBag,
    },
    methods:{
        
    }
}
</script>

<style scoped lang="scss">

  .footer {
    
  }
  


  @media only screen and (max-width: 768px) {
    .footer{
      
    }
    
    
    
  }


  @media only screen and (max-width: 580px) {
  
    
    
  }





</style>
