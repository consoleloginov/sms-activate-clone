export type CatalogItem = {
  __typename: 'CatalogItem'
  id: string
  slug?: string
  name?: string
  logo_url?: string
  quantity?: number
  favorite?: boolean
}

export type CatalogCountry = {
  __typename: 'CatalogCountry'
  id: string
  name?: string
  flag_url?: string
  quantity?: number
  favorite?: boolean
}
