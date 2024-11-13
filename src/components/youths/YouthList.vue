<script lang="ts">
import { useYouthStore } from '@/stores/youths'
import { defineComponent } from 'vue'
import Youth from '@/components/youths/Youth.vue'

export default defineComponent({
  name: 'sabha-list',
  components: { Youth },
  data() {
    return {
      youths: useYouthStore().youths
    }
  }
})

</script>

<template>

  <ul>
    <div v-for="(youth,index) in youths" :key="index">
      <Youth :youth="youth"/>
    </div>
  </ul>
</template>

<style scoped></style>
