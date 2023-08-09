<script setup lang="ts">
  import {useCatalogStore} from './stores'

  let {selectedItem} = $(useCatalogStore())
</script>

<template>
  <div class="Catalog">
    <CatalogSelectedItemPage v-if="selectedItem" />
    <CatalogHomePage v-else />
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
