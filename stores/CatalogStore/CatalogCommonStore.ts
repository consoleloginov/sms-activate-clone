import {defineStore, acceptHMRUpdate} from 'pinia'

import type {Item} from './types'

export const useCatalogCommonStore = defineStore('CatalogCommonStore', () => {
  let selectedItem = $ref<Item | null>(null)

  return $$({
    selectedItem,
  })
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCatalogCommonStore, import.meta.hot))
// }
