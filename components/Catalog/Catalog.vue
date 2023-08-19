<script setup lang="ts">
  import {useCatalogStore} from './stores'

  let {route} = $(useCatalogStore())
</script>

<template>
  <div class="Catalog">
    <CatalogHomePage v-if="route === '/'" />
    <CatalogAllItemsPage v-if="route === '/items'" />
    <CatalogAllCountriesPage v-if="route === '/countries'" />
    <!-- <CatalogSelectedItemPage v-if="route === '/:slug/countries'" /> -->
  </div>
</template>

<style lang="scss">
  .Catalog {
    width: 320px;
    max-height: 100vh;
    display: flex;
    flex-flow: column;

    @apply text-sm font-inter;
  }
</style>
