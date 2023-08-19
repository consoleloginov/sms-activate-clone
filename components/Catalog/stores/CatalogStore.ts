import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CatalogItem, CatalogCountry} from '../types'

export type CatalogRoute =
  | '/'
  | '/items'
  | '/countries'
  // | '/items/:slug/countries'
  // | '/countries/:slug/items'


export const useCatalogStore = defineStore('Catalog', () => {
  let selectedItem = $ref<CatalogItem>()
  let selectedCountry = $ref<CatalogCountry>()

  let route = $ref<CatalogRoute>('/')

  return $$({
    selectedItem,
    selectedCountry,
    route,
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatalogStore, import.meta.hot))
}
