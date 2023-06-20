<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    color?: string
    variant?: 'solid' | 'outline' | 'link'
    size?: 'sm' | 'md' | 'lg'
    icon?: string
    disabled?: boolean
    loading?: boolean
    block?: boolean
  }>(),
  {
    label: '',
    variant: 'solid',
    color: 'orange',
    size: 'md',
    disabled: false,
    loading: false,
    block: false,
  },
)
</script>

<template>
  <button
    type="button"
    class="hit-button"
    :class="{
      '-outline': variant === 'outline',
      '-link': variant === 'link',
      '-sm': size === 'sm',
      '-lg': size === 'lg',
      '-disabled': disabled,
      '-block': block,
    }"
  >
    <Icon v-if="icon" :name="icon" />
    <Icon v-if="loading" id="loading-icon" name="uil:spinner-alt" />
    {{ label }}
    <slot />
  </button>
</template>

<style scoped lang="scss">
.hit-button {
  padding: 12px 16px;
  color: $light-color;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background-color: v-bind(color);
  transition: all 0.2s ease-in;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  gap: 8px;

  &:hover {
    filter: brightness(1.1);
  }

  &.-outline {
    border: 2px solid v-bind(color);
    color: v-bind(color);
    background-color: $light-color;
  }

  &.-link {
    color: v-bind(color);
    background-color: $light-color;
  }

  &.-link:hover {
    text-decoration: underline;
    text-decoration-color: v-bind(color);
  }

  &.-sm {
    font-size: 12px;
    padding: 8xp 12px;
  }

  &.-lg {
    font-size: 20px;
    padding: 8xp 20px;
  }

  &.-disabled {
    cursor: not-allowed;
    background-color: #b2b2b2;
  }

  &.-block {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

#loading-icon {
  animation: loading-spinner 1s linear infinite;
}

@keyframes loading-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
