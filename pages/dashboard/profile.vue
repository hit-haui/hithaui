<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>

<template>
  <div class="user-profile-page">
    <div class="header">
      <h1 class="title">
        User settings
      </h1>
    </div>
    <div class="profile-details">
      <ProfileUserAvatar class="user-avatar" :avatar="user?.avatar" />
      <ProfileUserSocialList class="social-list" />
    </div>
    <ProfileUserGeneralInfo class="general-info" />
  </div>
</template>

<style scoped lang="scss">
.user-profile-page {
  @apply grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 mt-14;

  > .header {
    @apply mb-4 col-span-full xl:mb-2;

    > .title {
      @apply text-xl font-semibold text-gray-900 sm:text-2xl;
    }
  }

  > .profile-details {
    @apply col-span-full xl:col-auto;

    > .user-avatar,
    > .social-list {
      @apply p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6;
    }
  }

  > .general-info {
    @apply col-span-2 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6;
  }
}
</style>
