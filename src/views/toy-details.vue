<template>
  <section v-if="toy" class="toy-details flex flex-col items-center gap2">
    <article>
      <p><span class="fw-bold">ID: </span>{{ toy._id }}</p>
      <p><span class="fw-bold">Name: </span>{{ toy.name }}</p>
      <!-- //TODO: fix span Boolean to change txt below: -->
      <p><span class="fw-bold">Is on stock: </span>{{ toy.isInStock }}</p>
      <p><span class="fw-bold">Reviews: </span>{{ toy.reviews }}</p>
      <p><span class="fw-bold">type: </span>{{ toy.type }}</p>
      <p>
        <span class="fw-bold">Price: </span
        >{{ $filters.currencyUSD(toy.price) }}
      </p>

      <ul v-for="label in labels" :key="label">
        <li>
          {{ label }}
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "toy-detail",
  data() {
    return {
      toy: null,
    };
  },
  created() {
    const { toyId } = this.$route.params;
    this.$store.dispatch({ type: "getToy", id: +toyId }).then((toy) => {
      this.toy = toy;
    });
  },
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
  },
  computed: {
    labels() {
      return this.toy.labels;
    },
  },
};
</script>

<style>
</style>