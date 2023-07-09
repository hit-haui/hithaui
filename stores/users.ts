import { useAuthStore } from '~/stores/auth'
import type { User } from '~/types'

export const useUsersStore = defineStore('users', () => {
  const { $api } = useNuxtApp()
  const users = ref<User[]>([])

  const authStore = useAuthStore()
  const { accessToken } = storeToRefs(authStore)

  const fetchUsers = async () => {
    const response = await $api<User[]>('/api/v1/users', {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    })

    users.value = response
  }

  const filterUsersByGeneration = (generation: number) => {
    return users.value.filter(
      user => user.generation === generation,
    )
  }

  return { users, fetchUsers, filterUsersByGeneration }
})
