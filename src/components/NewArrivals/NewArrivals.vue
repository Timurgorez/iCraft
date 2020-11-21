<template>
  <b-container class="product-max-container">
    <b-row class="new-arrivals">

      <b-col cols="12">
          <ul class="new-arrivals__ul"> 
              <li v-for="(item, index) in productsItems" :key="index +'-'+ item.id" :style="{width: 100 / countPerView + '%'}" class="new-arrivals__li">
                <router-link
                  :to="{ name: 'ProductPage', params: { id: item.id } }"
                  class="new-arrivals__link"
                >
                  <img :src="item.images[0]">
                </router-link>
              </li>
           </ul>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>

export default {
  name: "NewArrivals",
  data() {
    return {
      productsItems: [],


      countPerView: 5,
      settings: {
        main: {
          count: 5,
        },
        1200: {
          count: 4,
        },
        992: {
          count: 3,
        },
        768: {
          count: 3,
        },
        480: {
          count: 2,
        }
      }
    };
  },
  props: {},
  components: {
  },
  methods: {
    buildItems(){
      var screen = "main";
      Object.keys(this.settings).forEach(size => {
        if (innerWidth < +size && screen == 'main'){
          screen = size;
        }
      });
      console.log('DEfain', this.settings[screen].count);
      this.countPerView = this.settings[screen].count;
      this.productsItems.splice(this.countPerView);
    }
  },
  watch: {
    countPerView(){
      console.log('WATCH');
    }
  },
  computed: {
    products() {
      return this.$store.getters.productSlider;
    }
  },
  mounted(){
    this.buildItems();
    window.addEventListener("resize", this.buildItems);

    const arr = [];
    for(let i = 0; i < this.countPerView; i++){
        arr.push(this.products[Math.floor(Math.random() * this.products.length)]);
    }
    this.productsItems = arr;

    setInterval(() => {
      for(let i = 0; i < this.countPerView; i++){
        setTimeout(() => {
          this.productsItems.splice(i, 1, this.products[Math.floor(Math.random() * this.products.length)]);
        }, i * 300)
      }
    }, 5000)

  },
  destroyed() {
    window.removeEventListener("resize", this.buildItems);
  }
};
</script>

<style scoped lang="scss">
.new-arrivals {
  justify-content: center;
}
.new-arrivals__slide{
  opacity: 0 !important;
}
.new-arrivals__slide.swiper-slide-active{
  opacity: 1 !important;
}

@keyframes fade {
 0% { opacity: 0.3; }
 100% { opacity: 1; }
}

.new-arrivals__ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  .new-arrivals__li{
    margin-right: 10px;
    animation: fade 0.3s ease-in-out;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }
  .new-arrivals__link{
    width: 100%;
    height: 100%;
    display: inline-block;
    &:hover{
      opacity: 1;
    }
  }
  .new-arrivals__li:last-child{
    margin-right: 0;
  }
  img{
    width: 100%;
    max-width: 350px;
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
