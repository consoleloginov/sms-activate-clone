<script setup lang="ts">
  import {useCatalogItemsStore} from '@/stores/CatalogStore'

  let {search} = $(useCatalogItemsStore())
</script>

<template>
  <div class="CatalogItemsHeader">
    <CatalogSearchInput v-model="search" class="mb-1.5" />
    <span class="flex w-full justify-center text-xs">
      He нашли то что нужно?&nbsp;
      <span class="text-blue-500 font-600 underline underline-offset-2 cursor-pointer">
        Предложите
      </span>
    </span>
  </div>
</template>

<style lang="scss">
  .CatalogItemsHeader {
    padding: 0 24px 10px 24px;
  }
</style>
