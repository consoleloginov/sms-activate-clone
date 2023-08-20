<script setup lang="ts">
  import {useCatalogItemCountriesPageStore} from './useCatalogItemCountriesPageStore'

  const store = useCatalogItemCountriesPageStore()
  const {
    countries,
    loadCountries,
    loadMoreCountries,
  } = $(store)

  loadCountries()

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreCountries()
  })
</script>

<template>
  <div class="CatalogItemCountriesPage">
    <div class="CatalogItemCountriesPage-scrollContainer" ref="scrollContainer">
      <CatalogItemCountriesPageHeader />

      <div class="CatalogItemCountriesPage-countries" v-if="countries">
        <CatalogCountry
          v-for="country of countries"
          v-bind:key="country.id"
          v-bind="country"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogItemCountriesPage {
    height: 100%;
  }

  .CatalogItemCountriesPage-scrollContainer {
    height: 100%;
    overflow-y: scroll;
  }
</style>
