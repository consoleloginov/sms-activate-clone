import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CatalogItem, CatalogCountry} from '../types'

export const useCatalogFavoritesStore = defineStore('CatalogFavorites', () => {
  const add = async (entity: CatalogItem | CatalogCountry) => {
    const url = `/api/catalog/favorites/${
      entity.__typename === 'CatalogItem' && 'items' ||
      entity.__typename === 'CatalogCountry' && 'countries'
    }/add`

    $fetch(url, {
      method: 'post',
      body: {
        id: entity.id
      }
    })
  }

  const remove = async (entity: CatalogItem | CatalogCountry) => {
    const url = `/api/catalog/favorites/${
      entity.__typename === 'CatalogItem' && 'items' ||
      entity.__typename === 'CatalogCountry' && 'countries'
    }/delete`

    $fetch(url, {
      method: 'post',
      body: {
        id: entity.id
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
