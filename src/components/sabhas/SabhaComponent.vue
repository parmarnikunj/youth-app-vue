<script setup lang="ts">
import DelButton from '@/components/DelButton.vue'
import { useSabhaStore } from '@/components/sabhas/store/sabhas'
import type Sabha from '@/components/sabhas/types/Sabha'

defineProps<{
  sabha: Sabha
}>()
const sabhaStore = useSabhaStore()
const handleDelete = (id?: string) => {
  console.log(`id is ${id}`)
  sabhaStore.delete(id)
}
</script>

<template>
  <div>
   Name: {{sabha.name}} - Topic: {{ sabha.topic }}
    <DelButton @delete="handleDelete(sabha.id)"/>
  </div>
</template>

<style scoped>

</style>
