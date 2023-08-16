export type CatalogItem = {
  __typename: 'CatalogItem'
  id: string
  slug?: string
  name: string
  logo_url: string
  min_price: number
  in_favorites?: boolean
}

export type CatalogCountryItem = {
  __typename: 'CatalogCountryItem'
  id: string
  name: string
  price: number
  quantity: number
  flag_url: string
  in_favorites?: boolean
}
