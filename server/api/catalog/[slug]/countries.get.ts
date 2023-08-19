import {serverSupabaseClient} from '#supabase/server'
import type {Database} from '@/supabase/types'

import {omit} from 'radash'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  // *

  const {slug: item_slug} = getRouterParams(event)

  // *

  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const from = offset
  const to = offset + limit

  // const searchQuery = queryParams.search as string ?? ''
  const sortBy = queryParams.sortBy as 'price' | 'quantity' ?? 'priority'

  // *

  const {data: item} = await supabase
    .from('items')
    .select()
    .eq('slug', item_slug)
    .single()

  // *

  if (item) {
    const {data: countries_data} = await supabase
      .from('countries')
      .select(`
        id,
        name,
        flag_url,
        pairs(
          price,
          quantity
        )
      `)
      .eq('pairs.item_id', item.id)
      .order(sortBy, {ascending: sortBy !== 'quantity'})
      .range(from, to)

    const countries = countries_data!.map((country) => omit({
      __typename: 'CatalogCountry',
      ...country,
      ...country.pairs[0],
    }, ['pairs']))

    return countries
  }

  return []
})
