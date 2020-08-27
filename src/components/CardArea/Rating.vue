<template>
  <div class="product-rating">
    <span v-if="before" class="product-rating__count mr-2"
      >({{ rating.count }})</span
    >
    <div
      v-for="(number, index) in stars"
      :key="index"
      class="product-rating__star-wrap"
    >
      <div
        v-if="number == 1"
        class="star"
        :style="{ width: size, height: size }"
      ></div>
      <div
        v-if="number == 0.5"
        class="star half-star"
        :style="{ width: size, height: size }"
      ></div>
      <div
        v-if="number == 0"
        class="star empty-star"
        :style="{ width: size, height: size }"
      ></div>
    </div>
    <span v-if="!before" class="product-rating__count"
      >({{ rating.count }})</span
    >
  </div>
</template>

<script>
export default {
  name: "ProductRating",
  data() {
    return {};
  },
  props: {
    rating: Object,
    before: Boolean,
    size: String
  },
  components: {},
  computed: {
    stars() {
      const cell = Math.trunc(this.rating.stars);
      const left = this.rating.stars - cell;
      const arrStars = [];
      let check = false;
      for (let i = 1; i <= 5; i++) {
        if (i <= cell) {
          arrStars.push(1);
          continue;
        }
        if (check) {
          arrStars.push(0);
          continue;
        }
        if (left <= 0.25) {
          arrStars.push(0);
          check = true;
        } else if (left > 0.25 && left <= 0.74) {
          arrStars.push(0.5);
          check = true;
        } else {
          arrStars.push(1);
          check = true;
        }
      }
      return arrStars;
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-rating {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  //   margin-bottom: 20px;
  //   margin-top: 5px;
}
.product-rating__star-wrap {
  margin-right: 8px;
  img {
  }
}
.star {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='29' viewBox='0 0 30 29'%3E%3Cpath fill='%23FFB000' d='M29.21 10.373c-.188-.579-.7-.988-1.305-1.043l-8.248-.749-3.26-7.63C16.157.39 15.61.027 15 .027c-.61 0-1.157.362-1.397.922l-3.26 7.631-8.248.75c-.605.055-1.117.464-1.306 1.042-.188.578-.014 1.213.443 1.614l6.235 5.467-1.839 8.096c-.134.595.097 1.211.59 1.568.266.193.578.29.891.29.27 0 .538-.072.779-.216L15 22.94l7.11 4.252c.522.312 1.178.283 1.67-.074.495-.357.726-.973.591-1.568l-1.838-8.096 6.235-5.467c.457-.401.63-1.034.443-1.614z'/%3E%3C/svg%3E%0A");
  width: 29px;
  height: 29px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
}
.empty-star {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29'%3E%3Cpath fill='%23FFB000' d='M6.823 27.407c-.313 0-.624-.097-.889-.29-.494-.357-.725-.973-.59-1.567l1.838-8.096-6.234-5.467c-.458-.4-.633-1.033-.445-1.613.188-.579.7-.988 1.306-1.044l8.248-.749 3.26-7.63c.24-.561.788-.924 1.397-.924.608 0 1.156.363 1.396.922l3.261 7.632 8.246.749c.608.055 1.12.465 1.308 1.044.188.579.014 1.213-.444 1.613l-6.234 5.466 1.838 8.096c.135.595-.096 1.21-.59 1.568-.493.357-1.15.384-1.67.072l-7.111-4.25-7.112 4.253c-.24.143-.508.215-.779.215zm7.89-6.298c.271 0 .539.072.78.215l6.711 4.014-1.734-7.642c-.124-.543.06-1.111.48-1.48l5.887-5.161-7.787-.707c-.561-.051-1.043-.404-1.262-.92l-3.074-7.202-3.078 7.203c-.216.513-.698.865-1.258.916l-7.788.708 5.886 5.161c.421.37.606.936.48 1.481l-1.733 7.642 6.712-4.013c.24-.143.509-.215.779-.215z'/%3E%3C/svg%3E%0A");
}
.half-star {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='29' viewBox='0 0 30 29'%3E%3Cg fill='%23FFB000'%3E%3Cpath d='M6.395 27.407c-.313 0-.624-.097-.89-.29-.494-.357-.724-.973-.59-1.567l1.838-8.096L.52 11.987c-.459-.4-.634-1.033-.445-1.613.188-.579.7-.988 1.305-1.044l8.248-.749 3.26-7.63c.241-.561.789-.924 1.397-.924.609 0 1.156.363 1.397.922l3.26 7.632 8.247.749c.607.055 1.119.465 1.307 1.044.188.579.014 1.213-.444 1.613l-6.233 5.466 1.838 8.096c.134.595-.097 1.21-.59 1.568-.494.357-1.15.384-1.67.072l-7.112-4.25-7.112 4.253c-.24.143-.508.215-.778.215zm7.89-6.298c.27 0 .538.072.779.215l6.712 4.014-1.735-7.642c-.124-.543.06-1.111.481-1.48l5.886-5.161-7.787-.707c-.56-.051-1.043-.404-1.262-.92l-3.074-7.202-3.077 7.203c-.217.513-.7.865-1.258.916l-7.788.708 5.885 5.161c.422.37.606.936.481 1.481l-1.733 7.642 6.712-4.013c.24-.143.508-.215.778-.215z' transform='translate(.571)'/%3E%3Cpath d='M14.285.028c-.609 0-1.157.362-1.396.922L9.63 8.581l-8.248.75c-.605.055-1.117.464-1.306 1.042-.188.578-.015 1.213.443 1.614l6.234 5.467-1.838 8.096c-.135.595.097 1.211.59 1.568.266.193.578.29.891.29.269 0 .538-.072.779-.216l7.111-4.252c.407-15.275.407-22.912 0-22.912z' transform='translate(.571)'/%3E%3C/g%3E%3C/svg%3E%0A");
}

.product-rating__count {
  font-family: $font_montserrat_regular;
  font-size: 16px;
  line-height: 1.31;
  color: $text_color;
}

@media only screen and (max-width: 580px) {
  .product-rating__star-wrap {
    img {
      height: 12px;
    }
  }
  .product-rating {
    margin-bottom: 15px;
    margin-top: 5px;
  }
  .product-rating__count {
    font-size: 14px;
  }
  .star{
    width: 22px;
    height: 22px;
  }
}
</style>
