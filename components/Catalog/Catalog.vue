<script setup lang="ts">
  import CatalogCountries from './CatalogCountries.vue'
  import CatalogItem from './CatalogItem.vue'

  let items = $ref(await $fetch('/api/catalog/items'))

  type Item = typeof items[0]

  let search = $ref('')

  watchThrottled($$(search), async () => {
    items = await $fetch('/api/catalog/items', {
      query: {search}
    })
  }, {throttle: 1500})

  const loadMoreItems = async (offset: number) => {
    const moreItems = await $fetch('/api/catalog/items', {
      query: {offset, search}
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
        <div class="p-[28px]">
          <input
            class="Catalog-searchField"
            type="search"
            placeholder="Поиск"
            v-model="search"
          />
        </div>

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

  .Catalog-searchField {
    width: 100%;
    height: 36px;
    padding: 0 20px;
    border-radius: 4px;

    @apply border border-gray-200 shadow;

    &:focus {
      outline: none;
    }
  }
</style>
