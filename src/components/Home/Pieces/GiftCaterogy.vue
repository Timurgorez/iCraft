<template>
  <b-col md="3">
    <div class="gift-category">
      <div
        class="gift-category__img"
        :style="{ background: `url(${category.image})` }"
      ></div>
      <div
        class="gift-category__name"
        :style="{ backgroundColor: category.color }"
      >
        {{ category.name }}
      </div>
      <ul class="gift-category__items">
        <li v-for="(item, index) in category.items" :key="index">
          <a :href="item.url">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "GiftCategory",
  data() {
    return {};
  },
  props: {
    category: Object
  },
  components: {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.gift-category__img {
  width: 100%;
  height: 296px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 5px 5px 0 0;
}
.gift-category__name {
  width: 100%;
  padding: 20px 15px;
  font-family: $font_montserrat_medium;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 2.67px;
  text-align: center;
  color: #ffffff;
}
.gift-category__items {
  border: 1px solid #d7d7d7;
  border-top: none;
  background-color: #ffffff;
  border-radius: 0 0 5px 5px;
  padding: 15px 23px;
  list-style: none;
  margin: 0;
  li {
  }
  a {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    line-height: 2.13;
    color: $text_color;
    &:hover {
      color: $purple_color_btn;
    }
  }
}
</style>
