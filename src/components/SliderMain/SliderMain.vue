<template>
  <b-container fluid class="slider-main">
    <b-row>
      <Swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <Swiper-Slide
          class="custom-slide"
          v-for="slide in slides"
          :key="slide.id"
          :style="customStyles(slide.bgSettings)"
        >
          <div class="slide-wrap-content" :style="customStyles(slide.settingsTextBlock)">
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
      <div
        class="slider-btn slider-btn__prev"
        :class="[{ last: this.activeIndex == 0 }]"
        @click="prevSlide"
      ></div>
      <div
        class="slider-btn slider-btn__next"
        :class="[{ last: this.activeIndex == this.slides.length - 1 }]"
        @click="nextSlide"
      ></div>

      <div v-if="showBackLink" class="back-to-products">
        <router-link
          :to="{ name: 'HomePage' }"
          class="back-to-products__link"
          ><span class="back-to-products__icon"></span>
          All Collection
        </router-link>
      </div>

    </b-row>
  </b-container>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import RedButton from "@/components/Buttons/RedButton.vue";

export default {
  name: "SliderMain",
  data() {
    return {
      activeIndex: 0,
      
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2500
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index) {
            return `<span @click="goToSlide(${index})"></span>`;
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slides: [
        {
          id: 1,
          
          
          
          button: {
            color: "red",
            text: "SHOP NOW"
          },
          title: "FUN & GAMES",
          subText: "Something Fun to do for Kids and Parents",
          link: "/new",
          bgSettings : {
            main: {
              backgroundImage: "url(./tmp/slider/bg.jpg)",
              backgroundColor: "#f2f3ee",
              backgroundPosition: "50% 50%"
            },
            mobile: {
              768: {
                backgroundImage: "url(./tmp/slider/bgMobile.jpg)",
                backgroundColor: "#f2f3ee",
                backgroundPosition: "50% 53%"
              }
            }
          },
          settingsTextBlock: {
            main: {
              maxWidth: "400px",
              left: "60%",
            },
            mobile: {
              768: {
                width: "100%",
                left: "0",
                fontSize: "10px",
                bottom: "40px",
                padding: "0 10px"
              }
            }
          }
        },
        {
          id: 2,
          button: {
            color: "red",
            text: "SHOP NOW"
          },
          title: "HAND-KNITTED & ADORABLE",
          subText: "Keep your Bundle of Joy Bundled Up!",
          link: "/new",
          bgSettings : {
            main: {
              backgroundImage: "url(./tmp/slider/group.jpg)",
              backgroundColor: "#f2f3ee",
              backgroundPosition: "50% 50%"
            },
            mobile: {
              768: {
                backgroundImage: 'url(./tmp/slider/bgMobile.jpg)',
                backgroundColor: "#f2f3ee",
                backgroundPosition: "50% 53%"
              }
            }
          },
          settingsTextBlock: {
            main: {
              maxWidth: "600px",
              left: "45%",
            },
            mobile: {
              768: {
                width: "100%",
                left: "0",
                fontSize: "10px",
                bottom: "40px",
                padding: "0 10px"
              }
            }
          }
        },
        {
          id: 3,
          button: {
            color: "red",
            text: "SHOP NOW"
          },
          title: "HAND-KNITTED & ADORABLE",
          subText: "Keep your Bundle of Joy Bundled Up!",
          link: "/new",
          bgSettings : {
            main: {
              backgroundImage: "url(./tmp/slider/bg2.jpg)",
              backgroundColor: "#f2f3ee",
              backgroundPosition: "50% 50%"
            },
            mobile: {
              768: {
                backgroundImage: 'url(./tmp/slider/bgMobile.jpg)',
                backgroundColor: "#f2f3ee",
                backgroundPosition: "50% 53%"
              }
            }
          },
          settingsTextBlock: {
            main: {
              maxWidth: "600px",
              left: "10%"
            },
            mobile: {
              768: {
                width: "100%",
                left: "0",
                fontSize: "10px",
                bottom: "40px",
                padding: "0 10px"
              }
            }
          }
        }
      ]
    };
  },
  props: {
    checkoutPage: Boolean,
    showBackLink: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    RedButton
  },
  methods: {
    // getStyle(slide){
    //   console.log('TEST', slide);
    //   var bgi = innerWidth > 768 ? slide.bgi : slide.mobileBgi;
    //   return  { backgroundImage: 'url(' + bgi + ')', backgroundColor: slide.bgc, ...this.customStyles(slide.bgSettings) };
    // },
    prevSlide() {
      this.swiper.slidePrev();
    },
    nextSlide() {
      this.swiper.slideNext();
    },
    goToSlide(index) {
      this.$refs.mySwiper.$swiper.slideTo(index);
      this.activeIndex = index;
    },
    customStyles(slide) {
      var screen = "";
      Object.keys(slide.mobile).forEach(size => {
        if (innerWidth < size) screen = size;
      });
      if (screen) {
        return slide.mobile[screen];
      } else {
        return slide.main;
      }
    },
    clickBtnSlide(url) {
      this.$router.push(url);
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
    console.log(this.swiper.autoplay);
    this.swiper.autoplay.start();
  }
};
</script>

<style scoped lang="scss">
.slider-main {
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
}
.custom-slide {
  width: 100%;
  min-height: 35vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: flex;
  align-items: center;
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
  // max-width: 400px;
  font-size: 22px;
  h2 {
    font-family: $font_neue_kabel;
    font-size: 2.7em;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    font-weight: bold;
  }
  p {
    font-family: $font_montserrat_regular;
    font-size: 1.3em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: $text_color;
  }
  .slide-btn {
    margin-top: 1.2em;
    padding: 1em 3em;
    font-size: 0.8em;
  }
}
.swiper-pagination-bullets {
  z-index: 1;
  position: absolute;
  bottom: 20px;
  text-align: center;
  span {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: #fff;
    opacity: 0.6;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
    &.active {
      background: $purple_color_btn;
    }
  }
  span:last-child{
    margin-right: 0;
  }
}

.slider-btn {
  position: absolute;
  top: calc(50% - 23px);
  width: 46px;
  height: 46px;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cdefs%3E%3Cfilter id='41z4ksky1a' width='142.9%25' height='142.9%25' x='-21.4%25' y='-21.4%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3E%3CfeColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.20427229 0'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%237F13A6' fill-rule='evenodd' filter='url(%2341z4ksky1a)'%3E%3Cpath d='M43.48 30.772L19.57 54.851c-1.52 1.532-3.986 1.532-5.507 0-1.52-1.531-1.52-4.015 0-5.546L35.22 28 14.064 6.695c-1.52-1.532-1.52-4.015 0-5.546 1.52-1.532 3.986-1.532 5.507 0l23.91 24.079c.76.765 1.14 1.768 1.14 2.771 0 1.004-.38 2.008-1.14 2.773z'/%3E%3C/g%3E%3C/svg%3E");
  transform: rotate(180deg);
}

.slider-btn__prev.last:hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cdefs%3E%3Cfilter id='6xmdjjylwa' width='142.9%25' height='142.9%25' x='-21.4%25' y='-21.4%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3E%3CfeColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%237F13A6' fill-rule='evenodd' filter='url(%236xmdjjylwa)' opacity='.6' transform='matrix(-1 0 0 1 56 0)'%3E%3Cpath d='M42.48 30.772L18.57 54.851c-1.52 1.532-3.986 1.532-5.507 0-1.52-1.531-1.52-4.015 0-5.546L34.22 28 13.064 6.695c-1.52-1.532-1.52-4.015 0-5.546 1.52-1.532 3.986-1.532 5.507 0l23.91 24.079c.76.765 1.14 1.768 1.14 2.771 0 1.004-.38 2.008-1.14 2.773z'/%3E%3C/g%3E%3C/svg%3E%0A");
  transform: rotate(0);
}
.slider-btn__next.last:hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cdefs%3E%3Cfilter id='6xmdjjylwa' width='142.9%25' height='142.9%25' x='-21.4%25' y='-21.4%25' filterUnits='objectBoundingBox'%3E%3CfeOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3E%3CfeColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%237F13A6' fill-rule='evenodd' filter='url(%236xmdjjylwa)' opacity='.6' transform='matrix(-1 0 0 1 56 0)'%3E%3Cpath d='M42.48 30.772L18.57 54.851c-1.52 1.532-3.986 1.532-5.507 0-1.52-1.531-1.52-4.015 0-5.546L34.22 28 13.064 6.695c-1.52-1.532-1.52-4.015 0-5.546 1.52-1.532 3.986-1.532 5.507 0l23.91 24.079c.76.765 1.14 1.768 1.14 2.771 0 1.004-.38 2.008-1.14 2.773z'/%3E%3C/g%3E%3C/svg%3E%0A");
  transform: rotate(180deg);
}

