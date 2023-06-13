<script setup>
import { computed, reactive, ref } from 'vue'
import HITLogin from './components/HITLogin.vue';
import hitLogo from './assets/hit-logo.jpg'
import avatarLogo from './assets/avatar.jpg'


const navigationLinks = [
  {
    id: 1,
    path: '/',
    name: 'Home',
  },
  {
    id: 2,
    path: '/about',
    name: 'About',
  },
  {
    id: 3,
    path: '/blog',
    name: 'Blog',
  },
  {
    id: 4,
    path: '/course',
    name: 'Course',
  },
  {
    id: 5,
    path: '/contest',
    name: 'Contest',
  },
  {
    id: 6,
    path: '/contact',
    name: 'Contact',
  }
]

const isLoggedIn = ref(true)
const handleLogin = () => isLoggedIn.value = !isLoggedIn.value

const authUser = reactive({
  username: 'Dung Nguyen',
  nickname: 'vandungday'
})

const username = computed(() => `${authUser.username} (${authUser.nickname})`)

const initNumber = ref(13)

</script>

<template>
  <div class="app-component">
    <header class="header">
      <div class="brand">
        <img :src="hitLogo" alt="" class="logo">
        <h1 class="title">HIT CLUB </h1>
      </div>

      <div class="nav-bar">
        <a class="link" v-for="link in navigationLinks" :href="link.path">{{ link.name }}</a>
      </div>

      <div v-if="isLoggedIn" class="user-info">
        <img :src="avatarLogo" alt="" class="avatar">
        <h4 class="username">{{ username }}</h4>
      </div>

      <div v-else class="user-actions">
        <button type="button" class="login-button">Login</button>
      </div>

    </header>

    <div class="main">
      <HITLogin :init-number="initNumber" @login="handleLogin" />
    </div>
  </div>
</template>

<style scoped>
.app-component>.header {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid orange;
  align-items: center;
}

.app-component>.header>.brand {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.app-component>.header>.brand>.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.app-component>.header>.brand>.title {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: orange;
}

.app-component>.header>.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 150px;
}

.app-component>.header>.user-actions {
  min-width: 150px;
  display: flex;
  justify-content: flex-end;
}

.app-component>.header>.user-actions>.login-button {
  background-color: orange;
  border: 1px solid #cccccc;
  padding: 8px 16px;
  border-radius: 5px;
}


.app-component>.header>.user-info>.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #cccccc;
}

.app-component>.header>.nav-bar {
  display: inline-block;
}

.app-component>.header>.nav-bar>.link {
  text-decoration: none;
  padding: 8px 16px;
  color: orange;
  font-size: 16px;
  font-weight: 600;
}
</style>

