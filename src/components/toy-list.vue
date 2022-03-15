<template>
  <section>
    <ul class="toy-list clean-list grid gap-1">
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
  name: "toy-list",
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