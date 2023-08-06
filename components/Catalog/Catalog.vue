<script setup lang="ts">
  import {useCatalogCommonStore} from '@/stores/CatalogStore'

  let {selectedItem} = $(useCatalogCommonStore())
</script>

<template>
  <div class="Catalog">
    <CatalogItems v-if="!selectedItem"/>
    <CatalogCountries v-else />
  </div>
</template>

<style scoped>
  .Catalog {
    width: 320px;
    max-height: 100vh;
  }
</style>
