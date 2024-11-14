<script setup lang="ts">
import type Youth from '@/components/youths/types/Youth'
import { useYouthStore } from '@/components/youths/stores/youths'
import DelButton from '@/components/DelButton.vue'

defineProps<{
  youth: Youth,
  index: number,
}>()
const youthStore = useYouthStore()
const handleDelete = (id?:number) => {
  youthStore.deleteYouth(id)
}
</script>

<template>
  <div>
    {{index}}. {{youth.firstName}}-{{youth.lastName}}
    <DelButton @delete="handleDelete(youth.id)"/>
  </div>

</template>

<style scoped>

</style>
