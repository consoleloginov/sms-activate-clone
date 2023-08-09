<script setup lang="ts">
  import {useCatalogItemsStore} from '../stores'

  let {search} = $(useCatalogItemsStore())
</script>

<template>
  <div class="CatalogHomePageHeader">
    <CatalogSearchInput v-model="search" class="mb-2.5" />

    <span class="flex w-full justify-center text-xs/5">
      He нашли то что нужно?&nbsp;
      <span class="text-blue-500 font-600 hover:underline underline-offset-2 cursor-pointer">
        Предложите
      </span>
    </span>
  </div>
</template>

<style lang="scss">
  .CatalogHomePageHeader {
    padding: 16px 24px 10px 24px;
  }
</style>
