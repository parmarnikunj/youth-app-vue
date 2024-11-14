<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { useSabhaStore } from '@/components/sabhas/store/sabhas'
import { useYouthStore } from '@/components/youths/stores/youths'
useSabhaStore().fetchSabhas()
useYouthStore().fetchYouths()
</script>

<template>
  <header>
    <div>
      <nav class="nav-list">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" to="/youths">Youths</RouterLink>
        <RouterLink class="nav-item" to="/sabhas">Sabhas</RouterLink>
        <RouterLink class="nav-item" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <body class="container">
    <RouterView/>
  </body>

</template>

<style scoped>
</style>
