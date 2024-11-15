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
    <label class="sabha">Name:</label>
    <input v-model="name"  type="text">
  </div>
  <div class="sabha-item">
    <label class="sabha">Topic:</label>
    <input v-model="topic"  type="text">
  </div>
  <div class="sabha-item">
    <label class="sabha">Date:</label>
    <input v-model="date" type="text">
  </div>
  <button class="sabha-item" @click="submit">Add</button>
</template>

<style scoped>
.sabha {
  margin: 5px;
  padding: 5px;
}
button {
  background: green;
  color: white;
  border-radius: 7px;
}
</style>
