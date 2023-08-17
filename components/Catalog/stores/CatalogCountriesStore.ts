import {defineStore, acceptHMRUpdate} from 'pinia'

import {useCatalogStore} from './CatalogStore'
import type {CatalogCountry} from '../types'

export const useCatalogCountriesStore = defineStore('CatalogCountries', () => {
  let {selectedItem} = $(useCatalogStore())

  const url = $computed(() => (
    selectedItem?.slug && `/api/catalog/${selectedItem?.slug}/countries`
  ))

  let countries = $ref<CatalogCountry[]>()

  let search = $ref('')

  let sortBy = $ref<'price' | 'quantity'>()

  const loadCountries = async () => {
    if (url) {
      countries = await $fetch(url)
    }
  }

  const loadMoreCountries = async () => {
    const offset = countries?.length

    if (url) {
      const moreCountries = await $fetch(url, {
        query: {search, sortBy, offset}
      })

      countries!.push(...moreCountries as [])
    }
  }

  watch($$(sortBy), async () => {
    if (url) {
      countries = await $fetch(url, {
        query: {search, sortBy}
      })
    }
  })

  watchThrottled($$(search), async () => {
    if (url) {
      countries = await $fetch(url, {
        query: {search, sortBy}
      })
    }
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
