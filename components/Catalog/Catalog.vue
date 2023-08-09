<script setup lang="ts">
  import {useCatalogCommonStore} from '@/stores/CatalogStore'

  let {selectedItem} = $(useCatalogCommonStore())
</script>

<template>
  <div class="Catalog">
    <CatalogHeader />

    <CatalogItems v-if="!selectedItem"/>
    <CatalogCountries v-else />
  </div>
</template>

<style scoped>
  .Catalog {
    width: 320px;
    max-height: 100vh;
    display: flex;
    flex-flow: column;

    @apply text-sm font-inter;
  }
</style>
