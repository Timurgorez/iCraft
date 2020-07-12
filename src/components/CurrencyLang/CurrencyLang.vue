<template>
  <div class="currency-lang-block">
    <img src="~@/assets/usa.svg" alt="">

    <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
      <template v-slot:button-content>
        <span class="currency-lang-block__text">EN ($US)<span class="currency-lang-block__icon" ></span></span>
      </template> 
      <b-dropdown-item>EN ($CAD)</b-dropdown-item>
      <b-dropdown-item>EN ($GBR)</b-dropdown-item>
      <b-dropdown-item>EN ($AUD)</b-dropdown-item>
    </b-dropdown>

  </div>
</template>

<script>
export default {
  name: 'CurrencyLang',
  props: {
    products: Array
  },
  data (){
      return {
        countProduct: 2
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style.scss";

.currency-lang-block{
  display: flex;
  align-items: center;

}
.currency-lang-block__text{
  font-family: $font_montserrat_regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.14px;
  color: #070707;
}
.currency-lang-block__icon{
  width: 14px;
  height: 10px;
  display: inline-flex;
  background: url('~@/assets/arrow.svg') no-repeat 50% 50%;
  margin-left: 5px;
}

</style>
