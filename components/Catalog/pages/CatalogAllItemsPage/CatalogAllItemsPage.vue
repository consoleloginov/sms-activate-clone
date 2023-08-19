<script setup lang="ts">
  import {useCatalogAllItemsPageStore} from './useCatalogAllItemsPageStore'

  const store = useCatalogAllItemsPageStore()
  const {
    items,
    loadItems,
    loadMoreItems,
  } = $(store)

  loadItems()

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreItems()
  })
</script>

<template>
  <div class="CatalogAllItemsPage">
    <div class="CatalogAllItemsPage-scrollContainer" ref="scrollContainer">
      <CatalogAllItemsPageHeader />

      <div class="CatalogAllItemsPage-items" v-if="items">
        <CatalogItemEntity
          v-for="item of items"
          v-bind:key="item.id"
          v-bind="item"
          showToggleIsFavorite
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogAllItemsPage {
    height: 100%;
  }

  .CatalogAllItemsPage-scrollContainer {
    height: 100%;
    overflow-y: scroll;
  }
</style>
