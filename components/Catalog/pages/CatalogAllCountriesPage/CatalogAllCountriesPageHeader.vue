<script setup lang="ts">
  import {useCatalogAllCountriesPageStore} from './useCatalogAllCountriesPageStore'
  import {useCatalogStore} from '../../stores'

  let {search} = $(useCatalogAllCountriesPageStore())
  let {route} = $(useCatalogStore())
</script>

<template>
  <div class="CatalogAllCountriesPageHeader">
    <CatalogGobackButton v-on:click="route = '/'" />
    <CatalogSearchInput v-model="search" />
  </div>
</template>

<style lang="scss">
  .CatalogAllCountriesPageHeader {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
