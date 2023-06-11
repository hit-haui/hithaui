<script setup>
import hitLogo from './assets/hit-logo.jpeg'
import { ref, computed, reactive } from 'vue'
import HITLogin from './components/HITLogin.vue'

const generationNumber = ref(13)

const isLoggedIn = ref(true)
const handleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value
}

const navigationLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    path: '/'
  },
  {
    id: 3,
    name: 'Blog',
    path: '/'
  },
  {
    id: 4,
    name: 'Courses',
    path: '/'
  },
  {
    id: 5,
    name: 'Contests',
    path: '/'
  },
  {
    id: 6,
    name: 'Contact',
    path: '/'
  }
]

const authUser = reactive({
  name: 'Dương',
  nickName: 'duo'
})

const username = computed(() => {
  return `${authUser.name} (${authUser.nickName})`
})
</script>

<template>
  <div class="app-component">
    <header class="header">
      <div class="brand">
        <img class="logo" :src="hitLogo" alt="HIT CLUB LOGO 13" />
        <h1 class="title">HIT</h1>
      </div>
      <div class="navigation-bar">
        <a class="link" v-for="link in navigationLinks" :href="link.path" :key="link.id">
          {{ link.name }}</a
        >
      </div>
      <div v-if="isLoggedIn" class="user-info">
        <div class="avatar"></div>
        <h4 class="username">{{ username }}</h4>
      </div>
      <div v-else class="user-actions">
        <button type="button" class="login-button">Login</button>
      </div>
    </header>
    <main class="main-content">
      <HITLogin :generation-number="generationNumber" @login="handleLogin" />
    </main>
  </div>
</template>

<style scoped>
.app-component > .header {
  padding: 0 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid orange;
}
.app-component > .header > .brand {
  display: flex;
  align-items: center;
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

.app-component > .header > .navigation-bar {
  flex-grow: 1;
  display: flex;
  gap: 32px;
  justify-content: center;
}
.app-component > .header > .navigation-bar > .link {
  text-decoration: none;
  color: #333333;
  font-weight: 600;
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
  width: 20%;
}

.app-component > .header > .user-info > .avatar {
  background-color: orange;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.app-component > .main-content {
  padding: 32px;
}
</style>
