<script setup lang="ts">
  import {useCatalogAllItemsPageStore} from './useCatalogAllItemsPageStore'
  import {useCatalogStore} from '../../stores'

  let {search} = $(useCatalogAllItemsPageStore())
  let {route} = $(useCatalogStore())
</script>

<template>
  <div class="CatalogAllItemsPageHeader">
    <CatalogGobackButton v-on:click="route = '/'" />
    <CatalogSearchInput v-model="search" />
  </div>
</template>

<style lang="scss">
  .CatalogAllItemsPageHeader {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
