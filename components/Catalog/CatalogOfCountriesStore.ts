export type CountryItem = {
  id: string
  name: string
  quantity: number
  price: number
  flag_url: string
}

export const useCatalogOfCountriesStore = defineStore('catalog of countries', () => {
  let countries = $ref<CountryItem[]>([])

  let sortBy = $ref<'price' | 'quantity'>()

  const loadCountries = async () => {
    countries = await $fetch('/api/catalog/countries')
  }

  const loadMoreCountries = async (offset: number) => {
    const moreCountries = await $fetch('/api/catalog/countries', {
      query: {offset, sortBy}
    })

    countries.push(...moreCountries)
  }

  watch($$(sortBy), async () => {
    countries = await $fetch('/api/catalog/countries', {
      query: {sortBy}
    })
  })

  return $$({
    countries,
    sortBy,
    loadCountries,
    loadMoreCountries
  })
})
