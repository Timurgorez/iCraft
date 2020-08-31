<template>
  <div class="sort-group">
    <div
      class="sort-group__sort-wrap"
      v-for="(item, index) of sorting_data"
      :key="index"
    >
      <input
        class="sort-group__sort-input"
        :id="'sort' + index"
        v-model="model_sort"
        type="radio"
        name="sort"
        :value="item.value"
      />
      <label class="sort-group__sort-label" :for="'sort' + index">{{
        item.name
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortGroup",
  props: {},
  data() {
    return {
      model_sort: "Featured",

      sorting_data: [
        {
          name: "Featured",
          value: "Featured"
        },
        {
          name: "Newest",
          value: "Newest"
        },
        {
          name: "Price: High - Low",
          value: "Price: High - Low"
        },
        {
          name: "Price: Low - High",
          value: "Price: Low - High"
        }
      ]
    };
  },
  methods: {
    clearFilter() {
      this.model_sort = "Featured";
    }
  },
  watch: {
    model_sort(val) {
      this.$emit("model_sort", val);
      return val;
    }
  }
};
</script>

<style scoped lang="scss">
.sort-group {
  margin-top: 35px;
}

.sort-group__sort-wrap {
  position: relative;
}

.sort-group__sort-label {
  font-size: 14px;
  width: 100%;
  margin-bottom: 1rem;
  font-family: $font_montserrat_regular;
  padding-left: 30px;
}
.sort-group__input-max,
.sort-group__input-min {
  border: 1px solid $border_grey_color;
  border-radius: 6px;
  font-size: 14px;
  padding: 5px;
  margin: 10px 0;
  width: 100%;
  font-family: $font_montserrat_italic;
}

.sort-group__sort-input {
  display: none;

  &:checked + .sort-group__sort-label {
    color: $purple_color;
  }
  &:checked + .sort-group__sort-label:after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 0;
    width: 18px;
    height: 18px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23BC00FF' fill-rule='evenodd' d='M17.797 2.306c-.27-.27-.708-.27-.979 0L5.596 13.528 1.182 9.114c-.27-.27-.709-.27-.98 0-.27.27-.27.709 0 .979l4.904 4.904c.27.27.71.27.98 0L17.796 3.285c.27-.27.27-.709 0-.98z'/%3E%3C/svg%3E");
  }
}
</style>
