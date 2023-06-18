import { $fetch } from 'ohmyfetch'

export const useAuthStore = defineStore('auth', () => {
  const login = async (userCredentials: any) => {
    const response = await $fetch('http://localhost:8000/api/v1/auth/sign-in', {
      method: 'POST',
      body: userCredentials,
    })

    if (response) {
      localStorage.setItem('accessToken', response.accessToken)
      return navigateTo('/dashboard')
    }
  }

  return { login }
})
