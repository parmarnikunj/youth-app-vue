<script setup lang="ts">
import UserName from '@/components/UserName.vue'
const first = "first"
const last = "last"
</script>

<template>
  <UserName
    v-model:first-name="first"
    v-model:last-name="last"
  />
</template>

<style scoped>

</style>
