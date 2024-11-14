<template>
  <div>
    <div class="youth-item">
    {{youth.firstName}}
    </div>
    <div class="youth-item">
      {{youth.lastName}}
    </div>
    <div class="youth-item">
      <DelButton @delete="handleDelete(youth.id)"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

<style scoped>
</style>
