<script setup>
import hitLogo from './assets/hit-logo.jpg'
</script>

<template>
  <div class="app-component">
    <header class="header">
      <div class="brand">
        <img :src="hitLogo" alt="" class="logo">
        <h1 class="title">HIT CLUB </h1>
      </div>
    </header>
  </div>
</template>

<style scoped>
.app-component>.header {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid orange;
}

.app-component>.header>.brand {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.app-component>.header>.brand>.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.app-component>.header>.brand>.title {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: orange;
}
</style>

