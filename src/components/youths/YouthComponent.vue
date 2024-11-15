<template>
    <div class="youth-item bold">
    {{youth.name.first}} {{youth.name.last}}
    </div>
    <div class="youth-item">
      {{youth.phone.mobile}}
    </div>
    <div class="youth-item">
      {{youth.address.city.name}}
    </div>
  <div class="youth-item">
      {{youth.address.country.name}}
    </div>
    <div class="youth-item">
      <DelButton @delete="handleDelete(youth.id)"/>
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
.bold {
  font-weight: bold;
}
</style>
