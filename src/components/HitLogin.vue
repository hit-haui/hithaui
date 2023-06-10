<script setup>
import { ref } from "vue";
import hitLogo from "@/assets/hit-logo.jpeg";

const props = defineProps({
  clubTitle: {
    type: String,
  },
});

const emit = defineEmits(["login"]);

const handleLogin = () => {
  if (!username.value || !password.value) {
    return alert("Invalid data");
  }

  emit("login", { username: username.value, password: password.value });
};

const username = ref("");
const password = ref("");
</script>
<template>
  <section class="login-section">
    <h2 class="title">Login to {{ clubTitle }}</h2>
    <div class="content">
      <img class="image-cover" :src="hitLogo" alt="" />
      <form class="form">
        <div class="form-item">
          <label class="label" for="username">Username</label>
          <input class="input" id="username" type="text" v-model="username" />
        </div>
        <div class="form-item">
          <label class="label" for="password">Password</label>
          <input
            class="input"
            id="password"
            type="password"
            v-model="password"
          />
        </div>
        <button class="login-button" type="button" @click="handleLogin">
          Login
        </button>

        <div class="divider">
          <p class="content">Or</p>
        </div>

        <button style="button" class="google-login-button">
          Login with Google
        </button>
      </form>
    </div>
  </section>
</template>

<style>
.login-section {
  text-align: center;
}

.login-section > .title {
  font-size: 30px;
}

.login-section > .content {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-section > .content > .image-cover {
  width: 50%;
}

.login-section > .content > .form {
  padding: 24px;
  align-self: flex-start;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.login-section > .content > .form > .form-item {
  align-self: flex-start;
  justify-self: flex-start;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.login-section > .content > .form > .form-item > .label {
  text-align: left;
  font-weight: 600;
}

.login-section > .content > .form > .form-item > .input {
  padding: 8px;
}

.login-section > .content > .form > .login-button,
.login-section > .content > .form > .google-login-button {
  padding: 8px 16px;
  cursor: pointer;
  background-color: orange;
  outline: none;
  border: none;
  transition: ease-in 0.5s;
  border-radius: 8px;
}

.login-section > .content > .form > .divider {
  margin: 24px 0;
}
</style>
