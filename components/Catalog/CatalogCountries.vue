<script setup lang="ts">
  import {useCatalogCountriesStore} from '@/stores/CatalogStore'

  const store = useCatalogCountriesStore()
  const {
    countries,
    loadCountries,
    loadMoreCountries,
  } = $(store)

  await loadCountries()

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreCountries()
  })
</script>

<template>
  <div class="CatalogCountries">
    <div class="CatalogCountries-scrollContainer" ref="scrollContainer">
      <CatalogCountriesHeader />

      <CatalogCountryItem
        v-for="country of countries"
        v-bind:key="country.id"
        v-bind="country"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .CatalogCountries {

  }

  .CatalogCountries-scrollContainer {
    max-height: 100vh;
    overflow: scroll;
  }
</style>
