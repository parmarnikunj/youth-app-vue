<script lang="ts" setup>
import { useYouthStore } from '@/components/youths/stores/youths'
import type Sabha from '@/components/sabhas/types/Sabha'
import { useSabhaStore } from '@/components/sabhas/store/sabhas'

const name = defineModel("name",{default:""})
const topic = defineModel("topic",{default:""})
const date = defineModel("date",{default:""})
const sabhaStore = useSabhaStore()
const submit = () => {
  console.log("clicked")
  const sabha: Sabha = { name: name.value, topic: topic.value, date: date.value }
  sabhaStore.add(sabha)
}
</script>

<template>
  <div class="sabha-item">
    <label>Name:</label>
    <input v-model="name"  type="text">
  </div>
  <div class="sabha-item">
    <label>Topic:</label>
    <input v-model="topic"  type="text">
  </div>
  <div class="sabha-item">
    <label>Date:</label>
    <input v-model="date" type="text">
  </div>  
  <button class="sabha-item add-button" @click="submit">Add</button>
</template>

<style scoped>
</style>
