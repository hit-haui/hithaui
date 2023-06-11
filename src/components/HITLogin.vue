<script setup>
const props = defineProps({
  generationNumber: {
    type: Number
  }
})
const emit = defineEmits('login')
</script>
<template>
  <section class="login-section">
    <h2 class="title">Login to HIT {{ generationNumber }}</h2>
    <button class="login-button" @click="emit('login')">Login</button>
  </section>
</template>
<style scoped>
.login-section {
  text-align: center;
}

.login-section > .login-button {
  background-color: orange;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  color: #ffffff;
}
</style>
