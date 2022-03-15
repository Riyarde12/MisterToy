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
    <toggle-btn @change="setFilter" v-model="filterBy.isInStock" />
    <label>
      Labels:
      <select @change="setFilter" multiple v-model="filterBy.labels">
        <option>On wheels</option>
        <option>Box game</option>
        <option>Art</option>
        <option>Baby</option>
        <option>Doll</option>
        <option>Puzzle</option>
        <option>Outdoor</option>
      </select>
    </label>
    <label>
      sortBy :
      <select @change="setFilter" v-model="filterBy.sortBy">
        <option value="time">Time</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </label>
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
        labels: [],
        sortBy: "",
      },
    };
  },
  methods: {
    setFilter() {
      console.log(this.filterBy);
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
  // watch: {
  //   filterBy: {
  //     handler(isInStock) {
  //       this.setFilter;
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style>
</style>