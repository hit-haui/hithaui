<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
onMounted(async () => {
  await authStore.getUser()
})

function handleLogout() {
  authStore.logout()
}
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
