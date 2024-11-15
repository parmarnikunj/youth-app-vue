<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { useSabhaStore } from '@/components/sabhas/store/sabhas'
import { useYouthStore } from '@/components/youths/stores/youths'
useSabhaStore().fetchSabhas()
useYouthStore().fetchYouths()
</script>

<template>
  <div class="app-container">
      <div class="container-item">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" to="/youths">Youths</RouterLink>
        <RouterLink class="nav-item" to="/sabhas">Sabhas</RouterLink>
        <RouterLink class="nav-item" to="/about">About</RouterLink>
      </div>
      <RouterView/>
     
  </div> 
</template>

<style scoped>
</style>
