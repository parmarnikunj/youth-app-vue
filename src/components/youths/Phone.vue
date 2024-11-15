<script lang="ts" setup>
import { defineModel } from 'vue'

const mobile = defineModel('mobile')

</script>

<template>
  <div class="youth-form-item">
    <label>Mobile</label>
    <input v-model="mobile" type="text">
  </div>
</template>

<style scoped>

</style>
