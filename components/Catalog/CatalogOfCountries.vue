<script setup lang="ts">
  import CatalogCountryItem from './CatalogCountryItem.vue'

  import {useCatalogOfCountriesStore} from './CatalogOfCountriesStore';
  import {type Item} from './CatalogStore'

  type Props = {
    selectedItem: Item
  }

  const {
    selectedItem,
  } = defineProps<Props>()

  const emit = defineEmits(['goback'])

  const store = useCatalogOfCountriesStore()
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
    await loadMoreCountries(countries.length)
  })
</script>

<template>
  <div class="CatalogOfCountries">
    <div class="CatalogOfCountries-headerItem">
      <img
        v-bind:src="selectedItem.logo_url"
        v-on:click="emit('goback')"
      />
      <div class="font-semibold">{{ selectedItem.name }}</div>
    </div>

    <div class="CatalogOfCountries-scrollContainer" ref="scrollContainer">
      <div class="CatalogOfCountries-sorting">
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
  .CatalogOfCountries {
    @apply text-white bg-sky-900;
  }

  .CatalogOfCountries-scrollContainer {
    max-height: 100vh;
    overflow: scroll;
  }

  .CatalogOfCountries-headerItem {
    padding: 12px 28px;
    display: flex;
    align-items: center;

    @apply bg-sky-900 text-white;
  }

  .CatalogOfCountries-headerItem img {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    border-radius: 9999px;
  }

  .CatalogOfCountries-sorting {
    padding: 0 18px 12px 28px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto auto;
    gap: 8px;
  }

  .CatalogOfCountries-sorting button {
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
