<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

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
    <form class="login-form">
      <h2 class="title">
        Login to HIT CLUB
      </h2>
      <div class="form-item">
        <label for="email" class="label">Email</label>
        <input
          id="email"
          v-model="userCredentials.email"
          type="text"
          placeholder="Email"
          class="input"
        >
      </div>
      <div class="form-item">
        <label for="password" class="label">Password</label>
        <input
          id="password"
          v-model="userCredentials.password"
          type="password"
          placeholder="Password"
          class="input"
        >
      </div>
      <AppButton class="login-button" block @click="handleLogin">
        Login
      </AppButton>
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

  .login-form {
    position: relative;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .login-form > .logo {
    position: absolute;
    top: -3%;
    left: -1%;
  }

  .login-form > .title {
    font-weight: 700;
    font-size: 36px;
    color: $primary-color;
    margin-bottom: 20px;
  }

  .login-form > .form-item {
    display: flex;
    flex-direction: column;
  }

  .login-form > .form-item > .label {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .login-form > .form-item > .input {
    width: 380px;
    background: #f5f5f5;
    border-radius: 4px;
    border: none;
    margin-bottom: 10px;
    padding: 16px;
  }
}
</style>
