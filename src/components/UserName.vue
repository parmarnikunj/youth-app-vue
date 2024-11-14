<script setup lang="ts">
import { useYouthStore } from '@/components/youths/stores/youths'
import type Youth from '@/components/youths/types/Youth'

const firstName = defineModel("firstName",{default:""})
const lastName = defineModel("lastName",{default:""})
const submit = () => {
  console.log("clicked")
  const youth: Youth = { firstName: firstName.value, lastName: lastName.value }
  useYouthStore().addYouth(youth)
}

</script>

<template>
  <input type="text" v-model="firstName">
  <input type="text" v-model="lastName">
  <button @click="submit">Add</button>
</template>

<style scoped>

</style>
