import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CatalogCountry} from '../../types'

export const useCatalogAllCountriesPageStore = defineStore('CatalogAllCountriesPageStore', () => {
  let countries = $ref<CatalogCountry[]>()

  let search = $ref('')
  let sortBy = $ref<'price' | 'quantity'>()

  const loadCountries = async () => {
    countries = await $fetch('/api/catalog/countries')
  }

  const loadMoreCountries = async () => {
    const offset = countries?.length

    const moreCountries = await $fetch('/api/catalog/countries', {
      query: {search, sortBy, offset}
    })

    countries?.push(...moreCountries)
  }

  watch($$(sortBy), async () => {
    countries = await $fetch('/api/catalog/countries', {
      query: {search, sortBy}
    })
  })

  watchThrottled($$(search), async () => {
    countries = await $fetch('/api/catalog/countries', {
      query: {search, sortBy}
    })
  }, {throttle: 1500})

  return $$({
    countries,
    search,
    sortBy,
    loadCountries,
    loadMoreCountries
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatalogAllCountriesPageStore, import.meta.hot))
}
