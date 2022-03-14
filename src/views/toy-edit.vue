<template>
  <section v-if="toyToEdit">
    <form @submit.prevent="saveToy" class="form">
      <div class="form-control">
        <label for="txt" class="form-label">Toy Name</label>
        <input
          type="text"
          required
          v-model="toyToEdit.name"
          id="txt"
          class="form-input"
          placeholder="Enter your toy name here..."
        />
      </div>
      <div class="form-control">
        <label for="price" class="form-label">Toy Price</label>
        <input
          type="number"
          required
          v-model.number="toyToEdit.price"
          id="price"
          class="form-input"
        />
      </div>
      <div class="btn-group">
        <button @click="saveToy" class="btn btn-info">Save</button>
        <button @click="goBack" class="btn btn-danger-text">Go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from "../service/toy-service";

export default {
  name: "toy-edit",
  data() {
    return {
      toyToEdit: null,
    };
  },
  created() {
    const { id } = this.$route.params;
    if (id) {
      toyService.getById(+id).then((toy) => {
        this.toyToEdit = toy;
      });
    } else this.toyToEdit = toyService.getEmptyToy();
  },
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
    saveToy() {
      this.$store
        .dispatch({ type: "saveToy", toy: this.toyToEdit })
        .then(() => {
          this.$router.push("/toy");
        });
    },
  },
};
</script>

<style>
</style>