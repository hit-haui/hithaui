import type { FetchOptions } from 'ohmyfetch'
import { $fetch } from 'ohmyfetch'

export default defineNuxtPlugin((nuxtApp) => {
  const { apiBaseUrl } = nuxtApp.$config.public

  const apiFetcher = $fetch.create({
    baseURL: apiBaseUrl,
  } as FetchOptions)

  return {
    provide: {
      api: apiFetcher,
    },
  }
})
