<script lang="ts" setup>
const emit = defineEmits(['add'])
</script>

<template>
<button  class="add-button" @click="emit('add')">add</button>
</template>

<style scoped>
</style>
