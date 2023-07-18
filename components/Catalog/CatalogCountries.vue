<script setup lang="ts">
  import CatalogCountryItem from './CatalogCountryItem.vue'

  import response from '@/heap/countriesStackRender-response-example.json'

  const items = response.data.cards
</script>

<template>
  <div class="CatalogCountries">
    <CatalogCountryItem
      v-for="item of items"
      v-bind:key="item.country"
      v-bind="item"
    />
  </div>
</template>

<style scoped>
  .CatalogCountries {
    @apply text-white bg-sky-900;
  }
</style>
