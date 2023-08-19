import {defineStore, acceptHMRUpdate} from 'pinia'

import type {CatalogItem} from '../../types'

export const useCatalogAllItemsPageStore = defineStore('CatalogAllItemsPageStore', () => {
  let items = $ref<CatalogItem[]>()

  let search = $ref('')

  const loadItems = async () => {
    items = await $fetch('/api/catalog/items')
  }

  const loadMoreItems = async () => {
    const offset = items?.length

    const moreItems = await $fetch('/api/catalog/items', {
      query: {search, offset}
    })

    items?.push(...moreItems)
  }

  watchThrottled($$(search), async () => {
    items = await $fetch('/api/catalog/items', {
      query: {search}
    })
  }, {throttle: 1500})

  return $$({
    items,
    search,
    loadItems,
    loadMoreItems,
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatalogAllItemsPageStore, import.meta.hot))
}
