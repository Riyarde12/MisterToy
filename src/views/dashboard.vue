<template>
  <section class="page-layout"></section>
  <doughnut-controller></doughnut-controller>
</template>

<script>
import doughnutController from "../components/doughnut-controller.vue";

export default {
  name: "dashboard-controller",
  data() {
    return {};
  },
  components: {
    doughnutController,
  },
};
</script>

<style>
</style>