<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import HITLogo from '~/assets/images/logoHIT.png'
import { useNotificationStore } from '~/stores/notifications'

const isSidebarExpanded = ref(true)
function handleToggleSidebar() {
  isSidebarExpanded.value = !isSidebarExpanded.value
}

const authStore = useAuthStore()
const { username } = storeToRefs(authStore)
onMounted(async () => {
  await authStore.getUser()
})

const routes = [
  {
    label: 'Users',
    icon: 'uil:users-alt',
    path: '/dashboard/users',
    iconColor: 'red',
  },
  {
    label: 'Events',
    icon: 'uil:calendar-alt',
    path: '/dashboard/events',
    iconColor: 'green',
  },
  {
    label: 'Courses',
    icon: 'uil:folder-medical',
    path: '/dashboard/events',
    iconColor: 'orange',
  },
]

function handleLogout() {
  authStore.logout()
  navigateTo('/login')
}

const notificationStore = useNotificationStore()
const { notifications } = storeToRefs(notificationStore)
</script>

<template>
  <div class="dashboard-layout">
    <aside class="sidebar">
      <div class="app-info">
        <img class="logo" :src="HITLogo" alt="HIT logo">
        <h1 v-if="isSidebarExpanded" class="name">
          HIT HAUI
        </h1>
      </div>
      <div class="dashboard-routes">
        <NuxtLink v-for="route in routes" :key="route.path" class="link" :to="route.path">
          <Icon class="icon" size="30" :name="route.icon" :color="route.iconColor" />
          <span v-if="isSidebarExpanded" class="label">{{ route.label }}</span>
        </NuxtLink>
      </div>
    </aside>
    <main class="main-content">
      <header class="header">
        <div class="sidebar-toggle" @click="handleToggleSidebar">
          <Icon name="uil:align" size="30" />
        </div>
        <div class="user-card">
          <div class="avatar" />
          <div class="user-info">
            <h4 class="username">
              {{ username }}
            </h4>
            <AppButton size="sm" class="logout" variant="link" @click="handleLogout">
              Logout
            </AppButton>
          </div>
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
          <Icon name="uil:github" size="30" />
          <Icon name="uil:facebook" size="30" color="#4267B2" />
        </div>
      </footer>
    </main>
  </div>
</template>

<style scoped lang="scss">
.dashboard-layout {
  display: flex;
  width: 100%;
  position: relative;

  >.sidebar {
    height: 100vh;
    padding: 16px 32px;
  }

  >.sidebar>.app-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
  }

  >.sidebar>.app-info>.logo {
    display: block;
    width: 50px;
  }

  >.sidebar>.app-info>.name {
    font-size: 30px;
    color: $primary-color;
  }

  >.sidebar>.dashboard-routes {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: flex-start;
  }

  >.sidebar>.dashboard-routes>.link {
    padding: 16px 0;
    display: flex;
    gap: 16px;
    align-items: center;
    text-decoration: none;
    color: $dark-color;
    font-weight: 600;
  }

  >.sidebar>.dashboard-routes>.link>.label {
    text-decoration: none;
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

  >.main-content>.header>.user-card>.user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 8px;
  }

  >.main-content>.header>.user-card>.user-info>.logout {
    padding: 0;
  }

  >.main-content>.content {
    background-color: #e8e8e8;
    flex-grow: 1;
  }

  >.main-content>.footer {
    display: flex;
    justify-content: space-between;
    padding: 32px 16px;
    align-items: center;
  }

  >.main-content>.footer>.social-icons {
    display: flex;
    gap: 8px;
  }
}
</style>
