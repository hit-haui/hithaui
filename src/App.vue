<script setup>
import hitLogo from './assets/hit-logo.jpeg'
</script>

<template>
  <div class="app-component">
    <header class="header">
      <div class="brand">
        <img class="logo" :src="hitLogo" alt="HIT CLUB LOGO 13" />
        <h1 class="title">HIT</h1>
      </div>
    </header>
  </div>
</template>

<style scoped>
.app-component > .header {
  padding: 0 16px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid orange;
}
.app-component > .header > .brand {
  display: flex;
  align-items: center;
  gap: 16px;
}
.app-component > .header > .brand > .logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.app-component > .header > .brand > .title {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: orange;
}
</style>
