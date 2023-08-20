import {defineStore, acceptHMRUpdate} from 'pinia'

import {useCatalogChosenElements} from '../../useCatalogChosenElements'
import type {CatalogCountry} from '../../types'

export const useCatalogItemCountriesPageStore = defineStore('CatalogItemCountriesPage', () => {
  let {chosenItem} = $(useCatalogChosenElements())

  const url = $computed(() => (
    `/api/catalog/${chosenItem?.slug}/countries`
  )) as `/api/catalog/${string}/countries`

  let countries = $ref<CatalogCountry[]>()

  let sortBy = $ref<'default'|'name'|'price'|'quantity'>('default')

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
