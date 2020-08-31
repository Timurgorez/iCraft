<template>
  <div class="product-slider">
    <b-container fluid>
      <b-row align-h="center" class="text-center">
        <b-col cols="12" class="centered">
          <h3 class="product-slider__title">Items You Might Like</h3>
          <img
            class="product-slider__title-img"
            src="~@/assets/desctop/pages/collectionPage/for-title-2.svg"
            alt=""
          />
        </b-col>
      </b-row>
      <b-row class="position-relative">
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
          <swiper-slide
            class="custom-slide"
            v-for="(item, index) in products"
            :key="item.id"
          >
            <ProductCard
              :item="item"
              :index="index"
              class="product-card__slider"
              :size="{
                cols: '12',
                sm: '12',
                md: '12',
                lg: '12'
              }"
            />
          </swiper-slide>
        </swiper>
        <div class="slider-btn slider-btn__prev" @click="prevSlide"></div>
        <div class="slider-btn slider-btn__next" @click="nextSlide"></div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

import ProductCard from "../../ProductInfo/ProductCard";

export default {
  name: "ProductSlider",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 6,
        spaceBetween: 0,
        breakpoints: {
          240: {
            slidesPerView: 1,
            centeredSlides: true,
            initialSlide: 1
          },
          480: {
            slidesPerView: 1,
            centeredSlides: true,
            initialSlide: 1
          },
          560: {
            slidesPerView: 2
          },
          920: {
            slidesPerView: 3
          },
          1100: {
            slidesPerView: 4
          },
          1300: {
            slidesPerView: 5
          },
          1600: {
            slidesPerView: 6
          }
        },
        loop: false
      }
    };
  },
  props: {},
  components: {
    Swiper,
    SwiperSlide,

    ProductCard
  },
  methods: {
    prevSlide() {
      this.swiper.slidePrev();
    },
    nextSlide() {
      this.swiper.slideNext();
    }
  },
  computed: {
    products() {
      console.log(
        "this.$store.getters.productSlider  --- ",
        this.$store.getters.productSlider
      );
      return this.$store.getters.productSlider;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style scoped lang="scss">
.product-slider {
  margin-top: 110px;
  background-color: $bg_grey;
  padding-bottom: 100px;
}
.product-slider__title-img {
  width: 200px;
  height: 40px;
  margin-bottom: 50px;
}

.product-slider__title {
  font-family: $font_neue_kabel;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  text-align: center;
  color: $text_color;
  padding: 50px 50px 20px;
}

.swiper {
  margin: 0 90px;
  overflow: hidden;
}

.slider-btn {
  display: block;
  position: absolute;
  top: calc(50% - 23px);
  width: 46px;
  height: 46px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.slider-btn__next {
  right: 35px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cdefs%3E%3Cfilter id='41z4ksky1a' width='142.9%25' height='142.9%25' x='-21.4%25' y='-21.4%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3E%3CfeColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.20427229 0'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%23fff' fill-rule='evenodd' filter='url(%2341z4ksky1a)'%3E%3Cpath d='M43.48 30.772L19.57 54.851c-1.52 1.532-3.986 1.532-5.507 0-1.52-1.531-1.52-4.015 0-5.546L35.22 28 14.064 6.695c-1.52-1.532-1.52-4.015 0-5.546 1.52-1.532 3.986-1.532 5.507 0l23.91 24.079c.76.765 1.14 1.768 1.14 2.771 0 1.004-.38 2.008-1.14 2.773z'/%3E%3C/g%3E%3C/svg%3E");
}
.slider-btn__next:hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cdefs%3E%3Cfilter id='41z4ksky1a' width='142.9%25' height='142.9%25' x='-21.4%25' y='-21.4%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3E%3CfeColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.20427229 0'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%237F13A6' fill-rule='evenodd' filter='url(%2341z4ksky1a)'%3E%3Cpath d='M43.48 30.772L19.57 54.851c-1.52 1.532-3.986 1.532-5.507 0-1.52-1.531-1.52-4.015 0-5.546L35.22 28 14.064 6.695c-1.52-1.532-1.52-4.015 0-5.546 1.52-1.532 3.986-1.532 5.507 0l23.91 24.079c.76.765 1.14 1.768 1.14 2.771 0 1.004-.38 2.008-1.14 2.773z'/%3E%3C/g%3E%3C/svg%3E");
}
.slider-btn__prev {
  left: 35px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cdefs%3E%3Cfilter id='6xmdjjylwa' width='142.9%25' height='142.9%25' x='-21.4%25' y='-21.4%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3E%3CfeColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%23fff' fill-rule='evenodd' filter='url(%236xmdjjylwa)' opacity='.6' transform='matrix(-1 0 0 1 56 0)'%3E%3Cpath d='M42.48 30.772L18.57 54.851c-1.52 1.532-3.986 1.532-5.507 0-1.52-1.531-1.52-4.015 0-5.546L34.22 28 13.064 6.695c-1.52-1.532-1.52-4.015 0-5.546 1.52-1.532 3.986-1.532 5.507 0l23.91 24.079c.76.765 1.14 1.768 1.14 2.771 0 1.004-.38 2.008-1.14 2.773z'/%3E%3C/g%3E%3C/svg%3E%0A");
}

.slider-btn__prev:hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cdefs%3E%3Cfilter id='6xmdjjylwa' width='142.9%25' height='142.9%25' x='-21.4%25' y='-21.4%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3E%3CfeColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%237F13A6' fill-rule='evenodd' filter='url(%236xmdjjylwa)' opacity='.6' transform='matrix(-1 0 0 1 56 0)'%3E%3Cpath d='M42.48 30.772L18.57 54.851c-1.52 1.532-3.986 1.532-5.507 0-1.52-1.531-1.52-4.015 0-5.546L34.22 28 13.064 6.695c-1.52-1.532-1.52-4.015 0-5.546 1.52-1.532 3.986-1.532 5.507 0l23.91 24.079c.76.765 1.14 1.768 1.14 2.771 0 1.004-.38 2.008-1.14 2.773z'/%3E%3C/g%3E%3C/svg%3E%0A");
}

.card-body {
  padding: 0;
}


@media only screen and (max-width: 768px) {
  .swiper {
    margin: 0 50px;
  }
  .slider-btn__next {
    right: 10px;
  }
  .slider-btn__prev {
    left: 10px;
  }
  .product-slider {
    margin-top: 30px;
  }
  ::v-deep .product-card__slider .product-card{
    padding-bottom: 10px;
  }
}

@media only screen and (max-width: 480px) {
  .swiper {
    margin: 0;
    padding: 0 90px;
  }
  .slider-btn__next,
  .slider-btn__prev {
    display: none;
  }
  .product-slider__title{
    font-size: 22px;
    padding: 30px 20px 10px;
  }
  .product-slider__title-img{
    width: 91px;
    height: 17px;
    margin-bottom: 35px;
  }
  .product-slider{
    padding-bottom: 56px;
  }
}
</style>
