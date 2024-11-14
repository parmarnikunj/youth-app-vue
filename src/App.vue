<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useSabhaStore } from '@/components/sabhas/store/sabhas'
import { useYouthStore } from '@/components/youths/stores/youths'
useSabhaStore().fetchSabhas()
useYouthStore().fetchYouths()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/youths">Youths</RouterLink>
        <RouterLink to="/sabhas">Sabhas</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
