<script lang="ts" setup>
import { defineModel } from 'vue'

const name = defineModel('name')
</script>

<template>
  <label>Country</label>
  <input v-model="name" type="text">
</template>

<style scoped>

</style>
