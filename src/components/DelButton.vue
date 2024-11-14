<script setup lang="ts">
const emit = defineEmits(['delete'])
</script>

<template>
<button @click="emit('delete')">del</button>
</template>

<style scoped>

</style>
