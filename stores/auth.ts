export const useAuthStore = defineStore('auth', () => {
  const { $api } = useNuxtApp()
  const user = ref<any>({
    name: 'HITer',
    email: 'hiter@gmail.com',
  })

  const login = async (userCredentials: any) => {
    const response = await $api('/api/v1/auth/sign-in', {
      method: 'POST',
      body: userCredentials,
    })

    if (response) {
      localStorage.setItem('accessToken', response.accessToken)
      return navigateTo('/dashboard')
    }
  }

  const getUser = async () => {
    const authUser = await $api('/api/v1/auth/me', {
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

  return { login, getUser, logout, user }
})
