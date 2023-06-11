<script setup>
import { reactive } from 'vue'
const props = defineProps({
  generationNumber: {
    type: Number
  }
})
const emit = defineEmits('login')

const userCredential = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  if (!userCredential.username || !userCredential.password) {
    return
  }

  emit('login', userCredential)
}
</script>
<template>
  <section class="login-section">
    <h2 class="title">Login to HIT {{ generationNumber }}</h2>
    <form class="login-form">
      <div class="form-item">
        <label class="label" for="username">Username</label>
        <input v-model="userCredential.username" type="text" class="input" id="username" />
      </div>
      <div class="form-item">
        <label class="label" for="password">Password</label>
        <input type="password" v-model="userCredential.password" class="input" id="password" />
      </div>
      <button type="button" class="login-button" @click="handleLogin">Login</button>
    </form>
  </section>
</template>
<style scoped>
.login-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-section > .login-form > .login-button {
  background-color: orange;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  color: #ffffff;
}

.login-section > .login-form {
  min-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.login-section > .login-form > .form-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.login-section > .login-form > .form-item > .label {
  text-align: left;
}
.login-section > .login-form > .form-item > .input {
  padding: 8px;
}
</style>
