import {serverSupabaseClient} from '#supabase/server'
import type {Database} from '@/supabase/types'

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
    const {data} = await supabase
      .from('pairs')
      .select(`
        price,
        quantity,
        priority,
        country:country_id(
          name,
          flag_url,
          keywords
        )
      `)
      .eq('item_id', item.id)
      .order(sortBy, { ascending: sortBy !== 'quantity'})
      .like('country.keywords', `%${searchQuery}%`)
      .range(from, to)

    return data?.map((pair) => ({
      ...pair,
      ...pair.country,
    }))
  }

  return 'not found'
})
