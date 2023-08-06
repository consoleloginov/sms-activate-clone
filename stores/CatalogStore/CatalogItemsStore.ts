import {defineStore, acceptHMRUpdate} from 'pinia'

import type {Item} from './types'

export const useCatalogItemsStore = defineStore('CatalogItems', () => {
  let items = $ref<Item[]>()

  let search = $ref('')

  const loadItems = async () => {
    items = await $fetch('/api/catalog/items')
  }

  const loadMoreItems = async () => {
    const offset = items?.length

    const moreItems = await $fetch('/api/catalog/items', {
      query: {search, offset}
    })

    items!.push(...moreItems)
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
  import.meta.hot.accept(acceptHMRUpdate(useCatalogItemsStore, import.meta.hot))
}
