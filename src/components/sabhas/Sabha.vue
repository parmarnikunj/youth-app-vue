<script setup lang="ts">
import type Sabha from '@/types/Sabha'

defineProps<{
  sabha: Sabha
}>()
</script>

<template>
  <div>
   {{sabha.id}} {{sabha.name}}
  </div>
</template>

<style scoped>

</style>
