<template>
  <ul class="header-main__ul" ref="menuMobile">
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link has-children"
        >Jewelry</a
      >
      <ul class="header-main__wrap-sublink">
        <li class="header-main__li">
          <a class="nav-link go-back" @click.prevent="goBack" href="#"
            ><b>Jewelry</b></a
          >
        </li>
        <li class="header-main__li">
          <a class="nav-link has-children" @click.prevent="goDeepMenu" href="#"
            >Anklets</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                >Anklets</a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chains</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches & Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Bracelets</a>
        </li>
        <li class="header-main__li">
          <a class="has-children nav-link" @click.prevent="goDeepMenu" href="#"
            >Chains</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                >Chains</a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">sfgsfgsf</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Chokers</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Earrings</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Hair Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Necklaces</a>
        </li>
        <li class="header-main__li"><a class="nav-link" href="#">Rings</a></li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches, Pins & Clips</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Beach Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Nature Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Silver Hoops</a>
        </li>
      </ul>
    </li>
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link has-children"
        >Clothing</a
      >
      <ul class="header-main__wrap-sublink">
        <li class="header-main__li">
          <a class="nav-link go-back" @click.prevent="goBack" href="#"
            ><b>Clothing</b></a
          >
        </li>
        <li class="header-main__li">
          <a class="nav-link has-children" @click.prevent="goDeepMenu" href="#"
            >Anklets</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                ><b>Anklets</b></a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chains</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches & Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Bracelets</a>
        </li>
        <li class="header-main__li">
          <a class="has-children nav-link" @click.prevent="goDeepMenu" href="#"
            >Chains</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                ><b>Chains</b></a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">sfgsfgsf</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Chokers</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Earrings</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Hair Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Necklaces</a>
        </li>
        <li class="header-main__li"><a class="nav-link" href="#">Rings</a></li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches, Pins & Clips</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Beach Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Nature Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Silver Hoops</a>
        </li>
      </ul>
    </li>
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link has-children"
        >Accessories</a
      >
      <ul class="header-main__wrap-sublink">
        <li class="header-main__li">
          <a class="nav-link go-back" @click.prevent="goBack" href="#"
            ><b>Accessories</b></a
          >
        </li>
        <li class="header-main__li">
          <a class="nav-link has-children" @click.prevent="goDeepMenu" href="#"
            >Anklets</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                ><b>Anklets</b></a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chains</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches & Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Bracelets</a>
        </li>
        <li class="header-main__li">
          <a class="has-children nav-link" @click.prevent="goDeepMenu" href="#"
            >Chains</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                ><b>Chains</b></a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">sfgsfgsf</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Chokers</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Earrings</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Hair Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Necklaces</a>
        </li>
        <li class="header-main__li"><a class="nav-link" href="#">Rings</a></li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches, Pins & Clips</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Beach Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Nature Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Silver Hoops</a>
        </li>
      </ul>
    </li>
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link has-children"
        >Home Decor</a
      >
      <ul class="header-main__wrap-sublink">
        <li class="header-main__li">
          <a class="nav-link go-back" @click.prevent="goBack" href="#"
            ><b>Home Decor</b></a
          >
        </li>
        <li class="header-main__li">
          <a class="nav-link has-children" @click.prevent="goDeepMenu" href="#"
            >Anklets</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                ><b>Anklets</b></a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chains</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches & Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Bracelets</a>
        </li>
        <li class="header-main__li">
          <a class="has-children nav-link" @click.prevent="goDeepMenu" href="#"
            >Chains</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                >Chains</a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">sfgsfgsf</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Chokers</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Earrings</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Hair Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Necklaces</a>
        </li>
        <li class="header-main__li"><a class="nav-link" href="#">Rings</a></li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches, Pins & Clips</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Beach Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Nature Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Silver Hoops</a>
        </li>
      </ul>
    </li>
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link">Bath & Body</a>
    </li>
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link">Toys & Games</a>
    </li>
    <li class="header-main__li header-main__li-more">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link has-children"
        >More</a
      >
      <ul class="header-main__wrap-sublink">
        <li class="header-main__li">
          <a class="nav-link go-back" @click.prevent="goBack" href="#"
            ><b>More</b></a
          >
        </li>
        <li class="header-main__li">
          <a class="nav-link has-children" @click.prevent="goDeepMenu" href="#"
            >Anklets</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                >Anklets</a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chains</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches & Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Bracelets</a>
        </li>
        <li class="header-main__li">
          <a class="has-children nav-link" @click.prevent="goDeepMenu" href="#"
            >Chains</a
          >
          <ul class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#"
                >Chains</a
              >
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">sfgsfgsf</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Chokers</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Earrings</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Hair Pins</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Necklaces</a>
            </li>
            <li class="header-main__li">
              <a class="nav-link" href="#">Rings</a>
            </li>
          </ul>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Chokers</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Earrings</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Hair Pins</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Necklaces</a>
        </li>
        <li class="header-main__li"><a class="nav-link" href="#">Rings</a></li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Brooches, Pins & Clips</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Beach Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Nature Jewelry</a>
        </li>
        <li class="header-main__li">
          <a class="nav-link" href="#">Silver Hoops</a>
        </li>
      </ul>
    </li>
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link has-children"
        >Community</a
      >
    </li>
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link has-children"
        >Sell Handmade</a
      >
    </li>
    <li class="header-main__li">
      <a href="#" @click.prevent="goDeepMenu" class="nav-link has-children"
        >My Account</a
      >
    </li>
  </ul>
