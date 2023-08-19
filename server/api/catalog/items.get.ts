import {serverSupabaseClient} from '#supabase/server'
import type {Database} from '@/supabase/types'

const user_id = process.env.USER_ID

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  // *

  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const from = offset
  const to = offset + limit

  const searchQuery = queryParams.search as string ?? ''

  // *

  let result

  if (user_id) {
    const {data: favorite_items_data} = await supabase
      .from('favorite_items')
      .select('item:items(*)')
      .eq('user_id', user_id)

    const favorite_items = favorite_items_data!.map((obj) => obj.item!)
    const favorite_items_ids = favorite_items.map((item) => item.id)

    if (searchQuery || offset >= limit) {
      const {data: all_items_data} = await supabase
        .from('items')
        .select('*')
        .order('priority')
        .like('keywords', `%${searchQuery}%`)
        .range(from, to)

      const all_items = all_items_data!
      result = all_items
    }

    else {
      const {data: other_items_data} = await supabase
        .from('items')
        .select('*')
        .not('id', 'in', `(${favorite_items_ids.toString()})`)
        .order('priority')
        .limit(limit - favorite_items.length)

      const other_items = other_items_data!

      result = [
        ...favorite_items,
        ...other_items,
      ]
    }

    result = result.map((item) => ({...item,
      favorite: favorite_items_ids.includes(item.id),
    }))
  }

  else {
    const {data: all_items_data} = await supabase
      .from('items')
      .select('*')
      .order('priority')
      .like('keywords', `%${searchQuery}%`)
      .range(from, to)

    const all_items = all_items_data!
    result = all_items
  }

  result = result.map((item) => ({...item,
    __typename: 'CatalogItem',
  }))

  return result
})
