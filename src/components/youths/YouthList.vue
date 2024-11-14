<script setup lang="ts">
import Youth from '@/components/youths/YouthComponent.vue'
import YouthForm from '@/components/youths/YouthForm.vue'
import { useYouthStore } from '@/components/youths/stores/youths'
import { storeToRefs } from 'pinia'

const youthStore = useYouthStore()
const { youths } = storeToRefs(youthStore)
</script>

<template>
    <YouthForm/>
    <div v-for="(youth,index) in youths" :key="index">
      <Youth :youth="youth" :index="index+1"/>
    </div>
</template>

<style scoped></style>
