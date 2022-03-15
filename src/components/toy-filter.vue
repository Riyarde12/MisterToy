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
        <option value="1">On wheels</option>
        <option value="2">Box game</option>
        <option value="3">Art</option>
        <option value="4">Baby</option>
        <option value="5">Doll</option>
        <option value="6">Puzzle</option>
        <option value="7">Outdoor</option>
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
      handler(isInStock) {
        this.setFilter;
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>