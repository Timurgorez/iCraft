<template>
  <ul class="header-main__ul" ref="menuMobile">
    <li v-for="(elem, index) in menu" :key="index" :class="['header-main__li', {' header-main__li-more': elem.name == 'More'}]">
      <a v-if="elem.children" :href="elem.url" @click="goDeepMenu" :class="['nav-link', {'has-children': elem.children }]">{{elem.name}}</a>
      <router-link v-else :class="['nav-link', {'has-children': elem.children }]" @click="goDeepMenu" :to="{ name: elem.url }">
        {{elem.name}}
      </router-link>
      <ul v-if="elem.children" class="header-main__wrap-sublink">
        <li class="header-main__li">
          <a class="nav-link go-back" @click.prevent="goBack" href="#">
            <b>{{elem.name}}</b>
          </a>
        </li>
        <li v-for="(subElem, index) in elem.children" :key="index" class="header-main__li">
          <a v-if="subElem.children" :href="subElem.url" @click="goDeepMenu" :class="['nav-link', {'has-children': subElem.children }]">{{subElem.name}}</a>
          <router-link v-else :class="['nav-link', {'has-children': subElem.children }]" @click="goDeepMenu" :to="{ name: subElem.url }">
            {{subElem.name}}
          </router-link>
          <ul v-if="subElem.children" class="header-main__wrap-sublink">
            <li class="header-main__li">
              <a class="nav-link go-back" @click.prevent="goBack" href="#">
                <b>{{subElem.name}}</b>
              </a>
            </li>
            <li v-for="(subSubElem, index) in subElem.children" :key="index" class="header-main__li">
              <a v-if="subSubElem.children" :href="subSubElem.url" @click="goDeepMenu" :class="['nav-link', {'has-children': subSubElem.children }]">{{subSubElem.name}}</a>
              <router-link v-else :class="['nav-link', {'has-children': subSubElem.children }]" @click="goDeepMenu" :to="{ name: subSubElem.url }">
                {{subSubElem.name}}
              </router-link>
              <ul v-if="subSubElem.children" class="header-main__wrap-sublink">
                <li class="header-main__li">
                  <a class="nav-link go-back" @click.prevent="goBack" href="#">
                    <b>{{subSubElem.name}}</b>
                  </a>
                </li>
                <li v-for="(subSubSubElem, index) in subSubElem.children" :key="index" class="header-main__li">
                  <!-- <a :href="subSubSubElem.url" @click="goDeepMenu" :class="['nav-link']"></a> -->
                  <router-link class="nav-link" @click="goDeepMenu" :to="{ name: subSubSubElem.url }">
                    {{subSubSubElem.name}}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>

