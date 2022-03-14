<template>
  <section class="toy-list">
    <ul>
      <toy-preview v-for="toy in toys" :toy="toy" :key="toy.id"></toy-preview>
    </ul>
  </section>
</template>

<script>
import toyPreview from "../components/toy-preview.vue";

export default {
  props: {
    toys: {
      type: [Object],
    },
  },
  components: {
    toyPreview,
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  unmounted() {},
};
</script>



<style>
</style>