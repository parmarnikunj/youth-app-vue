<script setup lang="ts">
import type Youth from '@/types/Youth'

defineProps<{
  youth: Youth
}>()
</script>

<template>
  <div>
    {{youth.id}}. {{youth.firstName}}-{{youth.lastName}}
  </div>
</template>

<style scoped>

</style>
