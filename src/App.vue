<script setup>
import hitLogo from "@/assets/hit-logo.jpeg";
</script>
<template>
  <div class="home-page">
    <header class="header">
      <div class="brand">
        <img class="logo" :src="hitLogo" alt="HIT CLUB LOGO" />
        <h1 class="title">HIT CLUB</h1>
      </div>
    </header>
  </div>
</template>
<style>
.home-page > .header {
  text-align: center;
  padding: 0 32px;
  border-bottom: 1px solid #333;
}

.home-page > .header > .brand {
  display: flex;
  align-items: center;
}

.home-page > .header > .brand > .title {
  font-weight: 600;
  margin-left: 8px;
}

.home-page > .header > .brand > .logo {
  width: 50px;
  height: 50px;
}
</style>
