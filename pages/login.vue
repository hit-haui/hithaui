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

async function handleLogin() {
  await authStore.login(userCredentials)
}
</script>

<template>
  <div class="login-page">
    <form class="login-form">
      <h2 class="title">
        Đăng nhập
      </h2>
      <div class="form-item">
        <label for="email" class="label">Email:</label>
        <input id="email" v-model="userCredentials.email" type="text" placeholder="Email" class="input">
      </div>
      <div class="form-item">
        <label for="password" class="label">Password:</label>
        <input id="password" v-model="userCredentials.password" type="password" placeholder="Password" class="input">
      </div>
      <button type="button" class="login-button" @click="handleLogin">
        Đăng nhập
      </button>
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
  mix-blend-mode: normal;

  .login-form {
    position: relative;
    width: 560px;
    height: 660px;
    background: #FFFFFF;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-form>.logo {
    position: absolute;
    top: -3%;
    left: -1%;
  }

  .login-form>.title {
    font-weight: 700;
    font-size: 36px;
    color: #303030;
    margin-bottom: 20px;
  }

  .login-form>.form-item {
    display: flex;
    flex-direction: column;
  }

  .login-form>.form-item>.label {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .login-form>.form-item>.input {
    width: 380px;
    height: 54px;
    background: #F5F5F5;
    border-radius: 25px;
    border: none;
    margin-bottom: 10px;
    padding-left: 20px;
  }

  .login-form>.login-button {
    margin-top: 20px;
    width: 220px;
    height: 64px;
    background: $primary-color;
    border-radius: 160px;
    border: none;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    cursor: pointer;
  }
}
</style>
