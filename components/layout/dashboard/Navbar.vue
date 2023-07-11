<script setup lang="ts">
import type { User } from 'types'
import { useAuthStore } from '~/stores/auth'
import hit12Avatar from '~/assets/images/hit12.jpeg'

defineProps<{
  user: User
}>()

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const isShowUserDropdown = ref(false)
const openUserDropdown = () => (isShowUserDropdown.value = true)
const closeUserDropdown = () => (isShowUserDropdown.value = false)

const userCardRef = ref()
onClickOutside(userCardRef, closeUserDropdown)
</script>

<template>
  <nav class="navbar">
    <div class="content-wrapper">
      <div class="brand">
        <NuxtLink href="https://hithaui.com" class="app-info">
          <img
            src="~/assets/images/logoHIT.png"
            class="logo"
            alt="HIT CLUB Logo"
          >
        </NuxtLink>
        <h1 class="title">
          HIT CLUB
        </h1>
      </div>
      <div ref="userCardRef" class="user-card relative">
        <button type="button" class="avatar-button" @click="openUserDropdown">
          <img
            class="w-10 h-10 rounded-full"
            :src="user?.avatar || hit12Avatar"
            alt="user photo"
          >
        </button>
        <div v-if="isShowUserDropdown" class="dropdown-user">
          <div class="info">
            <span class="name">{{ user?.name || user?.studentCode }}</span>
            <span class="email">{{ user?.email }}</span>
          </div>
          <ul class="menu">
            <li class="menu-item">
              <NuxtLink to="/dashboard/profile" class="profile" @click="closeUserDropdown">
                Profile
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/login" class="sign-out" @click="$emit('logout')">
                Sign out
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  @apply fixed top-0 z-50 w-full bg-white border-b border-gray-200;

  > .content-wrapper {
    @apply px-3 py-3 lg:px-4 lg:pl-3 flex items-center justify-between;

    > .brand,
    > .user-card {
      @apply flex items-center relative;
    }

    > .brand > .app-info {
      > .logo {
        @apply h-12 mr-3 ml-2;
      }
    }

    > .brand > .title {
      @apply self-center text-3xl font-extrabold whitespace-nowrap text-orange-500;
    }

    > .user-card > .body > .avatar-button {
      @apply flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300;
    }

    > .user-card > .dropdown-user {
      @apply absolute top-full right-[0%] z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow;
    }

    > .user-card > .dropdown-user > .info {
      @apply px-4 py-3;
    }

    > .user-card > .dropdown-user > .info > .name {
      @apply block text-sm text-gray-900;
    }

    > .user-card > .dropdown-user > .info > .email {
      @apply text-sm font-medium text-gray-900 truncate;
    }

    > .user-card > .dropdown-user > .menu > .menu-item > * {
      @apply block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100;
    }
  }
}
</style>
