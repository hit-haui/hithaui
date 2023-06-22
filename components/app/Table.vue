<script setup lang="ts">
interface Props {
  rows: any[]
  columns: any[]
  width?: string
  searchable?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  searchable: false,
})

const tableRows = ref(props.rows)

const searchInput = ref('')
watch(searchInput, () => {
  if (searchInput.value) {
    tableRows.value = props.rows.filter((row) => {
      return Object.values(row).some((value) => {
        return String(value)
          .toLowerCase()
          .includes(searchInput.value.toLowerCase())
      })
    })
  }
})
</script>

<template>
  <AppInput v-model="searchInput" placeholder="Search..." />
  <table class="hit-table">
    <thead class="header">
      <tr class="row">
        <th v-for="column in columns" :key="column.key" class="cell">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody class="body">
      <tr v-for="row in tableRows" :key="row.id" class="row">
        <td v-for="(value, key) in row" :key="key" class="cell">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.hit-table {
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 16px;
  line-height: 1.5;
  width: v-bind(width);
  border-radius: 4px;

  th {
    text-align: left;
    text-transform: capitalize;
    padding: 12px;
    border-bottom: 1px solid #bdbdbd;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #bdbdbd;
  }
}
</style>
