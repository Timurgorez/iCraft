<template>
  <b-col
    v-if="limit > index"
    :cols="size.cols"
    :sm="size.sm"
    :md="size.md"
    :lg="size.lg"
    class="centered product-card-wrap"
  >
    <b-card class="product-card">
      <div
        v-if="item.sale"
        class="product-card__sale d-flex flex-row justify-content-start align-items-center"
      >
        <p class="product-card__sale-text">{{ item.sale }}% Off</p>
      </div>
      <router-link
        :to="{ name: 'ProductPage', params: { id: item.id } }"
        class="product-card__link"
      >
        <div
          class="product-card__image d-flex flex-column justify-content-end align-items-end"
          :style="{ backgroundImage: 'url(' + item.images[0] + ')' }"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <div
            v-if="hover"
            class="product-card__add-to-cart d-flex justify-content-center align-items-center"
          >
            <div class="product-card__add-to-card-icon"></div>
          </div>
        </div>
      </router-link>
      <b-card-text>
        <div
          class="product-card__mobile d-flex d-sm-flex d-md-none d-lg-none d-xl-none flex-row justify-content-center align-items-center"
        >
          <div
            class="product-card__add-to-cart d-flex justify-content-center align-items-center"
          >
            <div class="product-card__add-to-card-icon"></div>
          </div>
        </div>
        <router-link
          :to="{ name: 'ProductPage', params: { id: item.id } }"
          class="product-card__link"
        >
          {{ item.name }}
        </router-link>
      </b-card-text>

      <div class="product-card__bottom-wrap">
        <div
          class="product-card__price-wrap d-flex  flex-sm-row flex-md-row flex-column flex-wrap justify-content-start align-items-start"
        >
          <span class="product-card__price"
            >{{ item.price.currency_formatting }}{{ item.price.new }}
            {{ item.price.currency_code }}</span
          >
          <span class="product-card__price-old"
            >{{ item.price.currency_formatting }}{{ item.price.old }}
            {{ item.price.currency_code }}</span
          >
        </div>

        <ProductRating :rating="item.rating" size="22px" />

        <div class="product-icons">
          <ProductIcon
            v-for="(icon, index) in item.icons"
            :key="index"
            :icon="icon"
          />
        </div>
      </div>
    </b-card>
  </b-col>
</template>

<script>
import ProductIcon from "./ProductIcon.vue";
import ProductRating from "./Rating.vue";

export default {
  name: "ProductCard",
  data() {
    return {
      hover: false
    };
  },
  props: {
    item: Object,
    limit: {
      type: Number,
      default: () => 999999
    },
    index: Number,
    size: {
      type: Object,
      default: () => {
        return {
          cols: "6",
          sm: "6",
          md: "4",
          lg: "3"
        };
      }
    }
  },
  components: {
    ProductIcon,
    ProductRating
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-card__link {
  text-decoration: none;
  font-family: $font_montserrat_medium;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.28;
  color: $text_color;
  &:hover {
    text-decoration: none;
    color: $text_color;
  }
}

.product-card {
  width: 100%;
  border: none;
  height: 100%;
  padding-bottom: 70px;
  display: block;

  &:hover {
    text-decoration: none;
  }

  .card-body {
    // padding: 12px 0 225px 0;
    padding: 0;
    text-align: left;
    position: relative;
  }

  .card-text {
    font-family: $font_montserrat_medium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    color: $text_color;
    text-align: left;
    display: inline-block;
    margin-bottom: 10px;
    max-height: 90px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .product-card__sale {
    background-image: url("~@/assets/red-rectangle.svg");
    background-size: cover;
    max-width: 120px;
    max-height: 38px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 20px;
    left: -10px;
  }

  .product-card__sale-text {
    font-family: $font_montserrat_regular;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 0;
    padding-left: 10px;
  }

  .product-card__price {
    font-family: $font_montserrat_regular;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #c90000;
  }

  .product-card__price-old {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text_color;
    text-decoration: line-through;
    padding-left: 27px;
  }

  .product-card__bottom-wrap {
    //position: absolute;
    bottom: 0;
    right: 12px;
    left: 0;
  }

  .product-card__image {
    max-width: 400px;
    max-height: 375px;
    min-height: 240px;
    min-width: 130px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #fff;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    border: 2px solid $border_grey_color;
    border-radius: 4px;

    &:hover {
      border: solid 2px $border_hover_grey_color;
      cursor: pointer;
    }
  }

  .product-card__add-to-cart {
    position: relative;
    right: 20px;
    top: -15px;
    width: 50px;
    height: 50px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.5);
    background-color: #ffffff;
    border-radius: 50%;
  }

  .product-card__add-to-card-icon {
    background-image: url("~@/assets/bag-2.svg");
    background-repeat: no-repeat;
    background-position: center;
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
}

.hover-border.product-card > img {
  border: solid 3px $purple_light_color;
  cursor: pointer;
}

.product-card__price-wrap {
  margin-bottom: 10px;
}

.product-icons {
  display: flex;
}

.product-rating {
  margin-top: 10px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 768px) {
  .product-card__mobile {
    position: relative;
    top: 3px;
    margin-bottom: 7px;
    .product-card__add-to-cart {
      right: 0;
      top: 0;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    }
  }
}

@media only screen and (max-width: 580px) {
  h1 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  .product-card-wrap {
    padding-right: 10px;
    padding-left: 10px;
  }

  .product-card {
    .card-text {
      font-size: 14px;
    }

    .product-card__price,
    .product-card__price-old {
      font-size: 14px;
    }

    .card-body {
      padding: 6px 6px 50px 6px;
    }

    .product-card__price-wrap {
      margin-bottom: 0;
    }

    .product-card__bottom-wrap {
      right: 6px;
      left: 6px;
    }

    .product-card__image {
      height: 50%;
    }

    .product-card__price-old {
      padding-left: 0;
    }

    .product-card__sale {
      max-width: 80px;
      max-height: 25px;
      left: 0px;
    }

    .product-card__sale-text {
      font-size: 14px;
    }
  }
}
</style>
