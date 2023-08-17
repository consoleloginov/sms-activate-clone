import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CatalogItem, CatalogCountry} from '../types'

export const useCatalogStore = defineStore('Catalog', () => {
  let selectedItem = $ref<CatalogItem>()
  let selectedCountry = $ref<CatalogCountry>()

  return $$({
    selectedItem,
    selectedCountry,
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatalogStore, import.meta.hot))
}
