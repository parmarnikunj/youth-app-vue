<script lang="ts" setup>
import Youth from '@/components/youths/YouthComponent.vue'
import YouthForm from '@/components/youths/YouthForm.vue'
import { useYouthStore } from '@/components/youths/stores/youths'
import { storeToRefs } from 'pinia'

const youthStore = useYouthStore()
const { youths } = storeToRefs(youthStore)
</script>

<template>
  <div class="youth-add-button">
    <router-link
      class="add-button"
      to="/addYouth">ADD
    </router-link>
    </div>
    <div v-if="youths.length>0" class="youth-list">
      <div v-for="(youth,index) in youths" :key="index" class="youth-card">
        <Youth :index="index+1" :youth="youth"/>
      </div>
    </div>
</template>

<style scoped>
</style>
