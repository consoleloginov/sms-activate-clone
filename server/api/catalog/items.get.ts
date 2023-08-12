import {serverSupabaseClient} from '#supabase/server'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)

  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const from = offset
  const to = offset + limit

  const searchQuery = queryParams.search as string ?? ''

  const {data} = await supabase
    .from('items')
    .select('*')
    .order('priority')
    .like('keywords', `%${searchQuery}%`)
    .range(from, to)

  return data
})
