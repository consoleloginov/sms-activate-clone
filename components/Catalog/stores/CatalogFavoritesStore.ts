import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CatalogItem} from '../types'

export const useCatalogFavoritesStore = defineStore('CatalogFavorites', () => {
  const add = async (item: CatalogItem) => {
    $fetch('/api/catalog/favorites/add', {
      method: 'post',
      body: {
        item_id: item.id
      }
    })
  }

  const remove = async (item: CatalogItem) => {
    $fetch('/api/catalog/favorites/delete', {
      method: 'post',
      body: {
        item_id: item.id
      }
    })
  }

  return $$({
    add,
    remove,
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatalogFavoritesStore, import.meta.hot))
}
