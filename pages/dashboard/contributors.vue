<script setup lang="ts">
import { useContributorsStore } from '~/stores/contributors'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboard',
})

const contributorsStore = useContributorsStore()
const { contributors } = storeToRefs(contributorsStore)
await contributorsStore.fetchContributors()
</script>

<template>
  <div class="contributors-page">
    <div class="content">
      <div class="header">
        <h2 class="title">
          Our Contributors
        </h2>
      </div>
      <div class="body">
        <NuxtLink
          v-for="(contributor) in contributors"
          :key="contributor.name"
          :to="contributor.github"
          target="_blank"
          class="card"
        >
          <div

            class="content"
          >
            <div class="body">
              <img
                class="avatar"
                :src="contributor.avatar"
                :alt="contributor.name"
              >
              <h5 class="name">
                {{ contributor.name }}
              </h5>
              <span class="position">Developer</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contributors-page {
  @apply p-4 mt-14 rounded-lg;

  > .content {
    @apply relative overflow-x-auto shadow-md sm:rounded-lg min-h-[83vh];
  }

  > .content > .header {
    @apply p-4;

    > .title {
      @apply text-lg font-semibold text-gray-900;
    }
  }

  > .content > .body {
    @apply p-4
  }

  > .content  > .body {
    @apply flex flex-wrap gap-8 justify-center
  }

  > .content > .body > .card {
    > .content {
      @apply w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg shadow py-8;
    }

    > .content > .body {
      @apply flex flex-col items-center
    }

    > .content > .body > .avatar {
      @apply w-24 h-24 mb-3 rounded-full shadow-lg
    }

    > .content > .body > .name {
      @apply mb-1 text-xl font-medium text-gray-900
    }

    > .body > .position {
      @apply text-sm text-gray-500
    }
  }
}
</style>
