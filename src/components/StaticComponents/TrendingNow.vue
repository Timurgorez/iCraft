<template>
  <div class="trending-now mt-5">
    <b-container fluid>
      <b-row align-h="center" class="text-center">
        <b-col cols="12" class="centered trending-now__title">
          <h3>Trending Now</h3>
          <img
            src="~@/assets/desctop/pages/collectionPage/for-title-2.svg"
            alt=""
          />
        </b-col>
      </b-row>
      <b-row align-h="center" class="text-center">
        <b-col cols="6" sm="6" lg="3" class="centered p-0">
          <div
            class="trending-now__card"
            style="background-image: url('./tmp/home_page/trending_now/1.jpg');"
          >
            <div class="trending-now__btn">
              <h5>Kid’s Theme Drawstring Bag</h5>
              <p>$22.00</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" sm="6" lg="3" class="centered p-0">
          <div
            class="trending-now__card"
            style="background-image: url('./tmp/home_page/trending_now/2.jpg');"
          >
            <div class="trending-now__btn">
              <h5>Kid’s Theme Drawstring Bag</h5>
              <p>$22.00</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" sm="6" lg="3" class="centered p-0">
          <div
            class="trending-now__card"
            style="background-image: url('./tmp/home_page/trending_now/3.jpg');"
          >
            <div class="trending-now__btn">
              <h5>Kid’s Theme Drawstring Bag</h5>
              <p>$22.00</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" sm="6" lg="3" class="centered p-0">
          <div
            class="trending-now__card"
            style="background-image: url('./tmp/home_page/trending_now/4.jpg');"
          >
            <div class="trending-now__btn">
              <h5>Kid’s Theme Drawstring Bag</h5>
              <p>$22.00</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "TrendingNow",
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
.trending-now {
  min-height: 340px;
  background-color: #fff;
}

.trending-now__card {
  height: 480px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;
  &:hover .trending-now__btn {
    background-color: $text_color_red;
  }
}

.trending-now__title {
  h3 {
    font-family: $font_neue_kabel;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: center;
    color: $text_color;
    padding: 40px 30px 30px;
  }

  img {
    margin-bottom: 80px;
  }
}

.trending-now__btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 9px 7px;
  background: rgba(69, 38, 80, 0.6);
  font-family: $font_montserrat_semi_bold;
  text-align: left;
  h5 {
    font-family: $font_montserrat_semi_bold;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }
  p {
    font-family: $font_montserrat_semi_bold;
    font-size: 23px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }
}
</style>
