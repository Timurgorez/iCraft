<template>
    <button class="purple-custom-btn" @click="onClick">
        <span 
            :class="['purple-custom-btn__icon', iconClass]"
            >
        </span>
        {{text}}
    </button>
</template>

<script>

export default {
    name: 'PurpleButton',
    data() {
      return {

      }
    },
    props: {
        text: String,
        iconClass: String
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

.purple-custom-btn{
    border: 1.5px solid $purple_color_btn;
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.25;
    text-align: center;
    color: $purple_color_btn;
    padding: 12px 28px;
    display: inline-flex;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    background: #fff;
    &:focus{
        outline: none;
    }
}

.purple-custom-btn__icon{
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
    
@media only screen and (max-width: 480px) {
    
}

</style>
