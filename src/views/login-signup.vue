<template>
  <section>
    <h1>Please login</h1>
    <div>
      <form>
        <el-input v-model="username" placeholder="Username" clearable />
        <el-input
          v-model="password"
          type="password"
          placeholder="Please input password"
          show-password
        />
        <div>
          <button @click="onLogin" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    <hr />
    <user-cmp v-if="loggedInUser" :loggedInUser="loggedInUser"></user-cmp>
    <!-- <div>
      <h1>Please signup</h1>
      <el-input placeholder="Fullname" clearable />
      <el-input placeholder="Username" clearable />
    </div>

    <div>
      <el-input
        type="password"
        placeholder="Please input password"
        show-password
      />
    </div>
    <div>
      <button class="btn btn-primary">Signup</button>
    </div> -->
  </section>
</template>

<script>
import userCmp from "../components/user-cmp.vue";

export default {
  data() {
    return {
      fullname: "",
      username: "",
      password: "",
      loggedInUser: null,
    };
  },
  components: {
    userCmp,
  },
  methods: {
    async onLogin() {
      try {
        const user = this.$store.dispatch({
          type: "login",
          username: this.username,
          password: this.password,
        });
        this.loggedInUser = user;
        console.log("username:", this.username);
        console.log("password:", this.password);
      } catch (err) {
        console.log("err", err);
      }
    },
    // signup() {
    //   this.$store.dispatch({ type: "signUp", userSignUp });
    // },
    // logout() {
    //   userService.logout().then(() => (this.loggedinUser = null));
    // },
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>