<template>
  <b-container class="short-max-container mb-5" fluid>
    <b-row align-h="center" class="text-center">
      <b-col cols="12" class="centered">
        <div class="main-desc-block">
          <h3>Buy Exclusive Handmade Jewelry Direct from Crafters</h3>
          <img
            src="~@/assets/desctop/pages/collectionPage/for-title-2.svg"
            alt=""
          />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <GiftCategory
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </b-row>
  </b-container>
</template>

<script>
import GiftCategory from "./Pieces/GiftCaterogy";

export default {
  name: "GiftCategories",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "FOR HER",
          color: "#dcabca",
          image: "./tmp/home_page/gift_categories/her.jpg",
          items: [
            {
              name: "Fashion Jewelry",
              url: ""
            },
            {
              name: "Pearl Necklaces",
              url: ""
            },
            {
              name: "Hoop Earrings",
              url: ""
            },
            {
              name: "Women’s Clothing",
              url: ""
            },
            {
              name: "Dresses & Skirts",
              url: ""
            },
            {
              name: "New Arrivals",
              url: ""
            },
            {
              name: "On Sale Now",
              url: ""
            }
          ]
        },
        {
          id: 2,
          name: "FOR HIM",
          color: "#80aa85",
          image: "./tmp/home_page/gift_categories/him.jpg",
          items: [
            {
              name: "Fashion Jewelry",
              url: ""
            },
            {
              name: "Pearl Necklaces",
              url: ""
            },
            {
              name: "Hoop Earrings",
              url: ""
            },
            {
              name: "Women’s Clothing",
              url: ""
            },
            {
              name: "Dresses & Skirts",
              url: ""
            },
            {
              name: "New Arrivals",
              url: ""
            },
            {
              name: "On Sale Now",
              url: ""
            }
          ]
        },
        {
          id: 3,
          name: "KIDS & TEENNS",
          color: "#cdc890",
          image: "./tmp/home_page/gift_categories/kids.jpg",
          items: [
            {
              name: "Fashion Jewelry",
              url: ""
            },
            {
              name: "Pearl Necklaces",
              url: ""
            },
            {
              name: "Hoop Earrings",
              url: ""
            },
            {
              name: "Women’s Clothing",
              url: ""
            },
            {
              name: "Dresses & Skirts",
              url: ""
            },
            {
              name: "New Arrivals",
              url: ""
            },
            {
              name: "On Sale Now",
              url: ""
            }
          ]
        },
        {
          id: 4,
          name: "BABIES & PARENTS",
          color: "#d1b3ab",
          image: "./tmp/home_page/gift_categories/baby.jpg",
          items: [
            {
              name: "Fashion Jewelry",
              url: ""
            },
            {
              name: "Pearl Necklaces",
              url: ""
            },
            {
              name: "Hoop Earrings",
              url: ""
            },
            {
              name: "Women’s Clothing",
              url: ""
            },
            {
              name: "Dresses & Skirts",
              url: ""
            },
            {
              name: "New Arrivals",
              url: ""
            },
            {
              name: "On Sale Now",
              url: ""
            }
          ]
        }
      ]
    };
  },
  props: {},
  components: { GiftCategory },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.main-desc-block {
  padding: 60px 0 60px;
  text-align: center;

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
    margin-bottom: 20px;
  }

  img {
    margin-bottom: 20px;
  }

  p {
    font-family: $font_montserrat_regular;
    font-size: 1.25rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: normal;
    color: #000000;
    text-align: left;
  }
}

@media only screen and (max-width: 768px) {
  .main-desc-block {
    padding: 30px 0 30px;
    h3 {
      font-size: 22px;
    }
    img {
      height: 22px;
    }
  }
}
</style>
