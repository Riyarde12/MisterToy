<template>
  <section class="header">
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/toy">Mister Toy</router-link>|
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style>
</style>