<script lang="ts" setup>
import Youth from '@/components/youths/YouthComponent.vue'
import YouthForm from '@/components/youths/YouthForm.vue'
import { useYouthStore } from '@/components/youths/stores/youths'
import { storeToRefs } from 'pinia'

const youthStore = useYouthStore()
const { youths } = storeToRefs(youthStore)
</script>

<template>
  <div class="youth-list">
    <YouthForm class="youth-form"/>
    <div v-for="(youth,index) in youths" :key="index">
      <Youth :index="index+1" :youth="youth" class="youth-list-item"/>
    </div>
  </div>
</template>

<style scoped>
</style>
