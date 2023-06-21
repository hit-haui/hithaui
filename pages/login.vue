<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import hit12Logo from '~/assets/images/hit12.jpeg'

definePageMeta({
  layout: 'blank',
})

const authStore = useAuthStore()

const userCredentials = reactive({
  email: '',
  password: '',
})

const isInvalidLoginForm = computed(
  () => !userCredentials.email || !userCredentials.password,
)

async function handleLogin() {
  if (isInvalidLoginForm.value)
    return

  await authStore.login(userCredentials)
}
</script>

<template>
  <div class="login-page">
    <img :src="hit12Logo" alt="" class="cover">
    <form class="form">
      <h2 class="title">
        HIT CLUB
      </h2>
      <AppInput
        v-model="userCredentials.email"
        placeholder="Email"
        label="Email"
      />
      <AppInput
        v-model="userCredentials.password"
        placeholder="Password"
        label="Password"
        type="password"
      />
      <AppButton label="Login" block @click="handleLogin" />
    </form>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;

  > .cover {
    width: 40%;
  }

  > .form {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 30%;
  }

  .form > .title {
    font-size: 36px;
    font-weight: bold;
    color: $primary-color;
    margin-bottom: 20px;
  }
}
</style>
