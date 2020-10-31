<template>
  <b-container fluid class="slider-main">
    <b-row>
      <Swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <Swiper-Slide
          class="custom-slide"
          v-for="slide in slides"
          :key="slide.id"
          :style="{ backgroundImage: 'url(' + slide.bg + ')' }"
        >
          <div
            class="slide-wrap-content"
            :style="{
              maxWidth:
                slide.settings && slide.settings.maxWidth
                  ? slide.settings.maxWidth
                  : '400px',
              top:
                slide.settings && slide.settings.top ? slide.settings.top : '',
              left:
                slide.settings && slide.settings.left ? slide.settings.left : ''
            }"
          >
            <p>{{ slide.subText }}</p>
            <h2>{{ slide.title }}</h2>
            <RedButton
              v-if="slide.button"
              :text="slide.button.text"
              iconClass="d-none"
              :animate="true"
              customClass="slide-btn"
              @clickHandler="clickBtnSlide(slide.link)"
            />
          </div>
        </Swiper-Slide>
        <div class="swiper-pagination-bullets" slot="pagination">
          <span
            v-for="(slide, index) in slides"
            :key="index"
            :class="[activeIndex == index && 'active']"
            :data-id="index"
            @click="goToSlide(index)"
          ></span>
        </div>
      </Swiper>
    </b-row>
  </b-container>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.scss";

import RedButton from "@/components/Buttons/RedButton.vue";

export default {
  name: "SliderMain",
  data() {
    return {
      activeIndex: 0,
      swiperOptions: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index) {
            return `<span @click="goToSlide(${index})"></span>`;
          }
        }
      },
      slides: [
        {
          id: 1,
          bg: "./tmp/slider/bg.jpg",
          button: {
            color: "red",
            text: "SHOP NOW"
          },
          title: "FUN & GAMES",
          subText: "Something Fun to do for Kids and Parents",
          link: "google.com",
          settings: {
            maxWidth: "400px",
            top: "35%",
            left: "60%"
          }
        },
        {
          id: 2,
          bg: "./tmp/slider/group.jpg",
          button: {
            color: "red",
            text: "SHOP NOW"
          },
          title: "HAND-KNITTED & ADORABLE",
          subText: "Keep your Bundle of Joy Bundled Up!",
          link: "google.com",
          settings: {
            maxWidth: "600px",
            top: "35%",
            left: "60%"
          }
        },
        {
          id: 3,
          bg: "./tmp/slider/bg2.jpg",
          button: {
            color: "red",
            text: "SHOP NOW"
          },
          title: "HAND-KNITTED & ADORABLE",
          subText: "Keep your Bundle of Joy Bundled Up!",
          link: "google.com",
          settings: {
            maxWidth: "600px",
            top: "35%",
            left: "10%"
          }
        }
      ]
    };
  },
  props: {
    checkoutPage: Boolean
  },
  components: {
    Swiper,
    SwiperSlide,
    RedButton
  },
  methods: {
    prevSlide() {
      this.swiper.slidePrev();
    },
    nextSlide() {
      this.swiper.slideNext();
    },
    goToSlide(index) {
      this.$refs.mySwiper.$swiper.slideTo(index);
      this.activeIndex = index;
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
    this.swiper.on("slideChange", () => {
      this.activeIndex = this.swiper.realIndex;
    });
  }
};
</script>

<style scoped lang="scss">
.custom-slide {
  width: 100%;
  min-height: 700px;
  background-size: cover;
  background-repeat: no-repeat;
}
.swiper,
.swiper-wrapper {
  width: 100%;
  z-index: 0;
}
.slide-wrap-content {
  text-align: center;
  display: block;
  position: absolute;
  top: 35%;
  left: 60%;
  max-width: 400px;
  h2 {
    font-family: $font_neue_kabel;
    font-size: 40px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  p {
    font-family: $font_montserrat_regular;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: $text_color;
  }
  .slide-btn {
    margin-top: 35px;
    padding: 13.5px 40px;
  }
}
.swiper-pagination-bullets {
  z-index: 1;
  position: absolute;
  bottom: 20px;
  text-align: center;
  span {
    width: 36px;
    height: 36px;
    display: inline-block;
    background: #fff;
    opacity: 0.6;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    margin-right: 20px;
    &.active {
      background: $purple_color_btn;
    }
  }
}
</style>
