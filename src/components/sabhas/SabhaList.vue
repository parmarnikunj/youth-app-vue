<script lang="ts" setup>
import { useSabhaStore } from '@/components/sabhas/store/sabhas'
import Sabha from '@/components/sabhas/SabhaComponent.vue'
import { storeToRefs } from 'pinia'
import SabhaName from '@/components/sabhas/SabhaNameInput.vue'
const sabhaStore = useSabhaStore()
const { sabhas } = storeToRefs(sabhaStore)
</script>

<template>
  <div class="sabha-form">
    <SabhaName/>
  </div>
  <div class="sabha-list">
    <div v-for="(sabha,index) in sabhas" :key="index" class="sabha-card">
      <Sabha :sabha="sabha"/>
    </div>
  </div>
</template>

<style scoped></style>
