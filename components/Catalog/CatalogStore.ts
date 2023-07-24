export type Item = {
  id: string
  name: string
  minPrice: number
  logo_url: string
}

export const useCatalogStore = defineStore('catalog', () => {
  let items = $ref<Item[]>([])

  let selectedItem = $ref<Item>()

  let search = $ref('')

  const loadItems = async () => {
    items = await $fetch('/api/catalog/items')
  }

  const loadMoreItems = async (offset: number) => {
    const moreItems = await $fetch('/api/catalog/items', {
      query: {offset, search}
    })

    items.push(...moreItems)
  }

  watchThrottled($$(search), async () => {
    items = await $fetch('/api/catalog/items', {
      query: {search}
    })
  }, {throttle: 1500})

  return $$({
    items,
    selectedItem,
    search,
    loadItems,
    loadMoreItems,
  })
})
