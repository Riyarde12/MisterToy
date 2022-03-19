<template>
  <section class="home page-layout">
    <h1>Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
      quo ipsam soluta rerum neque asperiores suscipit optio enim hic obcaecati,
      facere, mollitia explicabo quis. Blanditiis quaerat nostrum soluta
    </p>
    <div>
      <router-link to="/login-signup">
        <el-link :underline="false"> Login & Signup</el-link>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",

  data() {
    return {};
  },
};
</script>

<style scoped>
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>