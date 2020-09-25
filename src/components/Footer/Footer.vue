<template>
  <div class="footer">
    <div class="footer-block">
      <b-col order="1" order-sm="1" order-md="1" order-lg="1" order-xl="1" align-self="center" align-h="start" cols="12" sm="12" md="12" lg="3" class="d-flex flex-row justify-content-center justify-content-lg-start justify-content-lg-start justify-content-sm-center">
        <img class="footer-block__image" src="~@/assets/desctop/pages/collectionPage/group.png" alt="">
      </b-col>
      <b-col order="3" order-sm="3" order-md="3" order-lg="2" order-xl="2" align-self="center" align-h="center" cols="12" sm="12" md="12" lg="4" class="res-margin-top">
        <p class="footer-block__text">© 2007 - 2020, ICraft marketplace is operated by unCommon Thread Inc.</p>
      </b-col>
      <b-col order="4" order-sm="4" order-md="4" order-lg="3" order-xl="3" align-self="center" align-h="center" cols="12" sm="12" md="12" lg="3" class="res-margin-top res-margin-bottom">
        <p class="footer-block__text"><a :href="termUrl"> Term of Use </a> | <a :href="privacyUrl">Privacy</a></p>
      </b-col>
      <b-col order="2" order-sm="2"  order-md="2" order-lg="4" order-xl="4" align-self="center"  cols="12" sm="12" md="12" lg="2" class="d-flex flex-row justify-content-center justify-content-lg-end justify-content-sm-center justify-content-md-center">
        <a :href="instagram" target="_blank"><div class="footer-block__social insta"></div></a>
        <a :href="twitter" target="_blank"><div class="footer-block__social twit"></div></a>
        <a :href="youtube" target="_blank"><div class="footer-block__social youtube"></div></a>
        <a :href="facebook" target="_blank"><div class="footer-block__social facebook"></div></a>
        <a :href="pinterest" target="_blank"><div class="footer-block__social pinterest"></div></a>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
      return {
        termUrl : '',
        privacyUrl: '',
        instagram: 'https://www.instagram.com',
        twitter: 'https://twitter.com',
        youtube: 'https://youtube.com',
        facebook: 'https://facebook.com',
        pinterest: 'https://pinterest.com'
      }
    }
}
</script>

<style scoped lang="scss">

  .footer {
    min-height: 100px;
    background-color: #2f2334;
  }
  
  .footer-block {
    min-height: 100px;
    width: 100%;
    background-size: 120%;
    background-repeat: no-repeat;
    position: relative;
    box-shadow: 0 0 40px rgba(0,0,0,0.3);
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .footer-block__image{
      max-width: 280px;
      max-height: 74px;
      margin: 13px 15px;
      text-align: center;
    }

    .footer-block__text {
      color: #ffffff;
      font-size: 0.8em;
      font-family: $font_montserrat_regular;
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
