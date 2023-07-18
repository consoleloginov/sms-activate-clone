<script setup lang="ts">
  import Catalog from '@/components/Catalog.vue'
</script>

<template>
  <div class="App">
    <Catalog />
  </div>
</template>

<style scoped>
  .App {
    display: grid;
    place-content: center;

    @apply text-sm;
  }
</style>
