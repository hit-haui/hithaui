<script setup>
import hitLogo from './assets/hit-logo.jpeg'

const isLoggedIn = true
</script>

<template>
  <div class="app-component">
    <header class="header">
      <div class="brand">
        <img class="logo" :src="hitLogo" alt="HIT CLUB LOGO 13" />
        <h1 class="title">HIT</h1>
      </div>
      <div v-if="isLoggedIn" class="user-info">
        <div class="avatar"></div>
        <h4 class="username">Duo</h4>
      </div>
      <div v-else class="user-actions">
        <button type="button" class="login-button">Login</button>
      </div>
    </header>
  </div>
</template>

<style scoped>
.app-component > .header {
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid orange;
}
.app-component > .header > .brand {
  display: flex;
  align-items: center;
  gap: 16px;
}
.app-component > .header > .brand > .logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.app-component > .header > .brand > .title {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: orange;
  margin: 8px;
}

.app-component > .header > .user-actions {
  width: 10%;
}

.app-component > .header > .user-actions > .login-button {
  background-color: orange;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  color: #ffffff;
}

.app-component > .header > .user-info {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  width: 10%;
}

.app-component > .header > .user-info > .avatar {
  background-color: orange;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
