import {sql} from './db-client'

import {type Country} from './about-countries'

import INSTAGRAM_responseExample from './countriesStackRender-INSTAGRAM-responseExample.json'
import TELEGRAM_responseExample from './countriesStackRender-TELEGRAM-responseExample.json'
import TWITTER_responseExample from './countriesStackRender-TWITTER-responseExample.json'

export type Pair = {
  id: string
  item_id: string
  country_id: string
  price: number
  quantity: number
  priority: number
}

type ResponseExample =
  | typeof INSTAGRAM_responseExample
  | typeof TELEGRAM_responseExample
  | typeof TWITTER_responseExample

function toPairs(
  data: ResponseExample,
  countries: Country[],
  item_id: string
) {
  return data.data.cards
    .map((__, index) => ({
      item_id,
      country_id: countries.find(({old_id}) => __.country.toString() === old_id).id,
      price: __.prices.min,
      quantity: __.totalCount,
      priority: index,
    }))
}

const INSTAGRAM_item_id = 'd45f1ec5-0896-43d4-a1f3-e8e18e5ca9ea'
const TELEGRAM_item_id = '305f8fd1-3acf-4837-bee4-bc7e0001f2fe'
const TWITTER_item_id = '209e9571-1a7b-412e-af5d-2dee9aa9f645'

async function insertPairs() {
  const countries = await sql<Country[]>`
    SELECT id, old_id FROM countries
  `

  const INSTAGRAM_pairs = toPairs(INSTAGRAM_responseExample, countries, INSTAGRAM_item_id)
  const TELEGRAM_pairs = toPairs(TELEGRAM_responseExample, countries, TELEGRAM_item_id)
  const TWITTER_pairs = toPairs(TWITTER_responseExample, countries, TWITTER_item_id)

  const pairs = [
    ...INSTAGRAM_pairs,
    ...TELEGRAM_pairs,
    ...TWITTER_pairs,
  ]

  await sql`
    INSERT INTO pairs ${
      sql(pairs)
    }
  `
}

async function main() {
  await insertPairs()
  await sql.end()
}
main()
