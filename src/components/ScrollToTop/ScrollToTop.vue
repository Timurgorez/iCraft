<template>
    <div v-if="notTop" class="scroll-to-top" @click="scrollToTop">
        <div class="arrow"></div>
    </div>
</template>

<script>
// import Vue from 'vue';

// Vue.directive('moveTop', {
//   bind(el, binding) {
//     el.style.color = binding.value.color
//     el.style.background = binding.value.background
//   }
// })

export default {
    name: 'ScrollToTop',
    data() {
      return {
          notTop: false
      }
    },
    props: {
        
    },
    components:{
         
    },
    methods:{
        scrollToTop(){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        onScroll(){
            this.notTop = window.scrollY > 500 ? true : false;
        }
    },
    created () {
        window.addEventListener('scroll', this.onScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.onScroll);
    }
}
</script>

<style scoped lang="scss">

.scroll-to-top{
    width: 50px;
    height: 50px;
    border-radius: 6px;
    border: solid 1px #7f13a6;
    background-color: #ffffff;
    position: fixed;
    bottom: 110px;
    right: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
.arrow{
    background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='20px' height='19px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E005F7FB9-DE57-4181-B992-C28050EA73F2%3C/title%3E%3Cg id='Step-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='ICraft-Product-Page-Collection-1440' transform='translate(-1375.000000, -4000.000000)'%3E%3Cg id='Elements/Menus/footer-1440_' transform='translate(0.000000, 3744.000000)'%3E%3Cg id='Group-20' transform='translate(1360.000000, 240.000000)'%3E%3Cg id='icons/arrow' transform='translate(25.214286, 25.785714) scale(1, -1) translate(-25.214286, -25.785714) translate(15.714286, 16.285714)'%3E%3Cg id='keyboard_arrow_down-24px' transform='translate(0.714286, 1.714286)'%3E%3Cpolygon id='Path' fill='%237F13A6' points='5.29285714 6.13571429 8.57142857 9.40714286 11.85 6.13571429 12.8571429 7.14285714 8.57142857 11.4285714 4.28571429 7.14285714'%3E%3C/polygon%3E%3Cpolygon id='Path' points='0 0 17.1428571 0 17.1428571 17.1428571 0 17.1428571'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
    width: 19px;
    height: 19px;
}

    
@media only screen and (max-width: 480px) {
    .scroll-to-top{
        width: 35px;
        height: 35px;
        bottom: 20px;
        right: 20px;
    }
}

</style>
