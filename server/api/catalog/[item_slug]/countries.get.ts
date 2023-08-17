import {serverSupabaseClient} from '#supabase/server'
import type {Database} from '@/supabase/types'

import {omit} from 'radash'

const user_id = process.env.USER_ID

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const {item_slug} = getRouterParams(event)

  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const from = offset
  const to = offset + limit

  const searchQuery = queryParams.search as string ?? ''
  const sortBy = queryParams.sortBy as 'price' | 'quantity' ?? 'priority'

  //

  const {data: item} = await supabase
    .from('items')
    .select()
    .eq('slug', item_slug)
    .single()

  if (item) {
    const {data: favorite_countries_data} = await supabase
      .from('favorite_countries')
      .select('country:countries(*)')
      .eq('user_id', user_id)

    const favorite_countries = favorite_countries_data!.map(({country}) => country!)
    const favorite_countries_ids = favorite_countries.map((country) => country.id)

    const {data: pairs} = await supabase
      .from('pairs')
      .select(`
        price,
        quantity,
        priority,
        country:countries(*)
      `)
      .eq('item_id', item.id)
      .order(sortBy, {ascending: sortBy !== 'quantity'})
      // .like('countries.keywords', `%${searchQuery}%`)
      .range(from, to)

    const countries = pairs!.map((pair) => ({
      __typename: 'CatalogCountryItem',
      ...pair.country,
      ...pair,
      favorite: favorite_countries_ids.includes(pair.country!.id),
    })).map((country) => omit(country, ['country']))

    return countries
  }

  return 'not found'
})
