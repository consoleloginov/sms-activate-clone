<script setup lang="ts">
  import CatalogOfCountries from './CatalogOfCountries.vue'
  import CatalogItem from './CatalogItem.vue'

  import {useCatalogStore} from './CatalogStore'

  const store = useCatalogStore()
  const {
    items,
    loadItems,
    loadMoreItems,
  } = $(store)
  let {
    selectedItem,
    search,
  } = $(store)

  await loadItems()

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreItems(items.length)
  })
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
          v-bind:key="item.id"
          v-bind="item"
          v-on:click="selectedItem = item"
        />
      </div>
    </template>

    <template v-else>
      <CatalogOfCountries
        v-bind="{selectedItem}"
        v-on:goback="selectedItem = undefined"
      />
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
