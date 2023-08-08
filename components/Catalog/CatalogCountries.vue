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
  <div class="CatalogCountries" ref="scrollContainer">
    <CatalogCountryItem
      v-for="country of countries"
      v-bind:key="country.id"
      v-bind="country"
    />
  </div>
</template>

<style lang="scss">
  .CatalogCountries {
    overflow-y: scroll;
  }
</style>
