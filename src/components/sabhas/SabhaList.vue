<script lang="ts" setup>
import { useSabhaStore } from '@/components/sabhas/store/sabhas'
import Sabha from '@/components/sabhas/SabhaComponent.vue'
import { storeToRefs } from 'pinia'
import SabhaName from '@/components/SabhaName.vue'
const sabhaStore = useSabhaStore()
const { sabhas } = storeToRefs(sabhaStore)
</script>

<template>
  <div class="sabha-form">
    <SabhaName/>
  </div>
  <div class="sabha-list">
    <div class="sabha-list-item">      
    </div>
    <div v-for="(sabha,index) in sabhas" :key="index" class="sabha-list-item">
      <Sabha :sabha="sabha"/>
    </div>
  </div>
</template>

<style scoped></style>
