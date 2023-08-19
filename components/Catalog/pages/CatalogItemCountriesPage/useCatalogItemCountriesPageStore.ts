import {defineStore, acceptHMRUpdate} from 'pinia'

import {useCatalogStore} from '../../stores/CatalogStore'
import type {CatalogCountry} from '../../types'

export const useCatalogItemCountriesPageStore = defineStore('CatalogItemCountriesPage', () => {
  let {selectedItem} = $(useCatalogStore())

  const url = $computed(() => (
    selectedItem?.slug && `/api/catalog/${selectedItem.slug}/countries`
  )) as `/api/catalog/${string}/countries`

  let countries = $ref<CatalogCountry[]>()

  let sortBy = $ref<'price' | 'quantity'>()

  const loadCountries = async () => {
    countries = await $fetch(url)
  }

  const loadMoreCountries = async () => {
    const offset = countries?.length

    const moreCountries = await $fetch(url, {
      query: {sortBy, offset}
    })

    countries?.push(...moreCountries)
  }

  watch($$(sortBy), async () => {
    countries = await $fetch(url, {
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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatalogItemCountriesPageStore, import.meta.hot))
}
