<script setup lang="ts">
  import {useCatalogItemsStore} from '../stores'

  const itemsStore = useCatalogItemsStore()
  const {
    items,
    loadItems,
    loadMoreItems,
  } = $(itemsStore)

  loadItems()

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreItems()
  })
</script>

<template>
  <div class="CatalogHomePage">
    <div class="CatalogHomePage-scrollContainer" ref="scrollContainer">
      <CatalogHomePageHeader />

      <div class="CatalogHomePage-items" v-if="items">
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
  .CatalogHomePage {
    height: 100%;
  }

  .CatalogHomePage-scrollContainer {
    height: 100%;
    overflow-y: scroll;
  }
</style>
