<script setup lang="ts">
  import {useCatalogStore} from '../stores'
  import type {CatalogItem} from '../types'

  let {selectedItem} = $(useCatalogStore())

  const item = defineProps<CatalogItem>()

  const {
    id,
    name,
    minPrice,
    logo_url,
  } = item
</script>

<template>
  <div class="CatalogItem" v-on:click="selectedItem = item">
    <img class="CatalogItem-logo" v-bind:src="logo_url" />
    <div class="grow">
      <div class="CatalogItem-name">{{ name }}</div>
    </div>
    <div class="CatalogItem-minPrice">от
      <span class="font-semibold">{{ minPrice }} ₽</span>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogItem {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @apply transition-colors;

    &:hover {
      @apply bg-gray-100;
    }
  }

  .CatalogItem-logo {
    width: 36px;
    height: 36px;
    margin: 0 2px;
    border-radius: 9999px;
  }

  .CatalogItem-name {
    font-weight: 600;
  }

  .CatalogItem-minPrice {
    white-space: nowrap;
  }
</style>
