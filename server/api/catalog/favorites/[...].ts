import {createRouter, defineEventHandler, useBase} from 'h3'
import {serverSupabaseClient} from '#supabase/server'
import type {Database} from '@/supabase/types'

const router = createRouter()

const user_id = process.env.USER_ID

router.post('/add', defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const {item_id} = await readBody<{item_id: string}>(event)

  const {error} = await supabase
    .from('favorite_items')
    .insert({item_id, user_id})

  if (error) console.log(error)
}))

router.post('/delete', defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<Database>(event)

  const {item_id} = await readBody<{item_id: string}>(event)

  const {error} = await supabase
    .from('favorite_items')
    .delete()
    .eq('item_id', item_id)
    .eq('user_id', user_id)

  if (error) console.log(error)
}))

export default useBase('/api/catalog/favorites', router.handler)
