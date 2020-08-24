<template>
  <div class="thumb-example d-flex flex-row">
    <!-- swiper1 -->

    <swiper class="swiper gallery-top" ref="swiperTop" :options="swiperOptionTop" >
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
<!--      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
<!--      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
    </swiper>

    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs" ref="swiperThumbs" :options="swiperOptionThumbs" >
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: "ProductGallery",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        controller: {
          control: this.swiperThumbs,
          by: 'slide'
        },
          navigation: {
          nextEl: '.thumb-example .swiper-button-next',
          prevEl: '.thumb-example .swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        direction: 'vertical',
        loop: true,
        controller: {
          control: this.swiperTop,
          by: 'slide'
        },
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  computed: {
    swiperTop() {
      return this.$refs.swiperTop.$swiper
    },
    swiperThumbs() {
      return this.$refs.swiperThumbs.$swiper
    }
  },
  mounted() {
   // this.$nextTick(() => {
      console.log(this.swiperTop, this.swiperThumbs)
     this.swiperTop.params.controller.control = this.swiperThumbs
     this.swiperThumbs.params.controller.control = this.swiperTop
  //  })
  }
}
</script>

<style scoped lang="scss">
.thumb-example {
  height: 520px;
  background-color: transparent;
}

.swiper {
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

  &.gallery-top {
    width: 100%;
    height: 100%;
  }
  &.gallery-thumbs {
    box-sizing: border-box;
    top: 13px;
    position: absolute;
    width: 140px;
    z-index: 1;
    vertical-align: baseline;
    height: 490px;
    right: 40px;

    &.swiper-wrapper {
      top: -60px !important;
    }
  }

  &.gallery-thumbs .swiper-slide {
    height: 23%;
    width: 100%;
    opacity: 1;
    border-radius: 6px;
    border: solid 2px #ffffff;
  }
  &.gallery-thumbs .swiper-slide-active {
    border: solid 2px $purple_color_btn;
  }
}
</style>