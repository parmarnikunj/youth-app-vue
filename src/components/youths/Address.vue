<script lang="ts" setup>
import { defineModel } from 'vue'
import City from '@/components/youths/CityInput.vue'
import Country from '@/components/youths/CountryInput.vue'

const street = defineModel('street')
const houseNumber = defineModel('houseNumber')
const city = defineModel('city')
const country = defineModel('country')

</script>

<template>
  <div class="youth-form-item">
    <label>Street</label>
    <input v-model="street" type="text">
  </div>
  <div class="youth-form-item">
    <label>House No</label>
    <input v-model="houseNumber" type="text">
  </div>
  <div class="youth-form-item">
    <City v-model:name="city"/>
    <Country v-model:name="country"/>
  </div>
</template>

<style scoped>

</style>
