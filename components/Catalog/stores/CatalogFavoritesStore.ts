import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CatalogItem, CatalogCountryItem} from '../types'

export const useCatalogFavoritesStore = defineStore('CatalogFavorites', () => {
  const add = async (item: CatalogItem | CatalogCountryItem) => {
    const url = `/api/catalog/favorites/${
      item.__typename === 'CatalogItem' && 'items' ||
      item.__typename === 'CatalogCountryItem' && 'countries'
    }/add`

    $fetch(url, {
      method: 'post',
      body: {
        id: item.id
      }
    })
  }

  const remove = async (item: CatalogItem | CatalogCountryItem) => {
    const url = `/api/catalog/favorites/${
      item.__typename === 'CatalogItem' && 'items' ||
      item.__typename === 'CatalogCountryItem' && 'countries'
    }/delete`

    $fetch(url, {
      method: 'post',
      body: {
        id: item.id
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
