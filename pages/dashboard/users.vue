<script setup lang="ts">
import { useUsersStore } from '~/stores/users'
import defaultUserAvatar from '~/assets/images/hit12.jpeg'

const usersStore = useUsersStore()
const { users } = storeToRefs(usersStore)

onMounted(async () => {
  await usersStore.fetchUsers()
})

const { userTableColumns } = useUsers()
</script>

<template>
  <div class="users-management-page">
    <div class="content">
      <table class="table">
        <caption
          class="caption"
        >
          Our HITers
          <p class="sub">
            List of members of the great HIT family through generations until
            now!
          </p>
        </caption>
        <thead class="head">
          <tr class="row">
            <th class="checkbox-head">
              <div class="checkbox">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="input"
                >
              </div>
            </th>
            <template v-for="column in userTableColumns" :key="column.value">
              <th
                class="head"
                :class="{ '-action': column.value === 'action' }"
              >
                {{ column.label }}
              </th>
            </template>
          </tr>
        </thead>
        <tbody class="body">
          <tr
            v-for="user in users"
            :key="user.id"
            class="row"
          >
            <td class="cell-checkbox">
              <div class="checkbox">
                <input
                  type="checkbox"
                  class="input"
                >
              </div>
            </td>
            <th
              class="cell -info"
            >
              <img
                class="avatar"
                :src="defaultUserAvatar"
                :alt="user.name || 'HITer avatar'"
              >
              <div class="text">
                <div class="name">
                  {{ user.name }}
                </div>
                <div class="email">
                  {{ user.email }}
                </div>
              </div>
            </th>
            <td class="cell">
              {{ user.studentCode }}
            </td>
            <td class="cell">
              Member
            </td>
            <td class="cell">
              HIT {{ `${user.generation}` }}
            </td>
            <td class="cell -action">
              <Icon
                size="15"
                name="uil:eye"
                class="text-blue-500 cursor-pointer"
              />
              |
              <Icon
                size="15"
                name="uil:edit"
                class="text-amber-500 cursor-pointer"
              />
              |
              <Icon
                size="15"
                name="uil:trash"
                class="text-red-500 cursor-pointer"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.users-management-page {
  @apply p-4 mt-14 rounded-lg;

  > .content {
    @apply relative overflow-x-auto shadow-md sm:rounded-lg;
  }

  > .content > .table {
    @apply w-full text-sm text-left text-gray-500 relative
  }

  > .content > .table > .caption {
    @apply p-5 text-lg font-semibold text-left text-gray-900 bg-gray-50;

    > .sub {
      @apply mt-1 text-sm font-normal text-gray-500
    }
  }

  > .content > .table > .head {
    @apply text-xs text-gray-700 uppercase bg-gray-50
  }

  > .content > .table > .head > .row > .checkbox-head {
    @apply p-4;

    > .checkbox {
      @apply flex items-center;
    }

    > .checkbox > .input {
      @apply w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded;
    }
  }

  > .content > .table > .head > .row > .head {
    @apply px-6 py-3;
  }

  > .content > .table > .head > .row > .head.-action {
    @apply text-right
  }

  > .content > .table > .body > .row {
    @apply bg-white border-b hover:bg-gray-50
  }

  > .content > .table > .body > .row > .cell-checkbox {
    @apply w-4 p-4;

    > .checkbox {
      @apply flex items-center;
    }

    > .checkbox > .input {
      @apply w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded;
    }
  }

  > .content > .table > .body > .row > .cell {
    @apply px-6 py-4
  }

  > .content > .table > .body > .row > .cell.-info {
    @apply flex items-center text-gray-900 whitespace-nowrap;

    > .avatar {
      @apply w-10 h-10 rounded-full;
    }

    > .text {
      @apply ml-4
    }

    > .text > .name {
      @apply text-base font-semibold;
    }

    > .text > .email {
      @apply font-normal text-gray-500
    }
  }

  > .content > .table > .body > .row > .cell.-action {
    @apply text-right gap-2;
  }
}
</style>
