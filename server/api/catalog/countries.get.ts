import {serverSupabaseClient} from '#supabase/server'
import type {Database} from '@/supabase/types'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const from = offset
  const to = offset + limit

  const searchQuery = queryParams.search as string ?? ''
  const sortBy = queryParams.sortBy as 'price' | 'quantity' ?? 'priority'

  const {data} = await supabase
    .from('countries')
    .select('*')
    .order(sortBy, { ascending: sortBy !== 'quantity'})
    .like('keywords', `%${searchQuery}%`)
    .range(from, to)

  return data
})
