<script setup lang="ts">
  import {
    useCatalogCommonStore,
    useCatalogItemsStore,
  } from '@/stores/CatalogStore'

  let {selectedItem} = $(useCatalogCommonStore())

  const store = useCatalogItemsStore()
  const {
    items,
    loadItems,
    loadMoreItems,
  } = $(store)
  let {
    search,
  } = $(store)

  await loadItems()

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreItems()
  })
</script>

<template>
  <div class="CatalogItems" ref="scrollContainer">
    <CatalogItem
      v-for="item of items"
      v-bind:key="item.id"
      v-bind="item"
      v-on:click="selectedItem = item"
    />
  </div>
</template>

<style scoped>
  .CatalogItems {
    overflow-y: scroll;
  }
</style>