export default {
  name: "BuildMenuMobile",
  data() {
    return {
      menu: [
        {
          name: 'Jewelry',
          url: "HomePage", 
          children: [
            {name: 'All Jewelry', url: "HomePage"},
            {name: 'Anklets', url: "HomePage"},
            {name: 'Beach Jewelry', url: "HomePage"},
            {name: 'Bracelets', url: "HomePage", children: [
              {name: 'level1.4.1', url: "HomePage"},
              {name: 'level1.4.2', url: "HomePage"},
              {name: 'level1.4.3', url: "HomePage"},
              {name: 'level1.4.4', url: "HomePage"},
              {name: 'level1.4.5', url: "HomePage"},
              {name: 'level1.4.6', url: "HomePage"},
              {name: 'level1.4.7', url: "HomePage"},
            ]},
            {name: 'Bridal Jewelry', url: "HomePage"},
            {name: 'Brooches & Pins', url: "HomePage"},
            {name: 'Celtic', url: "HomePage"},
            {name: 'Chains', url: "HomePage"},
            {name: 'Chokers', url: "HomePage"},
            {name: 'Earrings', url: "HomePage"},
          ]
        },{
          name: 'Clothing',
          url: "HomePage", 
          children: [
            {name: 'level2.1', url: "HomePage"},
            {name: 'level2.2', url: "HomePage"},
            {name: 'level2.3', url: "HomePage"},
            {name: 'level2.4', url: "HomePage"},
            {name: 'level2.5', url: "HomePage"},
            {name: 'level2.6', url: "HomePage"},
            {name: 'level2.7', url: "HomePage"},
          ]
        },
        {
          name: 'Accessories',
          url: "HomePage", 
          children: [
            {name: 'level3.1', url: "HomePage"},
            {name: 'level3.2', url: "HomePage"},
            {name: 'level3.3', url: "HomePage"},
            {name: 'level3.4', url: "HomePage", children: [
              {name: 'level3.4.1', url: "HomePage"},
              {name: 'level3.4.2', url: "HomePage"},
              {name: 'level3.4.3', url: "HomePage"},
              {name: 'level3.4.4', url: "HomePage", children: [
                {name: 'level3.4.4.1', url: "HomePage"},
                {name: 'level3.4.4.2', url: "HomePage"},
                {name: 'level3.4.4.3', url: "HomePage"},
                {name: 'level3.4.4.4', url: "HomePage"}
              ]}
            ]},
            {name: 'level3.5', url: "HomePage"},
            {name: 'level3.6', url: "HomePage"},
            {name: 'level3.7', url: "HomePage"},
            {name: 'level3.8', url: "HomePage"},
            {name: 'level3.9', url: "HomePage"},
            {name: 'level3.10', url: "HomePage"},
            {name: 'level3.11', url: "HomePage"},
            {name: 'level3.12', url: "HomePage"},
            {name: 'level3.13', url: "HomePage", children: [
              {name: 'level3.4.1', url: "HomePage"},
              {name: 'level3.4.2', url: "HomePage"},
              {name: 'level3.4.3', url: "HomePage"},
              {name: 'level3.4.4', url: "HomePage", children: [
                {name: 'level3.4.4.1', url: "HomePage"},
                {name: 'level3.4.4.2', url: "HomePage"},
                {name: 'level3.4.4.3', url: "HomePage"},
                {name: 'level3.4.4.4', url: "HomePage"}
              ]}
            ]},
          ]
        },
        {
          name: 'Home Decor',
          url: "HomePage"
        },
        {
          name: 'Bath & Body',
          url: "HomePage"
        },
        {
          name: 'Toys & Games',
          url: "HomePage"
        },
        {
          name: 'More',
          url: "HomePage"
        },
        {
          name: 'Community',
          url: "Community"
        },
        {
          name: 'Sell Handmade',
          url: "HomePage"
        },
        {
          name: 'My Account',
          url: "HomePage"
        },
        
      ]
    };
  },
  props: {},
  components: {},
  methods: {
    goDeepMenu(e) {
      if(e.target.nextElementSibling && e.target.nextElementSibling.tagName == 'UL'){
        e.preventDefault();
        e.target.nextElementSibling.style.left = "0";
        const li = e.target.classList.contains('header-main__li') ? e.target : e.target.closest('.header-main__li');
        if(li && li.parentElement){
          li.parentElement.style.overflowY = 'hidden';
          li.parentElement.scrollTo({
              top: 0,
              behavior: "smooth"
          });
        }
      }
      
    },
    goBack(e) {
      e.target.closest(".header-main__wrap-sublink").style.left = "100%";
      if(e.target.closest('.header-main__wrap-sublink').parentElement.parentElement.classList.contains('header-main__wrap-sublink')
      || e.target.closest('.header-main__wrap-sublink').parentElement.parentElement.classList.contains('header-main__ul')){
        e.target.closest('.header-main__wrap-sublink').parentElement.parentElement.style.overflowY = 'auto';
      }
    }
  },
  computed: {
  },
  mounted(){
  }
};
</script>
<style scoped lang="scss">
.header-main__ul {
  max-height: calc(100vh - 162px);
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
