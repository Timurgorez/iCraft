<template>
  <div class="product-slider">
    <div class="sale d-flex flex-row justify-content-start align-items-center">
      <p class="sale-text">10% Off</p>
    </div>
    <div class="thumb-example">
      <!-- swiper1 -->
      <div class="gallery-top" v-swiper:swiperTop="swiperOptionTop">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide-1"></div>
          <div class="swiper-slide slide-2"></div>
          <div class="swiper-slide slide-3"></div>
          <div class="swiper-slide slide-4"></div>
          <div class="swiper-slide slide-5"></div>
        </div>
      </div>
      <!-- swiper2 Thumbs -->
      <div class="gallery-thumbs" v-swiper:swiperThumbs="swiperOptionThumbs">
        <div class="swiper-wrapper" style="left: -63px">
          <div class="swiper-slide slide-1"></div>
          <div class="swiper-slide slide-2"></div>
          <div class="swiper-slide slide-3"></div>
          <div class="swiper-slide slide-4"></div>
          <div class="swiper-slide slide-5"></div>
        </div>
      </div>
      <div class="slider-btn swiper-button__next" @click="prevSlide"></div>
      <div class="slider-btn swiper-button__prev" @click="nextSlide"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductGalleryMobile",
  data() {
    return {
      swiperOptionTop: {
        initialSlide: 1,
        spaceBetween: 10,

        navigation: {
          nextEl: ".swiper-button__next",
          prevEl: ".swiper-button__prev"
        }
      },
      swiperOptionThumbs: {
        initialSlide: 1,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  methods: {
    prevSlide() {
      this.swiperTop.slidePrev();
    },
    nextSlide() {
      this.swiperTop.slideNext();
    }
  },
  mounted() {
    const self = this;
    this.swiperThumbs.on("slideChange", function () {
      self.swiperTop.slideTo(this.activeIndex);
    });
    this.swiperTop.on("slideChange", function () {
      self.swiperThumbs.slideTo(this.activeIndex);
    });
  }
}
</script>

<style scoped lang="scss">
.thumb-example {
  height: 380px;
  background-color: transparent;
}

.product-slider {
.sale {
  background-image: url("~@/assets/red-rectangle.svg");
  background-size: cover;
  max-width: 120px;
  max-height: 38px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 20px;
  z-index: 12;
  left: 5px;
}

.sale-text {
  font-family: $font_montserrat_regular;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin-bottom: 0;
  padding-left: 10px;
}
}

.swiper-slide {
  background-size: cover;
  background-position: center;

&.slide-1 {
   background-image: url("~@/assets/tmp/im-2.jpg");
 }
&.slide-2 {
   background-image: url("~@/assets/tmp/im-3.jpg");
 }
&.slide-3 {
   background-image: url("~@/assets/tmp/im-3.jpg");
 }
&.slide-4 {
   background-image: url("~@/assets/tmp/im-2.jpg");
 }
&.slide-5 {
   background-image: url("~@/assets/tmp/im-3.jpg");
 }
}

.gallery-top {
  height: 70%;
  width: 100%;
}
.gallery-thumbs {
  box-sizing: border-box;
  width: 70%;
  z-index: 1;
  height: 30%;
  padding: 10px 0;
}

.gallery-thumbs .swiper-slide {
  width: 46%;
  height: 100%;
  opacity: 1;
  border-radius: 6px;
}
.gallery-thumbs .swiper-slide-active {
  border: solid 2px $purple_color_btn;
}

.swiper-button__next {
  margin-left: 10px;
  margin-top: -75px;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("~@/assets/arrow-prev.svg");
  position: absolute;
  &:hover {
    transform: rotateY(-180deg);
    background-image: url("~@/assets/arrow-next.svg");
  }

}
.swiper-button__prev {
  right: 20px;
  margin-top: -75px;
  background-size: contain;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("~@/assets/arrow-prev.svg");
  position: absolute;
  transform: rotateY(180deg);
  &:hover {
    transform: rotateY(0);
    background-image: url("~@/assets/arrow-next.svg");
  }

}
</style>