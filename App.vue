<script setup lang="ts">
  import Catalog from '@/components/Catalog/Catalog.vue'
</script>

<template>
  <div class="App">
    <Catalog />
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&display=swap');

  .App {
    display: grid;
    place-content: center;

    @apply text-sm;
  }
</style>
