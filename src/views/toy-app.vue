<template>
  <section class="toy-app container flex flex-col gap-1">
    <button @click="goToEdit" class="btn btn-secondary">Add a new Toy</button>
    <toy-filter @setFilter="setFilter"></toy-filter>
    <toy-list @removeToy="removeToy" :toys="toyToshow"></toy-list>
  </section>
</template>

<script>
import { toyService } from "../service/toy-service.js";
import toyList from "../components/toy-list.vue";
import toyFilter from "../components/toy-filter.vue";

export default {
  name: "toy-app",
  components: {
    toyList,
    toyFilter,
  },
  created() {},
  data() {
    return {
      filterBy: null,
    };
  },
  methods: {
    goToEdit() {
      this.$router.push("/toy/edit");
    },
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", id: toyId });
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    toyToshow() {
      if (!this.filterBy) return this.toys;
      const regex = new RegExp(this.filterBy.name, "i");
      return this.toys.filter((toy) => regex.test(toy.name));
    },
  },
  unmounted() {},
};
</script>

<style>
</style>