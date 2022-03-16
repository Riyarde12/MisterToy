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
    <select-cmp @change="setFilter" v-model="filterBy.labels"></select-cmp>
    <options-cmp @change="setFilter" v-model="filterBy.sortBy"></options-cmp>
  </section>
</template>

<script>
import toggleBtn from "./toggle-btn.vue";
import selectCmp from "./select-cmp.vue";
import optionsCmp from "./options-cmp.vue";

export default {
  name: "toy-filter",
  components: {
    toggleBtn,
    selectCmp,
    optionsCmp,
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
      // console.log(this.filterBy);
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
  // watch:{

  // },
  // selectedLabels(labels) {
  //   console.log("hey!", labels);
  //   this.filterBy.labels = labels;
  // },
  // watch: {
  //   filterBy: {
  //     handler() {
  //       this.setFilter();
  //       console.log("this.filterBy", this.filterBy);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style>
</style>