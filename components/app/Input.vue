<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    label?: string
    error?: string
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    placeholder: '',
    label: '',
    error: '',
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const uuid = useUUID()
</script>

<template>
  <div class="form-item">
    <label v-if="label" class="label" :for="uuid">{{ label }}</label>
    <input
      v-bind="$attrs"
      :id="uuid"
      class="input"
      :class="{ '-error': error, '-disabled': disabled }"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    >
    <p v-if="error" class="error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.form-item {
  display: flex;
  flex-direction: column;
  width: 100%;

  > .label {
    margin-bottom: 4px;
  }

  > .input {
    background: #f5f5f5;
    border-radius: 4px;
    border: none;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 8px;
  }

  > .input.-error {
    border: 2px solid red;
  }

  > .input.-disabled {
    cursor: not-allowed;
  }

  .error {
    font-size: 12px;
    color: red;
  }
}
</style>
