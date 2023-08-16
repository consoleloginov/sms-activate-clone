import {createRouter, defineEventHandler, useBase} from 'h3'
import {serverSupabaseClient} from '#supabase/server'
import type {Database} from '@/supabase/types'

const router = createRouter()

const user_id = process.env.USER_ID

// * FAVORITES/ITEMS

router.post('/items/add', defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const {id} = await readBody<{id: string}>(event)

  const {error} = await supabase
    .from('favorite_items')
    .insert({item_id: id, user_id})

  if (error) console.log(error)
}))

router.post('/items/delete', defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const {id} = await readBody<{id: string}>(event)

  const {error} = await supabase
    .from('favorite_items')
    .delete()
    .eq('item_id', id)
    .eq('user_id', user_id)

  if (error) console.log(error)
}))

// * FAVORITES/COUNTRIES

router.post('/countries/add', defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const {id} = await readBody<{id: string}>(event)

  const {error} = await supabase
    .from('favorite_countries')
    .insert({country_id: id, user_id})

  if (error) console.log(error)
}))

router.post('/items/delete', defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const {id} = await readBody<{id: string}>(event)

  const {error} = await supabase
    .from('favorite_countries')
    .delete()
    .eq('country_id', id)
    .eq('user_id', user_id)

  if (error) console.log(error)
}))

export default useBase('/api/catalog/favorites', router.handler)
