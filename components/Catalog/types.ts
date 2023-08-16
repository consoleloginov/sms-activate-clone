export type CatalogItem = {
  id: string
  slug?: string
  name: string
  logo_url: string
  min_price: number
  in_favorites?: boolean
}

export type CatalogCountryItem = {
  id: string
  name: string
  price: number
  quantity: number
  flag_url: string
}
