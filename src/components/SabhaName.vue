<script setup lang="ts">
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
  <input type="text" v-model="name">
  <input type="text" v-model="topic">
  <input type="text" v-model="date">
  <button @click="submit">Add</button>
</template>

<style scoped>

</style>
