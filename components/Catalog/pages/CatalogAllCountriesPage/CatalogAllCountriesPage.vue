<script setup lang="ts">
  import {useCatalogAllCountriesPageStore} from './useCatalogAllCountriesPageStore'

  const store = useCatalogAllCountriesPageStore()
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
  <div class="CatalogAllCountriesPage">
    <div class="CatalogAllCountriesPage-scrollContainer" ref="scrollContainer">
      <CatalogAllCountriesPageHeader />

      <div class="CatalogAllCountriesPage-countries" v-if="countries">
        <CatalogCountryEntity
          v-for="country of countries"
          v-bind:key="country.id"
          v-bind="country"
          showToggleIsFavorite
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogAllCountriesPage {
    height: 100%;
  }

  .CatalogAllCountriesPage-scrollContainer {
    height: 100%;
    overflow-y: scroll;
  }
</style>