.back-to-products {
  min-height: 84px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  bottom: -117px;
  left: 20px;
  z-index: 1;
  &__link {
    font-family: $font_montserrat_regular;
    font-size: 20px;
    color: $purple_color_btn;
    display: flex;
    align-items: center;
    &:hover {
      color: $purple_color;
      // opacity: 70%;
      text-decoration: none;
    }
  }
  &__icon {
    display: inline-block;
    margin-right: 11px;
    height: 18px;
    width: 18px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M5.024 9.891l7.685 7.74c.49.492 1.282.492 1.77 0 .49-.493.49-1.29 0-1.783L7.68 9l6.8-6.848c.49-.492.49-1.29 0-1.783-.488-.492-1.28-.492-1.77 0L5.024 8.11c-.244.246-.367.568-.367.89 0 .323.123.646.367.892z'/%3E%3C/svg%3E%0A");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
}

@media only screen and (max-width: 992px) {
  .back-to-products {
    min-height: 45px;
    position: absolute;
    top: 5px;
    left: 10px;
    bottom: auto;
    // &__link {
    //   font-size: 16px;
    // }
    // &__icon {
    //   height: 14px;
    //   width: 14px;
    // }
  }
  .custom-slide {
    min-height: 50vw;
  }
}

@media only screen and (max-width: 768px) {
  .slider-btn__next {
    right: 5px;
  }
  .slider-btn__prev {
    left: 5px;
  }
  
  .swiper-pagination-bullets{
    bottom: 3px;
     span {
      width: 14px;
      height: 14px;
    }
  }
  .slider-btn {
    display: none;
  }
  .custom-slide {
    min-height: 450px;
  }
  .slide-wrap-content {
    h2 {
      font-size: 2.7em;
    }
    p {
      font-size: 1.8em;
    }
  }
  .slide-wrap-content .slide-btn {
    font-size: 1.2em;
  }
}
</style>
