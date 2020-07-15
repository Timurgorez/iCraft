<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <ScrollToTop />
  </div>
</template>

<script>
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
export default {
    name: 'App',
    data() {
      return {
          
      }
    },
    props: {
        
    },
    components:{
         ScrollToTop
    },
    methods:{
        
    }
}

</script>

<style lang="scss">

</style>
