<template>
  <div :class="['search-wrap', classWrap]">
    <form class="form-search">
      <!-- <select name="" id="">
              <option value="all">All</option>
              <option value="option1">option1</option>
              <option value="option2">option2</option>
            </select> -->
      <b-form-select
        v-model="selectedSearch"
        :options="searchOptions"
      ></b-form-select>
      <input type="text" placeholder="Search for handmade" />
      <button type="submit"></button>
    </form>
  </div>
</template>
<script>
export default {
  name: "MainSearch",
  data() {
    return {
      selectedSearch: "all",
      searchOptions: [
        { value: "all", text: "All" },
        { value: "Jewelry", text: "Jewelry" },
        { value: "Clothing", text: "Clothing" },
        { value: "Accessories", text: "Accessories" },
        { value: "Home_Decor", text: "Home Decor" },
        { value: "Bath_Body", text: "Bath & Body" },
        { value: "Toys_Games", text: "Toys & Games" }
      ]
    };
  },
  props: {
    classWrap: {
      type: String
    }
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.search-wrap {
  padding: 10px 30px;
  width: 100%;
}
.form-search {
  border: 1px solid #5f5f5f;
  border-radius: 4px;
  height: 60px;
  display: flex;
  align-items: center;
  max-width: 740px;
  width: 100%;
  background: #fff;
  overflow: hidden;
  margin: 0 auto;
  input {
    border: none;
    outline: none;
    font-size: 16px;
    font-family: $font_montserrat_regular;
    color: $text_color;
    padding-left: 20px;
    width: 100%;
  }
  .custom-select {
    border: none;
    border-right: 1px solid #dadada;
    border-radius: 0;
    height: 80%;
    width: 70px;
    font-family: $font_montserrat_regular;
    color: $text_color;
    &:focus {
      outline: none;
    }
    option {
      color: $text_color;
    }
  }
  button {
    border: none;
    background: $bg_purple;
    height: 100%;
    display: inline-block;
    padding: 30px 34px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFF'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M11 2.5c4.694 0 8.5 3.806 8.5 8.5 0 2.167-.811 4.145-2.146 5.646L23.707 23l-.707.707-6.354-6.353C15.145 18.689 13.167 19.5 11 19.5c-4.694 0-8.5-3.806-8.5-8.5S6.306 2.5 11 2.5zm0 1c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5z' transform='translate(-1285 -63) translate(590 45) translate(695 18)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 26px;
  }
}

@media only screen and (max-width: 992px) {
  // .form-search {
  //   height: 42px;
  // }
}
</style>
