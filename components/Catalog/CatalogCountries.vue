<script setup lang="ts">
  import CatalogCountryItem from './CatalogCountryItem.vue'

  const countries = $ref(await $fetch('/api/catalog/countries'))

  const loadMoreCountries = async (offset: number) => {
    const moreCountries = await $fetch('/api/catalog/countries', {
      query: {offset}
    })

    countries.push(...moreCountries)
  }

  const scrollContainer = ref<HTMLElement | null>(null)

  useInfiniteScroll(scrollContainer, async () => {
    await loadMoreCountries(countries.length)
  })
</script>

<template>
  <div class="CatalogCountries">
    <div class="CatalogCountries-scrollContainer" ref="scrollContainer">
      <CatalogCountryItem
        v-for="country of countries"
        v-bind:key="country.country"
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
</style>
