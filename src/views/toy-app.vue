<template>
  <section class="top-app">
    <button @click="goToEdit">Add a new Toy</button>
    <toy-list :toys="toys"></toy-list>
  </section>
</template>

<script>
import { toyService } from "../service/toy-service.js";
import toyList from "../components/toy-list.vue";

export default {
  name: "toy-app",
  components: {
    toyList,
  },
  created() {},
  data() {
    return {};
  },
  methods: {
    goToEdit() {
      this.$router.push("/toy/edit");
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
  },
  unmounted() {},
};
</script>

<style>
</style>