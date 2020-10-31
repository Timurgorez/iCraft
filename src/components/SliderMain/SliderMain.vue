<template>
  <b-container fluid class="slider-main">
    <b-row>
      <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="custom-slide"
          v-for="slide in slides"
          :key="slide.id"
        >
          <div
            class="slide-wrap-content"
            :style="{ backgroundImage: 'url(' + slide.bg + ')' }"
          >
            {{ slide.bg }}
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </b-row>
  </b-container>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

export default {
  name: "SliderMain",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      slides: [
        {
          id: 1,
          bg: "./tmp/slider/bg.jpg",
          button: {
            color: "red",
            text: "Text btn"
          },
          title: "Text",
          subText: "Some long and tyne text."
        },
        {
          id: 2,
          bg: "./tmp/slider/group.jpg",
          button: {
            color: "red",
            text: "Text btn"
          },
          title: "Text",
          subText: "Some long and tyne text."
        }
      ]
    };
  },
  props: {
    checkoutPage: Boolean
  },
  components: {
    Swiper,
    SwiperSlide
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
.custom-slide {
  width: 100%;
}
.swiper,
.swiper-wrapper {
  width: 100%;
  z-index: 0;
}
.slide-wrap-content {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 700px;
}
</style>
