<script setup lang="ts">
  import {useCatalogItemCountriesPageStore} from './useCatalogItemCountriesPageStore'
  import {useCatalogRouter} from '../../CatalogRouter/useCatalogRouter'

  let {route} = $(useCatalogRouter())
</script>

<template>
  <div class="CatalogItemCountriesPageHeader">
    <CatalogGobackButton v-on:click="route = '/'" />
    <CatalogSearchInput />
  </div>
</template>

<style lang="scss">
  .CatalogItemCountriesPageHeader {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
