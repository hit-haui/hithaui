<script setup lang="ts">
import HITLogo from '~/assets/images/logoHIT.png'

const isSidebarCollapsed = ref(false)
function handleToggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
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
  > .sidebar {
    height: 100vh;
  }
  > .sidebar  > .app-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
  }

  > .sidebar > .app-info > .logo {
    display: block;
    width: 50px;
  }
  > .sidebar > .app-info > .name {
    font-size: 20px;
    color: $primary-color;
  }
  > .main-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
  > .main-content > .header {
    padding: 16px;
  }
  > .main-content > .header > .sidebar-toggle {
    cursor: pointer;
  }
  > .main-content > .content {
    background-color: #e8e8e8;
    flex-grow: 1;
  }
  > .main-content > .footer {
    display: flex;
    justify-content: space-between;
    padding: 16px;
  }
  > .main-content > .footer > .social-icons {
    display: flex;
    gap: 8px;
  }
}
</style>
