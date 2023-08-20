import {serverSupabaseClient} from '#supabase/server'
import type {Database} from '@/supabase/types'

import {omit} from 'radash'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  // *

  const {slug: item_slug} = getRouterParams(event)

  // *

  const query = getQuery(event)

  let {
    offset: _offset,
    limit: _limit,
    sortBy: _sortBy,
  } = query as Record<string, string>

  // console.log(query)

  const offset = _offset ? parseInt(_offset) : 0
  const limit = _limit ? parseInt(_limit) : 50

  const from = offset
  const to = offset + limit

  // const searchQuery = queryParams.search as string ?? ''
  const sortBy =
    ['name', 'price', 'quantity'].includes(_sortBy) ? _sortBy : 'priority'

  // *

  const {data: item} = await supabase
    .from('items')
    .select()
    .eq('slug', item_slug)
    .single()

  // *

  if (item) {
    if (sortBy === 'name') {
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
        .order(sortBy)
        .range(from, to)

      const countries = countries_data!.map((country) => omit({
        __typename: 'CatalogCountry',
        ...country,
        ...country.pairs[0],
      }, ['pairs']))

      return countries
    }

    else {
      const {data: pairs_data} = await supabase
        .from('pairs')
        .select(`
          price,
          quantity,
          country:country_id(
            id,
            name,
            flag_url
          )
        `)
        .eq('item_id', item.id)
        .order(sortBy, {ascending: sortBy !== 'quantity'})
        .range(from, to)

      const countries = pairs_data!.map((pair) => omit({
        __typename: 'CatalogCountry',
        ...pair.country,
        ...pair,
      }, ['country']))

      return countries
    }
  }

  return []
})
