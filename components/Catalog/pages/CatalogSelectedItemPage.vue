<script setup lang="ts">
  import {useCatalogCountriesStore} from '../stores'

  const countriesStore = useCatalogCountriesStore()
  const {
    countries,
    loadCountries,
    loadMoreCountries,
  } = $(countriesStore)

  loadCountries()

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreCountries()
  })
</script>

<template>
  <div class="CatalogSelectedItemPage">
    <div class="CatalogSelectedItemPage-scrollContainer" ref="scrollContainer">
      <CatalogSelectedItemPageHeader />

      <div class="CatalogSelectedItemPage-countries" v-if="countries">
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
  .CatalogSelectedItemPage {
    height: 100%;
  }

  .CatalogSelectedItemPage-scrollContainer {
    height: 100%;
    overflow-y: scroll;
  }
</style>
