<script setup>
import { ref } from "vue";

const props = defineProps({
  clubTitle: {
    type: String,
  },
});

const username = ref("Duo");
</script>
<template>
  <section class="login-section">
    <h2 class="title">Login to {{ clubTitle }}</h2>
    <button
      class="login-button"
      type="button"
      @click="$emit('login', username)"
    >
      Login
    </button>
  </section>
</template>

<style>
.login-section {
  text-align: center;
}

.home-page > .main-content > .login-section > .title {
  font-size: 30px;
}

.home-page > .main-content > .login-section > .login-button {
  padding: 8px 16px;
  cursor: pointer;
  background-color: orange;
  outline: none;
  border: none;
  transition: ease-in 0.5s;
  border-radius: 8px;
}
</style>
