<script setup lang="ts">

</script>

<template>
  <div class="courses-management-page">
    <header class="header">
      <h2 class="title">
        Ours Courses
      </h2>
    </header>
    <div class="speed-dial">
      <CoursesSpeedDial />
    </div>
    <div class="courses" />
    <div class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.courses-management-page {

  .header {
    @apply p-4;
  }

  .header > .title {
    @apply text-lg font-semibold text-left text-gray-900;
  }

  .header > .description {
    @apply mt-1 text-sm font-normal text-gray-500;
  }
}
</style>
