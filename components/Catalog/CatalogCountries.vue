<script setup lang="ts">
  import {
    useCatalogCommonStore,
    useCatalogCountriesStore
  } from '@/stores/CatalogStore'

  let {selectedItem} = $(useCatalogCommonStore())

  const store = useCatalogCountriesStore()
  const {
    countries,
    loadCountries,
    loadMoreCountries,
  } = $(store)
  let {
    sortBy,
  } = $(store)

  await loadCountries()

  const handleSortingButtons = (arg: 'price' | 'quantity') => {
    if (sortBy !== arg) sortBy = arg
    else sortBy = undefined
  }

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreCountries()
  })
</script>

<template>
  <div class="CatalogCountries">
    <div class="CatalogCountries-headerItem">
      <img
        v-bind:src="selectedItem!.logo_url"
        v-on:click="selectedItem = null"
      />
      <div class="font-semibold">{{ selectedItem!.name }}</div>
    </div>

    <div class="CatalogCountries-scrollContainer" ref="scrollContainer">
      <div class="CatalogCountries-sorting">
        <span class="font-semibold">Сортировать по:</span>

        <button
          v-bind:class="{active: sortBy === 'price'}"
          v-on:click="handleSortingButtons('price')"
        >Цене</button>
        <button
          v-bind:class="{active: sortBy === 'quantity'}"
          v-on:click="handleSortingButtons('quantity')"
        >Кол-ву</button>
      </div>

      <CatalogCountryItem
        v-for="country of countries"
        v-bind:key="country.id"
        v-bind="country"
      />
    </div>
  </div>
</template>

<style scoped>
  .CatalogCountries {
    @apply text-white bg-sky-900;
  }

  .CatalogCountries-scrollContainer {
    max-height: 100vh;
    overflow: scroll;
  }

  .CatalogCountries-headerItem {
    padding: 12px 28px;
    display: flex;
    align-items: center;

    @apply bg-sky-900 text-white;
  }

  .CatalogCountries-headerItem img {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    border-radius: 9999px;
  }

  .CatalogCountries-sorting {
    padding: 0 18px 12px 28px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto auto;
    gap: 8px;
  }

  .CatalogCountries-sorting button {
    padding: 4px 8px;
    line-height: 1;
    border-radius: 9999px;

    font-weight: 600;

    @apply border-2 border-orange-500;

    &:hover, &.active {
      @apply bg-orange-500;
    }
  }
</style>
