<script setup lang="ts">
  import CatalogCountries from './CatalogCountries.vue'
  import CatalogItem from './CatalogItem.vue'

  const items = $ref(await $fetch('/api/catalog/items'))

  type Item = typeof items[0]

  const loadMoreItems = async (offset: number) => {
    const moreItems = await $fetch('/api/catalog/items', {
      query: {offset}
    })

    items.push(...moreItems)
  }

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreItems(items.length)
  })

  let selectedItem = $ref<Item | null>(null)

  const handleClickOnItem = (item: Item) => {
    if (!selectedItem) {
      selectedItem = item
    } else {
      selectedItem = null
    }
  }
</script>

<template>
  <div class="Catalog">
    <template v-if="!selectedItem">
      <div class="Catalog-scrollContainer" ref="scrollContainer">
        <CatalogItem
          v-for="item of items"
          v-bind:key="item.shortName"
          v-bind="item"
          v-on:click="handleClickOnItem(item)"
        />
      </div>
    </template>

    <template v-else>
      <div>
        <CatalogItem selected v-bind="selectedItem" />
        <CatalogCountries />
      </div>
    </template>
  </div>
</template>

<style scoped>
  .Catalog {
    width: 320px;
    max-height: 100vh;
  }

  .Catalog-scrollContainer {
    max-height: 100vh;
    overflow: scroll;
  }
</style>
