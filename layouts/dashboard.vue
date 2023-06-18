<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import HITLogo from '~/assets/images/logoHIT.png'

const isSidebarCollapsed = ref(false)
function handleToggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const authStore = useAuthStore()
const { username } = storeToRefs(authStore)
await authStore.getUser()
</script>

<template>
  <div class="dashboard-layout">
    <aside class="sidebar">
      <div class="app-info">
        <img class="logo" :src="HITLogo" alt="HIT logo">
        <h1 v-if="!isSidebarCollapsed" class="name">
          HIT HAUI
        </h1>
      </div>
    </aside>
    <main class="main-content">
      <header class="header">
        <div class="sidebar-toggle" @click="handleToggleSidebar">
          <Icon name="uil:align" size="30" />
        </div>
        <div class="user-card">
          <div class="avatar" />
          <h4 class="username">
            {{ username }}
          </h4>
        </div>
      </header>
      <div class="content">
        <slot />
      </div>
      <footer class="footer">
        <p class="text">
          @HITHAUI
        </p>
        <div class="social-icons">
          <Icon name="uil:github" />
          <Icon name="uil:facebook" />
        </div>
      </footer>
    </main>
  </div>
</template>

<style scoped lang="scss">
.dashboard-layout {
  display: flex;
  width: 100%;

  >.sidebar {
    height: 100vh;
  }

  >.sidebar>.app-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
  }

  >.sidebar>.app-info>.logo {
    display: block;
    width: 50px;
  }

  >.sidebar>.app-info>.name {
    font-size: 20px;
    color: $primary-color;
  }

  >.main-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  >.main-content>.header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  >.main-content>.header>.sidebar-toggle {
    cursor: pointer;
  }

  >.main-content>.header>.user-card {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  >.main-content>.header>.user-card>.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: $primary-color;
  }

  >.main-content>.content {
    background-color: #e8e8e8;
    flex-grow: 1;
  }

  >.main-content>.footer {
    display: flex;
    justify-content: space-between;
    padding: 16px;
  }

  >.main-content>.footer>.social-icons {
    display: flex;
    gap: 8px;
  }
}
</style>
