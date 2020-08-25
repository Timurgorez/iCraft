<template>
  <div class="product-slider">
    <div class="sale d-flex flex-row justify-content-start align-items-center">
      <p class="sale-text">10% Off</p>
    </div>
  <div class="thumb-example d-flex flex-row">
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
      <div class="swiper-wrapper" style="top: -60px;">
        <div class="swiper-slide slide-1"></div>
        <div class="swiper-slide slide-2"></div>
        <div class="swiper-slide slide-3"></div>
        <div class="swiper-slide slide-4"></div>
        <div class="swiper-slide slide-5"></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        direction: 'vertical',
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    const self = this;
    this.swiperThumbs.on("slideChange", function() {
      self.swiperTop.slideTo(this.activeIndex);
    });
    this.swiperTop.on("slideChange", function() {
      self.swiperThumbs.slideTo(this.activeIndex);
    });
  }
}
</script>

<style scoped lang="scss">
.thumb-example {
  height: 520px;
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
      background-image:url('~@/assets/tmp/im-2.jpg');
    }
    &.slide-2 {
      background-image:url('~@/assets/tmp/im-3.jpg');
    }
    &.slide-3 {
      background-image:url('~@/assets/tmp/im-3.jpg');
    }
    &.slide-4 {
      background-image:url('~@/assets/tmp/im-2.jpg');
    }
    &.slide-5 {
      background-image:url('~@/assets/tmp/im-3.jpg');
    }
  }

  .gallery-top {
    width: 100%;
    height: 100%;
  }
  .gallery-thumbs {
    box-sizing: border-box;
    top: 13px;
    position: absolute;
    width: 140px;
    z-index: 1;
    vertical-align: baseline;
    height: 490px;
    right: 40px;

  }

  .gallery-thumbs .swiper-slide {
    height: 23%;
    width: 100%;
    opacity: 1;
    border-radius: 6px;
    border: solid 2px #ffffff;
  }
  .gallery-thumbs .swiper-slide-active {
    border: solid 2px $purple_color_btn;
  }

</style>