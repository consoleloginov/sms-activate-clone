<script setup lang="ts">
  import {useCatalogAllCountriesPageStore} from './useCatalogAllCountriesPageStore'
  import {useCatalogRouter} from '../../CatalogRouter/useCatalogRouter'

  let {search} = $(useCatalogAllCountriesPageStore())
  let {route} = $(useCatalogRouter())
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
