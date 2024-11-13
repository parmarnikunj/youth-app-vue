<script lang="ts">
import { defineComponent } from 'vue'
import { useSabhaStore } from '@/stores/sabhas'
import Sabha from '@/components/sabhas/Sabha.vue'
export default defineComponent({
  name: 'sabha-list',
  components: { Sabha },
  data() {
      return {
        sabhas: useSabhaStore().sabhas
      }
  }
})
</script>

<template>
  <ul>
    <div v-for="(sabha,index) in sabhas" :key="index">
      <Sabha :sabha="sabha"/>
    </div>
  </ul>
</template>

<style scoped></style>
