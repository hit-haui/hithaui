<script setup lang="ts">
import type { User } from 'types'
import { useUsersStore } from '~/stores/users'
import defaultUserAvatar from '~/assets/images/hit12.jpeg'

const usersStore = useUsersStore()
const { users } = storeToRefs(usersStore)

onMounted(async () => {
  await usersStore.fetchUsers()
})

const { userTableColumns } = useUsers()

const searchUserInput = ref('')
const filteredUsers = ref<User[]>()

watch(
  [searchUserInput, users],
  () => {
    if (!searchUserInput.value) {
      filteredUsers.value = users.value
    }
    else {
      filteredUsers.value = users.value.filter((user) => {
        return Object.values(user).some((value) => {
          return String(value)
            .toLowerCase()
            .includes(searchUserInput.value.toLowerCase())
        })
      })
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="users-management-page">
    <div class="content">
      <div class="header">
        <h2 class="title">
          Our HITers
        </h2>
        <p class="description">
          List of members of the great HIT family through generations until now!
        </p>
      </div>
      <div class="toolbar">
        <div />
        <div class="search-input">
          <div
            class="search-icon"
          >
            <Icon name="uil:search" class="icon" />
          </div>
          <input
            v-model="searchUserInput"
            type="text"
            class="input"
            placeholder="Search for users"
          >
        </div>
      </div>
      <table class="table">
        <thead class="head">
          <tr class="row">
            <th class="checkbox-head">
              <div class="checkbox">
                <input id="checkbox-all-search" type="checkbox" class="input">
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
          <template v-if="filteredUsers?.length">
            <tr
              v-for="user in filteredUsers"
              :key="user.id"
              class="row"
            >
              <td class="cell-checkbox">
                <div class="checkbox">
                  <input type="checkbox" class="input">
                </div>
              </td>
              <th class="cell -info">
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
          </template>

          <tr v-else class="row w-full">
            <td />
            <p class="p-4 w-full">
              No data matching!
            </p>
          </tr>
        </tbody>
      </table>
      <div class="footer">
        <div class="content">
          <span class="showing">Showing
            <span class="label"> {{ filteredUsers?.length || 0 }}</span> of
            <span class="value">{{ users.length }}</span>
          </span>
          <p class="total">
            <span class="label">Total users: </span>
            <span class="value">{{ users.length }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.users-management-page {
  @apply p-4 mt-14 rounded-lg;

  > .content {
    @apply relative overflow-x-auto shadow-md sm:rounded-lg;
  }

  > .content > .header {
    @apply p-4;
  }

  > .content > .header > .title {
    @apply text-lg font-semibold text-left text-gray-900;
  }

  > .content > .header > .description {
    @apply mt-1 text-sm font-normal text-gray-500;
  }

  > .content > .toolbar {
    @apply flex items-center justify-between pb-4 bg-white p-4;
  }

  > .content > .toolbar > .search-input {
    @apply relative;
  }

  > .content > .toolbar > .search-input > .search-icon {
    @apply absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none;

    > .icon {
      @apply w-4 h-4 text-gray-500;
    }
  }

  > .content > .toolbar > .search-input > .input {
    @apply block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-orange-500 focus:border-orange-500 focus:outline-orange-500;
  }

  > .content > .table {
    @apply w-full text-sm text-left text-gray-500 relative;
  }

  > .content > .table > .head {
    @apply text-xs text-gray-700 uppercase bg-gray-50;
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
    @apply text-right;
  }

  > .content > .table > .body > .row {
    @apply bg-white border-b hover:bg-gray-50;
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
    @apply px-6 py-4;
  }

  > .content > .table > .body > .row > .cell.-info {
    @apply flex items-center text-gray-900 whitespace-nowrap;

    > .avatar {
      @apply w-10 h-10 rounded-full;
    }

    > .text {
      @apply ml-4;
    }

    > .text > .name {
      @apply text-base font-semibold;
    }

    > .text > .email {
      @apply font-normal text-gray-500;
    }
  }

  > .content > .table > .body > .row > .cell.-action {
    @apply text-right gap-2;
  }

  > .content > .footer {
    @apply relative overflow-hidden bg-white rounded-b-lg shadow-md;

    > .content {
      @apply flex flex-row items-center justify-between p-4;
    }

    > .content > .total {
      @apply text-sm;
    }

    > .content > .total > .label {
      @apply font-normal text-gray-500;
    }

    > .content > .total > .value {
      @apply font-normal text-gray-900;
    }

    > .content > .showing {
      @apply text-sm font-normal text-gray-500;
    }

    > .content > .showing > .label {
      @apply font-semibold text-gray-900;
    }
    > .content > .showing > .value {
      @apply font-normal text-gray-900;
    }
  }
}
</style>
