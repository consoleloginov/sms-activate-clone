export type CatalogItem = {
  __typename: string
  id: string
  slug?: string | null
  name?: string | null
  logo_url?: string | null
  quantity?: number | null
  favorite?: boolean
}

export type CatalogCountry = {
  __typename: string
  id: string
  name?: string | null
  flag_url?: string | null
  price?: string | number
  quantity?: number | null
  favorite?: boolean
}
