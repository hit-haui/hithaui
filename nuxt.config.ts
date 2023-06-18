// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@pinia/nuxt'],
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/utils/_variables.scss" as *;',
        },
      },
    },
  },
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs',
    ],
  },
})
