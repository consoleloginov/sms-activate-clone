import {defineStore, acceptHMRUpdate} from 'pinia'
import type {CatalogItem, CatalogCountry} from './types'

export const useCatalogChosenElements = defineStore('useCatalogChosenElements', () => {
  let chosenItem = $ref<CatalogItem>()
  let chosenCountry = $ref<CatalogCountry>()

  return $$({
    chosenItem,
    chosenCountry,
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatalogChosenElements, import.meta.hot))
}