</template>
<script>
// import FilterMobile from "@/components/FilterProduct/FilterMobile.vue";
// import BuildMenuMobile from "@/components/Header/BuildMenuMobile.vue";

export default {
  name: "BuildMenuMobile",
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {
    goDeepMenu(e) {
      console.log(this.$refs.menuMobile, e);
      e.target.nextElementSibling.style.left = "0";
    },
    goBack(e) {
      console.log(this.$refs.menuMobile, e);
      e.target.closest(".header-main__wrap-sublink").style.left = "100%";
    }
  }
};
</script>
<style scoped lang="scss">
.header-main__ul {
  max-height: 80vh;
  overflow-y: auto;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
}
.header-main__li {
  display: flex;
  width: 100%;
  transition: all 0.5s;
}
.nav-link {
  font-family: $font_montserrat_regular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  position: relative;
  padding: 1rem;
  width: 100%;
  flex-shrink: 0;
  &:hover {
    color: #000000;
  }
}
.has-children:after {
  content: "";
  width: 26px;
  height: 26px;
  display: block;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%235F5F5F' d='M7.41 8.59L12 13.17 16.59 8.59 18 10 12 16 6 10z' transform='translate(-329 -282) translate(0 268) translate(20 14) translate(309) rotate(90 12 13) matrix(1 0 0 -1 0 24.59)'/%3E%3Cpath d='M0 0L24 0 24 24 0 24z' transform='translate(-329 -282) translate(0 268) translate(20 14) translate(309) rotate(90 12 13)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  position: absolute;
  top: calc(50% - 13px);
  right: 10px;
}
.go-back .nav-link {
  font-family: $font_montserrat_bold;
}
.header-main__wrap-sublink {
  width: 100%;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
  background: #fff;
  z-index: 1;
  overflow-y: auto;
  transition: all 0.4s;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 30px;
  overflow-x: hidden;
}
.header-main__li-more {
  border-bottom: 1px solid $footer_font_color;
}
.go-back:before {
  content: "";
  width: 26px;
  height: 26px;
  display: block;
  transform: rotate(180deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%235F5F5F' d='M7.41 8.59L12 13.17 16.59 8.59 18 10 12 16 6 10z' transform='translate(-329 -282) translate(0 268) translate(20 14) translate(309) rotate(90 12 13) matrix(1 0 0 -1 0 24.59)'/%3E%3Cpath d='M0 0L24 0 24 24 0 24z' transform='translate(-329 -282) translate(0 268) translate(20 14) translate(309) rotate(90 12 13)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  position: absolute;
  top: calc(50% - 13px);
  left: -15px;
}
</style>
