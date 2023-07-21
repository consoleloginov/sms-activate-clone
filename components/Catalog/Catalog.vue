<script setup lang="ts">
  import CatalogCountries from './CatalogCountries.vue'
  import CatalogItem from './CatalogItem.vue'

  const items = $ref(await $fetch('/api/catalog/items'))

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

  let selectedItemId = $ref<string | null>(null)

  const handleClickOnItem = (itemId: string) => {
    if (itemId !== selectedItemId) {
      selectedItemId = itemId
    } else {
      selectedItemId = null
    }
  }
</script>

<template>
  <div class="Catalog" ref="scrollContainer">
    <div v-for="item of items" v-bind:key="item.shortName">
      <CatalogItem
        v-bind="item"
        v-bind:selected="selectedItemId === item.shortName"
        v-on:click="handleClickOnItem(item.shortName)"
      />
      <CatalogCountries v-if="selectedItemId === item.shortName" />
    </div>
  </div>
</template>

<style scoped>
  .Catalog {
    width: 320px;
    max-height: 100vh;
    overflow: scroll;
  }
</style>
