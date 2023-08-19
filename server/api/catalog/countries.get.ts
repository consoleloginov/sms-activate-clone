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
  const sortBy = queryParams.sortBy as 'price' | 'quantity' | undefined

  // *

  let result

  if (user_id) {
    const {data: favorite_countries_data} = await supabase
      .from('favorite_countries')
      .select('country:countries(*)')
      .eq('user_id', user_id)

    const favorite_countries = favorite_countries_data!.map((obj) => obj.country!)
    const favorite_countries_ids = favorite_countries.map((country) => country.id)

    if (searchQuery || offset >= limit) {
      const {data: all_countries_data} = await supabase
        .from('countries')
        .select('*')
        .order('priority')
        .like('keywords', `%${searchQuery}%`)
        .range(from, to)

      const all_countries = all_countries_data!
      result = all_countries
    }

    else {
      const {data: other_countries_data} = await supabase
        .from('countries')
        .select('*')
        .not('id', 'in', `(${favorite_countries_ids.toString()})`)
        .order('priority')
        .limit(limit - favorite_countries.length)

      const other_countries = other_countries_data!

      result = [
        ...favorite_countries,
        ...other_countries,
      ]
    }

    result = result.map((country) => ({...country,
      favorite: favorite_countries_ids.includes(country.id),
    }))
  }

  else {
    const {data: all_countries_data} = await supabase
      .from('countries')
      .select('*')
      .order('priority')
      .like('keywords', `%${searchQuery}%`)
      .range(from, to)

    const all_countries = all_countries_data!
    result = all_countries
  }

  result = result.map((country) => ({...country,
    __typename: 'CatalogCountry',
  }))

  return result
})
