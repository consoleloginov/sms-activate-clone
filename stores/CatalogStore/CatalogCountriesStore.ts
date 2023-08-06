import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CountryItem} from './types'

export const useCatalogCountriesStore = defineStore('CatalogCountries', () => {
  let countries = $ref<CountryItem[]>()

  let sortBy = $ref<'price' | 'quantity'>()

  const loadCountries = async () => {
    countries = await $fetch('/api/catalog/countries')
  }

  const loadMoreCountries = async () => {
    const offset = countries?.length

    const moreCountries = await $fetch('/api/catalog/countries', {
      query: {sortBy, offset}
    })

    countries!.push(...moreCountries)
  }

  watch($$(sortBy), async () => {
    countries = await $fetch('/api/catalog/countries', {
      query: {sortBy}
    })
  })

  return $$({
    countries,
    sortBy,
    loadCountries,
    loadMoreCountries
  })
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCatalogCountriesStore, import.meta.hot))
// }
