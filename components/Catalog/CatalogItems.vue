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
  <div class="CatalogItems">
    <template v-if="items">
      <div class="CatalogItems-scrollContainer" ref="scrollContainer">
        <CatalogItemsHeader />

        <CatalogItem
          v-for="item of items"
          v-bind:key="item.id"
          v-bind="item"
          v-on:click="selectedItem = item"
        />
      </div>
    </template>

    <template v-else>
      loading...
    </template>
  </div>
</template>

<style scoped>
  .CatalogItems-scrollContainer {
    max-height: 100vh;
    overflow: scroll;
  }
</style>
