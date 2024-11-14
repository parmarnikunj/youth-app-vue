<script lang="ts" setup>
import { useYouthStore } from '@/components/youths/stores/youths'
import type Youth from '@/components/youths/types/Youth'

const firstName = defineModel("firstName",{default:""})
const lastName = defineModel("lastName",{default:""})
const submit = () => {
  console.log(firstName.value, lastName.value)
  const youth: Youth = { firstName: firstName.value, lastName: lastName.value }
  useYouthStore().addYouth(youth)
}
</script>
<template>
  <div>
    <div>
      <label>First Name</label>
      <input v-model="firstName" class="youth-item" type="text">
    </div>
    <div>
      <label>Last Name</label>
      <input v-model="lastName" class="youth-item" type="text">
    </div>
    <div>
      <button class="youth-item add-button" @click="submit">Add</button>
    </div>
  </div>
</template>

<style scoped>
</style>
