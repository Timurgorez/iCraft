<template>
  <b-container fluid class="p-0">
    <b-row class="mansory-gallery">
      <b-col cols="12" md="3" class="p-0 ">
        <b-row>
          <b-col cols="12" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory2/1.jpg')"
            >
              <div class="mansory-gallery__btn">Housewarming</div>
            </div>
          </b-col>
          <b-col cols="12" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory2/2.jpg')"
            >
              <div class="mansory-gallery__btn">Birthday</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="3" class="p-0"
        ><div
          class="mansory-gallery__img middle"
          style="background-image: url('./tmp/home_page/mansory2/3.jpg')"
        >
          <div class="mansory-gallery__btn">Dress Up</div>
        </div></b-col
      >
      <b-col cols="12" md="3" class="p-0"
        ><div
          class="mansory-gallery__img middle"
          style="background-image: url('./tmp/home_page/mansory2/4.jpg')"
        >
          <div class="mansory-gallery__btn">Casual</div>
        </div></b-col
      >
      <b-col cols="12" md="3" class="p-0">
        <b-row>
          <b-col cols="12" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory2/5.jpg')"
            >
              <div class="mansory-gallery__btn">Baby Shower</div>
            </div>
          </b-col>
          <b-col cols="12" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory2/6.jpg')"
            >
              <div class="mansory-gallery__btn">Wedding</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MansoryGalleryLink",
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.mansory-gallery {
  margin: 40px 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
}
.p-0 {
  overflow: hidden;
}

.mansory-gallery__img {
  max-width: 100%;
  min-height: 315px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  transition: all 0.3s;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover .mansory-gallery__btn {
    background: $text_color_red;
  }
}

.mansory-gallery__btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(69, 38, 80, 0.6);
  font-family: $font_montserrat_semi_bold;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
}
@media only screen and (max-width: 1200px) {
  .mansory-gallery__img {
    min-height: 350px;
  }
}

@media only screen and (max-width: 768px) {
  .mansory-gallery__img.middle {
    min-height: 580px;
  }
  .mansory-gallery {
    margin: 0;
  }
}
@media only screen and (max-width: 480px) {
  .mansory-gallery__img {
    min-height: 250px;
  }
  .mansory-gallery__img.middle {
    min-height: 490px;
  }
}
</style>
