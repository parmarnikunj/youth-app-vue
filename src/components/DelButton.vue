<script lang="ts" setup>
const emit = defineEmits(['delete'])
</script>

<template>
<button  class="del-button" @click="emit('delete')">delete</button>
</template>

<style scoped>
</style>
