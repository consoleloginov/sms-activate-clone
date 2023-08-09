import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CatalogCountryItem} from '../types'

export const useCatalogCountriesStore = defineStore('CatalogCountries', () => {
  let countries = $ref<CatalogCountryItem[]>()

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

    countries!.push(...moreCountries)
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
  import.meta.hot.accept(acceptHMRUpdate(useCatalogCountriesStore, import.meta.hot))
}
