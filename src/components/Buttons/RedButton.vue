<template>
    <button 
      :data-size="this.size"
      :class="['red-custom-btn', this.customClass, this.animate && 'animate']" 
      @click="onClick"
      >
        <span 
            :class="['red-custom-btn__icon', iconClass]"
            >
        </span>
        {{text}}
    </button>
</template>

<script>

export default {
    name: 'RedButton',
    data() {
      return {

      }
    },
    props: {
        text: String,
        iconClass: String,
        animate: Boolean,
        customClass: String,
        size: String
    },
    components:{
         
    },
    methods:{
        onClick(){
            this.$emit('clickHandler');
        },
    },
    
}
</script>

<style scoped lang="scss">

.red-custom-btn{
    border: 1.5px solid $red_color_btn;
    font-family: $font_montserrat_medium;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.25;
    text-align: center;
    color: #fff;
    padding: 12px 28px;
    display: inline-flex;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    background: $red_color_btn;
    box-sizing: border-box;
    &:focus{
        outline: none;
    }
}

.red-custom-btn__icon{
    display: inline-block;
    height: 24px;
    width: 24px;
    margin-right: 10px;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.apply-icon{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M6.462 13.846v2.77H21.23v.922H6.46v1.847H4.616v-1.847H2.77v-.923h1.846v-2.769h1.847zm12-9.23v2.768h2.769v.924h-2.77v1.846h-1.846V8.307H2.77v-.922h13.846v-2.77h1.847z'/%3E%3C/svg%3E");
}
.clear-icon{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%237F13A6' fill-rule='evenodd' d='M19.579 4.296l-6.781 6.78 6.78 6.782-.797.798L12 11.873l-6.781 6.783-.798-.798 6.781-6.782-6.78-6.78.797-.798L12 10.278l6.781-6.78.798.798z'/%3E%3C/svg%3E");
}

.accepted-icon{
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M25.707 3.33c-.39-.39-1.024-.39-1.414 0L8.083 19.54l-6.376-6.375c-.39-.391-1.024-.391-1.414 0-.39.39-.39 1.023 0 1.414l7.083 7.083c.39.39 1.024.39 1.414 0L25.707 4.745c.39-.39.39-1.024 0-1.415z'/%3E%3C/svg%3E");
}



.animate {
  border: none;
  position: relative;
  overflow: hidden;
  transition: .3s;
  padding: 13.5px 28px;
  &:after {
    position: absolute;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    background: rgba(255,255,255,0.35);
    height: 120%;
    left: -10%;
    transform: skewX(-45deg);
    z-index: 1;
  }
  &:hover {
    cursor: pointer;
    &:after {
      left: -10%;
      width: 130%;
    }
  }
}
    
@media only screen and (max-width: 480px) {
    
}

</style>
