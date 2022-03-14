<template>
  <section class="toy-filter">
    <input
      type="text"
      v-focus
      v-model="filterBy.name"
      @input="setFilter"
      class="form-input"
      placeholder="Search name"
    />
    <toggle-btn v-model="isInStock" />
  </section>
</template>

<script>
import toggleBtn from "../components/toggle-btn.vue";

export default {
  name: "toy-filter",
  components: {
    toggleBtn,
  },
  data() {
    return {
      filterBy: {
        name: "",
        isInStock: false,
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
  watch: {
    filterBy: {
      handler() {
        this.setFilter;
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>