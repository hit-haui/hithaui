<script setup lang="ts">
const isOpenSpeedDial = ref(false)
const showSpeedDial = () => (isOpenSpeedDial.value = true)
const hideSpeedDial = () => (isOpenSpeedDial.value = false)
</script>

<template>
  <div
    class="speed-dial"
    @mouseleave="hideSpeedDial"
    @mouseover="showSpeedDial"
  >
    <div v-if="isOpenSpeedDial" class="menu-actions">
      <button type="button" class="action-item">
        <Icon name="uil:share-alt" class="icon" />
        <span class="label">Share</span>
      </button>
      <button type="button" class="action-item">
        <Icon name="uil:print" class="icon" />
        <span class="label">Print</span>
      </button>
      <button type="button" class="action-item">
        <Icon name="uil:download-alt" class="icon" />
        <span class="label">Save</span>
      </button>
      <button type="button" class="action-item">
        <Icon name="uil:plus" class="icon" />
        <span class="label">New</span>
      </button>
    </div>
    <button type="button" class="control-button">
      <Icon name="uil:plus" class="icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.speed-dial {
  @apply fixed bottom-6 right-6;

  &:hover > .control-button > .icon {
    @apply rotate-45;
  }

  > .control-button {
    @apply flex items-center justify-center text-white bg-primary-500 rounded-full w-14 h-14 hover:bg-primary-600;

    > .icon {
      @apply w-8 h-8 transition-transform;
    }
  }

  > .menu-actions {
    @apply flex flex-col items-center mb-4 space-y-2;

    > .action-item {
      @apply w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none;
    }

    > .action-item > .icon {
      @apply w-4 h-4 mx-auto mb-1;
    }

    > .action-item > .label {
      @apply block mb-px text-xs font-medium;
    }
  }
}
</style>
