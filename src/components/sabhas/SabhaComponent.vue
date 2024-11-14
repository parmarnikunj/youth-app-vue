<script lang="ts" setup>
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
  <div class="sabha-item">
   Name: {{sabha.name}}
  </div>
  <div class="sabha-item">
    Topic: {{ sabha.topic }}
  </div>
  <div class="sabha-item">
    <DelButton @delete="handleDelete(sabha.id)"/>
  </div>
</template>

<style scoped>

</style>
