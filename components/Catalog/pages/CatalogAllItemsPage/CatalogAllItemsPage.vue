<script setup lang="ts">
  import {useCatalogAllItemsPageStore} from './useCatalogAllItemsPageStore'
  import {useCatalogChosenElements} from '../../useCatalogChosenElements'
  import {useCatalogRouter} from '../../CatalogRouter/useCatalogRouter'
  import type {CatalogItem} from '../../types'

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

  let {chosenItem} = $(useCatalogChosenElements())
  let {route} = $(useCatalogRouter())

  const onItemClicked = (item: CatalogItem) => {
    chosenItem = item
    route = '/:slug/countries'
  }
</script>

<template>
  <div class="CatalogAllItemsPage">
    <div class="CatalogAllItemsPage-scrollContainer" ref="scrollContainer">
      <CatalogAllItemsPageHeader />

      <div class="CatalogAllItemsPage-items" v-if="items">
        <CatalogItem
          v-for="item of items"
          v-bind:key="item.id"
          v-bind="item"
          showToggleIsFavorite
          v-on:click="onItemClicked(item)"
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
