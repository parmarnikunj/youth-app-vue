<script setup lang="ts">
import { useSabhaStore } from '@/components/sabhas/store/sabhas'
import Sabha from '@/components/sabhas/SabhaComponent.vue'
import { storeToRefs } from 'pinia'
import SabhaName from '@/components/SabhaName.vue'
const sabhaStore = useSabhaStore()
const { sabhas } = storeToRefs(sabhaStore)
</script>

<template>
  <SabhaName/>
  <ul>
    <div v-for="(sabha,index) in sabhas" :key="index">
      <Sabha :sabha="sabha"/>
    </div>
  </ul>
</template>

<style scoped></style>
