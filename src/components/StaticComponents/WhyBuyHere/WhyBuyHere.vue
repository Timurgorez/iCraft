<template>
  <div class="why-buy-here mt-5" :style="{ backgroundColor: bgc }">
    <b-container fluid="xl">
      <b-row align-h="center" class="text-center">
        <b-col cols="12" class="centered">
          <h3 class="why-buy-here__title">Why Buy Here</h3>
        </b-col>
      </b-row>
      <b-row align-h="center" class="text-center">
        <b-col cols="6" sm="6" lg="3" class="centered">
          <div class="why-buy-here__card">
            <img src="~@/assets/static-images/handmade.svg" alt="handmade" />
            <p>
              35, 000+<br />
              Handmade Items
            </p>
          </div>
        </b-col>
        <b-col cols="6" sm="6" lg="3" class="centered">
          <div class="why-buy-here__card">
            <img src="~@/assets/static-images/plest.svg" alt="eplestco" />
            <p>
              7,500+ Trusted<br />
              Crafters Worldwide
            </p>
          </div>
        </b-col>
        <b-col cols="6" sm="6" lg="3" class="centered">
          <div class="why-buy-here__card">
            <img src="~@/assets/static-images/eco.svg" alt="eco" />
            <p>
              Shop Local<br />
              & Eco-friendly
            </p>
          </div>
        </b-col>
        <b-col cols="6" sm="6" lg="3" class="centered">
          <div class="why-buy-here__card">
            <img src="~@/assets/static-images/protect.svg" alt="protect" />
            <p>
              Shop<br />
              Securely
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "WhyBuyHere",
  data() {
    return {};
  },
  props: {
    bgc: {
      type: String
    }
  },
  components: {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.why-buy-here {
  min-height: 340px;
  background-color: $bg_grey;
}

.why-buy-here__title {
  font-family: $font_neue_kabel;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  text-align: center;
  color: $text_color;
  padding: 40px 30px 60px;
}

.why-buy-here__card {
  img {
    margin-bottom: 20px;
  }

  p {
    font-family: $font_montserrat_regular;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
}
</style>
