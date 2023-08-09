<script setup lang="ts">
  import {useCatalogCommonStore} from '@/stores/CatalogStore'
  import {useCatalogItemsStore} from '@/stores/CatalogStore'

  let {selectedItem} = $(useCatalogCommonStore())
  let {search} = $(useCatalogItemsStore())
</script>

<template>
  <div>
    <template v-if="!selectedItem">
      <div class="CatalogHeader">
        <CatalogSearchInput v-model="search" class="mb-2.5" />

        <span class="flex w-full justify-center text-xs/5">
          He нашли то что нужно?&nbsp;
          <span class="text-blue-500 font-600 hover:underline underline-offset-2 cursor-pointer">
            Предложите
          </span>
        </span>
      </div>
    </template>

    <CatalogCountriesHeader v-else />
  </div>
</template>

<style lang="scss">
  .CatalogHeader {
    padding: 16px 24px 10px 24px;
  }
</style>
