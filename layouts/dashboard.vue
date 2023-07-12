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
        <div class="content">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.dashboard-layout {
  > .main-content {
    @apply p-4 sm:ml-64;

    > .slot-content {
      @apply p-4 mt-14 rounded-lg;
    }

    > .slot-content > .content {
      @apply overflow-x-auto shadow-md sm:rounded-lg;
    }
  }
}
</style>
