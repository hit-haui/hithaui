<script setup>
import hitLogo from "@/assets/hit-logo.jpeg";
import { ref } from "vue";

const isLoggedIn = ref(false);
const username = ref("Duo");

const navigationLinks = [
  {
    id: 1,
    name: "Home",
    path: "home",
  },
  {
    id: 2,
    name: "About",
    path: "about",
  },
  {
    id: 3,
    name: "Blog",
    path: "blog",
  },
  {
    id: 4,
    name: "Contact",
    path: "contact",
  },
  {
    id: 4,
    name: "Courses",
    path: "courses",
  },
  {
    id: 4,
    name: "OLP",
    path: "olp",
  },
];

const handleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};
</script>
<template>
  <div class="home-page">
    <header class="header">
      <div class="brand">
        <img class="logo" :src="hitLogo" alt="HIT CLUB LOGO" />
        <h1 class="title">HIT CLUB</h1>
      </div>
      <div class="navigation-bar">
        <a
          class="link"
          v-for="link in navigationLinks"
          :href="link.path"
          :key="link.id"
          >{{ link.name }}</a
        >
      </div>
      <div v-if="isLoggedIn" class="user-info">
        <div class="avatar"></div>
        <h3 class="name">{{ username }}</h3>
      </div>
      <div v-else class="user-actions">
        <button type="button" class="login">Login</button>
      </div>
    </header>
    <main class="main-content">
      <section class="login-section">
        <button class="login-button" type="button" @click="handleLogin">
          Login
        </button>
      </section>
    </main>
  </div>
</template>
<style>
.home-page > .header {
  padding: 0 32px;
  border-bottom: 1px solid orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
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

.home-page > .header > .navigation-bar {
  flex-grow: 1;
  display: flex;
  gap: 48px;
  justify-content: center;
}

.home-page > .header > .navigation-bar > .link {
  color: #333;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
}

.home-page > .header > .user-info {
  width: 15%;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  justify-content: flex-end;
}

.home-page > .header > .user-info > .avatar {
  height: 50px;
  width: 50px;
  background-color: orange;
  border-radius: 50%;
}

.home-page > .header > .user-actions {
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: end;
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

.home-page > .main-content {
  padding: 32px;
}

.home-page > .main-content > .login-section {
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
