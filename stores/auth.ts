import type { LoginResponse, User, UserCredentials } from '~/types'

export const useAuthStore = defineStore('auth', () => {
  const { $api } = useNuxtApp()
  const user = ref<User>()

  const login = async (userCredentials: UserCredentials) => {
    const response = await $api<LoginResponse>('/api/v1/auth/sign-in', {
      method: 'POST',
      body: userCredentials,
    })

    if (response) {
      localStorage.setItem('accessToken', response.accessToken)
      return navigateTo('/dashboard')
    }
  }

  const getUser = async () => {
    const authUser = await $api<User>('/api/v1/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })

    user.value = authUser
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    user.value = undefined
  }

  const isAuthenticated = computed(() => !!user.value)

  return { login, getUser, logout, user, isAuthenticated }
})
