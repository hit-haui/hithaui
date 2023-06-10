<script setup>
import hitLogo from "@/assets/hit-logo.jpeg";
import { ref } from "vue";

const isLoggedIn = ref(false);
const username = ref("Duo");
</script>
<template>
  <div class="home-page">
    <header class="header">
      <div class="brand">
        <img class="logo" :src="hitLogo" alt="HIT CLUB LOGO" />
        <h1 class="title">HIT CLUB</h1>
      </div>
      <div v-if="isLoggedIn" class="user-info">
        <div class="avatar"></div>
        <h3 class="name">{{ username }}</h3>
      </div>
      <div v-else class="user-actions">
        <button type="button" class="login">Login</button>
      </div>
    </header>
  </div>
</template>
<style>
.home-page > .header {
  padding: 0 32px;
  border-bottom: 1px solid orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-page > .header > .brand {
  display: flex;
  align-items: center;
}

.home-page > .header > .brand > .title {
  font-weight: 600;
  margin-left: 8px;
  color: orange;
}

.home-page > .header > .brand > .logo {
  width: 50px;
  height: 50px;
}

.home-page > .header > .user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.home-page > .header > .user-info > .avatar {
  height: 50px;
  width: 50px;
  background-color: orange;
  border-radius: 50%;
}

.home-page > .header > .user-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.home-page > .header > .user-actions > .login {
  padding: 8px 16px;
  cursor: pointer;
  background-color: orange;
  outline: none;
  border: none;
  transition: ease-in 0.5s;
  border-radius: 8px;
}

.home-page > .header > .user-actions > .login:hover {
  background-color: rgb(247, 198, 106);
}
</style>
