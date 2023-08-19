<script setup lang="ts">
  import {useCatalogItemCountriesPageStore} from './useCatalogItemCountriesPageStore'
  import {useCatalogStore} from '../../stores'

  let {route} = $(useCatalogStore())
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
