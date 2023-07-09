<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useNotificationStore } from '~/stores/notifications'

const isSidebarExpanded = ref(true)
function handleToggleSidebar() {
  isSidebarExpanded.value = !isSidebarExpanded.value
}

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
onMounted(async () => {
  await authStore.getUser()
})

function handleLogout() {
  authStore.logout()
}

const notificationStore = useNotificationStore()
const { notifications } = storeToRefs(notificationStore)
</script>

<template>
  <div class="dashboard-layout">
    <LayoutDashboardNavbar :user="user" @logout="handleLogout" />
    <LayoutDashboardSidebar />
    <main class="main-content">
      <div class="slot-content">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.dashboard-layout {
  > .main-content {
    @apply p-4 sm:ml-64;
  }
}
</style>
