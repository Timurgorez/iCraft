<template>
  <b-container fluid class="p-0">
    <b-row class="mansory-gallery">
      <b-col cols="12" md="4" class="p-0">
        <b-row>
          <b-col cols="12" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory/1.jpg')"
            >
              <RedButton
                class="go-to-collection"
                text="Go To Collection"
                :simpleButton="true"
                :animate="true"
                @clickHandler="goToCollection(1)"
              />
            </div>
          </b-col>
          <b-col cols="6" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory/2.jpg')"
            ></div>
          </b-col>
          <b-col cols="6" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory/3.jpg')"
            ></div>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="4" class="p-0">
        <div
          class="mansory-gallery__img middle"
          style="background-image: url('./tmp/home_page/mansory/4.jpg')"
        ></div
      ></b-col>
      <b-col cols="12" md="4" class="p-0">
        <b-row>
          <b-col cols="6" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory/5.jpg')"
            ></div>
          </b-col>
          <b-col cols="6" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory/6.jpg')"
            ></div>
          </b-col>
          <b-col cols="12" class="p-0">
            <div
              class="mansory-gallery__img"
              style="background-image: url('./tmp/home_page/mansory/7.jpg')"
            ></div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RedButton from "@/components/Buttons/RedButton.vue";

export default {
  name: "GiftCategory",
  data() {
    return {};
  },
  props: {},
  components: { RedButton },
  methods: {
    goToCollection(collectionId) {
      console.log("goToCollection", collectionId);
    }
  },
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
  min-height: 340px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  transition: all 0.3s;
  overflow: hidden;
  .go-to-collection {
    position: absolute;
    bottom: 15px;
    right: calc(50% - 150px);
  }
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
}
@media only screen and (max-width: 1200px) {
  .mansory-gallery__img {
    min-height: 220px;
  }
  .mansory-gallery__img.middle {
    min-height: 400px;
  }
}

@media only screen and (max-width: 768px) {
  .mansory-gallery {
    margin: 0;
  }
}
</style>
