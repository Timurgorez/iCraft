<template>
  <b-col
    v-if="limit > index"
    :cols="size.cols"
    :sm="size.sm"
    :md="size.md"
    :lg="size.lg"
    :xl="size.xl"
    :class="['centered', 'product-card-wrap', classWrap]"
  >
    <b-card class="product-card">
      <router-link
        :to="{ name: 'ProductPage', params: { id: item.id } }"
        class="product-card__link"
      >
        <div
          class="product-card__image d-flex flex-column justify-content-center align-items-center"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <img
            class="product-card__image-pic"
            :src="item.images[0]"
            :alt="item.name"
          />
          <div
            v-if="hover"
            @click.prevent="addToCartFast"
            class="product-card__add-to-cart d-flex justify-content-center align-items-center"
          >
            <div class="product-card__add-to-card-icon"></div>
          </div>
        </div>
      </router-link>
      <div
        v-if="item.sale"
        class="product-card__sale d-flex flex-row justify-content-start align-items-center"
      >
        <p class="product-card__sale-text">{{ item.sale }}% Off</p>
      </div>
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
          v-splitTitle
          :to="{ name: 'ProductPage', params: { id: item.id } }"
          class="product-card__link"
        >
          {{ item.name }}
        </router-link>
      </b-card-text>

      <div class="product-card__bottom-wrap">
        <div
          class="product-card__price-wrap d-flex  flex-sm-row flex-md-row flex-wrap justify-content-between align-items-start"
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

        <ProductRating v-if="showRating" :rating="item.rating" />

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
    showRating: {
      type: Boolean,
      default: true
    },
    item: Object,
    limit: {
      type: Number,
      default: () => 999999
    },
    index: Number,
    classWrap: String,
    size: {
      type: Object,
      default: () => {
        return {
          cols: "6",
          sm: "6",
          md: "4",
          lg: "3",
          xl: "2"
        };
      }
    }
  },
  components: {
    ProductIcon,
    ProductRating
  },
  methods: {
    checkProductInBag(product) {
      let check = false;
      this.$store.state.shoppingBag.productInBag.map(el => {
        if (
          el.prodId === product.prodId &&
          el.size === product.size &&
          el.color === product.color
        )
          check = true;
      });
      return check;
    },
    addToCartFast() {
      console.log("addToCartFast");
      const product = {
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
        prodId: this.item.id,
        count: 1,
        size: this.item.product_detail.size.split(", ")[0],
        color: this.item.product_detail.dominant_color.name,
        customRequest: false,
        sellerId: this.item.seller.id
      };
      if (this.checkProductInBag(product)) {
        this.$notify({
          group: "app-product",
          type: "warn",
          title: "WARNING",
          text: "This item already in your bag!"
        });
      } else {
        this.$notify({
          group: "app-product",
          type: "success",
          title: "SUCCESS",
          text: "Item was added to your bag!"
        });
        this.$store.dispatch("addProductToBag", product);
      }
    }
  },
  filters: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-card__link {
  text-decoration: none;
  font-family: $font_montserrat_medium;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.28;
  color: $text_color;
  width: 100%;
  display: inline-block;
  height: 100%;
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
  border-radius: 0.4rem;
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
    color: $text_color;
    text-align: left;
    display: inline-block;
    margin-bottom: 5px;
    height: 2.5rem;
    overflow: hidden;
    width: 100%;
    display: inline-block;
    padding: 0 10px;
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
    z-index: 0;
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
  }

  .product-card__bottom-wrap {
    //position: absolute;
    bottom: 0;
    right: 12px;
    left: 0;
    padding: 0 10px;
  }

  .product-card__image {
    max-width: 399px;
    min-width: 130px;
    max-height: 376px;
    min-height: 140px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: #fff;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    // border: 2px solid $border_grey_color;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    &:hover {
      // border: solid 2px $border_hover_grey_color;
      cursor: pointer;
    }
    img {
      max-height: 376px;
      max-width: 100%;
    }
  }

  .product-card__add-to-cart {
    position: absolute;
    right: 20px;
    bottom: 15px;
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
      position: relative;
      right: 0;
      top: 0;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    }
  }

  .product-card .card-text {
    height: 98px;
  }
}

@media only screen and (max-width: 580px) {
  h1 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  div.product-card-wrap {
    padding-right: 8px;
    padding-left: 8px;
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
      // padding: 6px 6px 50px 6px;
    }

    .product-card__price-wrap {
      margin-bottom: 0;
    }

    .product-card__bottom-wrap {
      right: 6px;
      left: 6px;
    }

    .product-card__image {
      min-height: 152px;
    }

    .product-card__price {
      padding-right: 12px;
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
