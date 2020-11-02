<template>
  <b-container fluid class="footer-main">
    <b-row class="footer-block pb-5 pt-5">
      <b-col
        cols="12"
        lg="4"
        md="12"
        class="text-xl-left text-lg-left text-center"
      >
        <img
          class="footer-block__image"
          src="~@/assets/desctop/pages/collectionPage/group.png"
          alt=""
        />
        <div class="footer-block__social-wrap">
          <a :href="instagram" target="_blank"
            ><div class="footer-block__social insta"></div
          ></a>
          <a :href="twitter" target="_blank"
            ><div class="footer-block__social twit"></div
          ></a>
          <a :href="youtube" target="_blank"
            ><div class="footer-block__social youtube"></div
          ></a>
          <a :href="facebook" target="_blank"
            ><div class="footer-block__social facebook"></div
          ></a>
          <a :href="pinterest" target="_blank"
            ><div class="footer-block__social pinterest"></div
          ></a>
        </div>
      </b-col>
      <b-col cols="6" lg="2" class="pb-5 pt-5">
        <h4>{{ "Company" | toUpperCase }}</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">News & Updates</a></li>
          <li><a href="#">Social Impact</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </b-col>
      <b-col cols="6" lg="2" class="pb-5 pt-5">
        <h4>{{ "Marketplace" | toUpperCase }}</h4>
        <ul>
          <li><a href="#">Buy Handmade</a></li>
          <li><a href="#">Stores</a></li>
          <li><a href="#">Policies</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
      </b-col>
      <b-col cols="6" lg="2" class="pb-5 pt-5">
        <h4>{{ "Sell" | toUpperCase }}</h4>
        <ul>
          <li><a href="#">Sell Handmade</a></li>
          <li><a href="#">What’s Handmade?</a></li>
          <li><a href="#">How it Works</a></li>
          <li><a href="#">Seller Testimonials</a></li>
        </ul>
      </b-col>
      <b-col cols="6" lg="2" class="pb-5 pt-5">
        <h4>{{ "Community" | toUpperCase }}</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Discussions</a></li>
          <li><a href="#">Contributors</a></li>
          <li><a href="#">Get Involved</a></li>
        </ul>
      </b-col>
    </b-row>
    <b-row class="footer-block">
      <b-col cols="12" sm="12" md="12" class="res-margin-top pb-5">
        <p class="footer-block__text">
          © 2007 - 2020, ICraft marketplace is operated by unCommon Thread Inc.
          <a class="ml-lg-5 mr-3" :href="termUrl"> Term of Use </a> |
          <a class="ml-3" :href="privacyUrl">Privacy</a>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FooterMain",
  data() {
    return {
      termUrl: "",
      privacyUrl: "",
      instagram: "https://www.instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
      pinterest: "https://pinterest.com"
    };
  },
  filters: {
    toUpperCase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped lang="scss">
.footer-main {
  min-height: 100px;
  background-color: $footer_bg_color;
  width: 100%;
  background-size: 120%;
  background-repeat: no-repeat;
  position: relative;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-block__social-wrap {
  display: inline-block;
  padding-left: 30px;
  width: 100%;
}

.footer-block {
  // padding: 50px 30px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      font-family: $font_montserrat_regular;
      font-size: 16px;
      line-height: 2.63;
      color: $footer_font_color;
      text-decoration: none;
    }
  }
  h4 {
    font-family: $font_montserrat_medium;
    font-size: 18px;
    line-height: 2.63;
    color: $footer_font_color;
  }
  .footer-block__image {
    max-width: 280px;
    max-height: 74px;
    margin: 13px 15px;
    text-align: center;
  }

  .footer-block__text,
  .footer-block__text a {
    color: $footer_font_color;
    font-size: 16px;
    font-family: $font_montserrat_medium;
    margin-bottom: 0;
    text-align: center;
  }

  .footer-block__social {
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }

  .insta {
    background-image: url("~@/assets/insta.svg");
  }

  .twit {
    background-image: url("~@/assets/twitter.svg");
  }

  .youtube {
    background-image: url("~@/assets/youtube.svg");
  }

  .facebook {
    background-image: url("~@/assets/facebook.svg");
  }

  .pinterest {
    background-image: url("~@/assets/pinterest.svg");
  }

  a {
    color: #ffffff;
    text-decoration: underline;
    display: inline-block;
  }

  a:hover {
    cursor: pointer;
  }
}

@media only screen and (max-width: 992px) {
  .res-margin-top {
    margin-top: 25px;
  }

  .res-margin-bottom {
    margin-bottom: 15px;
  }
}
</style>
