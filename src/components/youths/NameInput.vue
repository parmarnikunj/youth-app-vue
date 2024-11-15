<script lang="ts" setup>
import { defineModel } from 'vue'

const firstName = defineModel('firstName')
const lastName = defineModel('lastName')

</script>

<template>
  <div class="youth-form-item">
  <label>First Name</label>
  <input v-model="firstName" type="text">
  </div>
  <div class="youth-form-item">
    <label>Last Name</label>
    <input v-model="lastName" type="text">
  </div>
</template>

<style scoped>

</style>
