<template>
  <b-container class="product-max-container">
    <b-row class="new-arrivals">

      <b-col cols="12">
        <Swiper class="new-arrivals__ul" ref="mySwiper" :options="swiperOptions">
          <Swiper-Slide
            class="new-arrivals__slide"
            v-for="slide in products"
            :key="slide.id"
          >
            <ul class="new-arrivals__ul">
              <li v-for="(item) in slide" :key="item.id" :style="{width: 100 / countPerView + '%'}" class="new-arrivals__li">
                <router-link
                  :to="{ name: 'ProductPage', params: { id: item.id } }"
                  class="new-arrivals__link"
                >
                  <img :src="item.images[0]">
                </router-link>
              </li>
            </ul>
          </Swiper-Slide>
        </Swiper>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
// import ProductCard from "@/components/ProductInfo/ProductCard";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "NewArrivals",
  data() {
    return {
      swiperOptions: {
        // slidesPerView: 5,
        spaceBetween: 0,
        effect: 'fade',
        // slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500
        },
        // breakpoints: {
        //   240: {
        //     slidesPerView: 1,
        //     centeredSlides: true,
        //     initialSlide: 1
        //   },
        //   480: {
        //     slidesPerView: 1,
        //     centeredSlides: true,
        //     initialSlide: 1
        //   },
        //   560: {
        //     slidesPerView: 2
        //   },
        //   920: {
        //     slidesPerView: 3
        //   },
        //   1200: {
        //     slidesPerView: 4
        //   },
        //   1400: {
        //     slidesPerView: 5
        //   },
        //   1600: {
        //     slidesPerView: 6
        //   }
        // }
      },
      countPerView: 5,
      // currentItemsShown: 0,
      // currentItems: null,
      settings: {
        main: {
          count: 5,
        },
        1200: {
          count: 4,
        },
        992: {
          count: 3,
        },
        768: {
          count: 3,
        },
        480: {
          count: 2,
        }
      }
    };
  },
  props: {},
  components: {
    // ProductCard
    Swiper, SwiperSlide
  },
  methods: {
    buildItems(){
      var screen = "main";
      Object.keys(this.settings).forEach(size => {
        if (innerWidth < +size && screen == 'main'){
          screen = size;
        }
      });
      console.log('DEfain', this.settings[screen].count);
      this.countPerView = this.settings[screen].count;
    }
  },
  watch: {
    countPerView(){
      console.log('WATCH');
    }
  },
  computed: {
    products() {
      const allProduct = this.$store.getters.productSlider;
      const mainArr = [];
      allProduct.reduce((el, current, index) => {
        console.log('test1', el, index);
        el.push(current)
        if((index + 1) % this.countPerView == 0){
          console.log('PYK', el);
          mainArr.push(el);
          el = [];
        }
        if(index + 1 == allProduct.length && el.length > 0) mainArr.push(el);
        return el;
      }, []);
      console.log('test',mainArr);
      return mainArr;
    }
  },
  mounted(){
    this.buildItems();
    window.addEventListener("resize", this.buildItems);
    // this.currentItems = this.products.slice(this.currentItemsShown, this.countPerView + this.currentItemsShown);
    // setInterval(() => {
    //   console.log(this.products.length, 'sdfg');
    //   if(this.currentItemsShown + this.countPerView > this.products.length || this.currentItemsShown == this.products.length){
    //     console.log('first', this.countPerView);
    //     this.currentItemsShown = 0;
    //   }else{
    //     console.log('second', this.countPerView);
    //     this.currentItemsShown += this.countPerView;
    //   }
    //   this.currentItems = this.products.slice(this.currentItemsShown, this.countPerView + this.currentItemsShown);
    //   console.log('TEST', this.currentItemsShown);
    // }, 2000)
    
  },
  destroyed() {
    window.removeEventListener("resize", this.buildItems);
  }
};
</script>

<style scoped lang="scss">
.new-arrivals {
  justify-content: center;
}
.new-arrivals__slide{
  opacity: 0 !important;
}
.new-arrivals__slide.swiper-slide-active{
  opacity: 1 !important;
}
.new-arrivals__ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  .new-arrivals__li{
    margin-right: 10px;
  }
  .new-arrivals__link{
    width: 100%;
    height: 100%;
    display: inline-block;
    &:hover{
      opacity: 1;
    }
  }
  .new-arrivals__li:last-child{
    margin-right: 0;
  }
  img{
    width: 100%;
    max-width: 350px;
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
