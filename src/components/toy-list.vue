<template>
  <section class="toy-list clean-list grid gap-1">
    <ul>
      <toy-preview
        @removeToy="removeToy"
        v-for="toy in toys"
        :toy="toy"
        :key="toy.id"
      ></toy-preview>
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
  methods: {
    removeToy(toyId) {
      this.$emit("removeToy", toyId);
    },
  },
  computed: {},
  unmounted() {},
};
</script>



<style>
</style>