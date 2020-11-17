<template>
<section>
  <HeaderMain />
  <b-container fluid="xl" class="mt-5 mb-5" style="min-height: calc(100vh - 803px);">
    <b-row>
      <b-col cols="12">
        <h2 class="default-font-styles">Community Page is under construction!</h2>
      </b-col>
    </b-row>
  </b-container>
  <FooterMain />
</section>
</template>

<script>
import HeaderMain from "@/components/Header/HeaderMain";
import FooterMain from "@/components/Footer/FooterMain";

export default {
name: "Community",
  components: {HeaderMain, FooterMain}
}
</script>

<style scoped lang="scss">

</style>