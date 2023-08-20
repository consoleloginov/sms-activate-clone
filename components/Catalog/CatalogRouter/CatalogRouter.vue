<script setup lang="ts">
  import {useCatalogRouter} from './useCatalogRouter'

  let {route} = $(useCatalogRouter())
</script>

<template>
  <CatalogHomePage v-if="route === '/'" />
  <CatalogAllItemsPage v-if="route === '/items'" />
  <CatalogAllCountriesPage v-if="route === '/countries'" />
  <CatalogItemCountriesPage v-if="route === '/:slug/countries'" />
</template>
