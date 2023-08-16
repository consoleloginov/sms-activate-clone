import {sql} from './db-client'

import INSTAGRAM_responseExample from './countriesStackRender-INSTAGRAM-responseExample.json'
import TELEGRAM_responseExample from './countriesStackRender-TELEGRAM-responseExample.json'
import TWITTER_responseExample from './countriesStackRender-TWITTER-responseExample.json'

type ResponseExample =
  | typeof INSTAGRAM_responseExample
  | typeof TELEGRAM_responseExample
  | typeof TWITTER_responseExample

export type Country = {
  id: string
  old_id: string;
  name: string;
  flag_url: string;
  keywords: string;
}

function toCountries(data: ResponseExample) {
  return data.data.cards.map((__) => ({
    old_id: __.country.toString(),
    name: __.name,
    flag_url: `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/${__.country}.svg`,
    keywords: __.searchName,
  }))
}

const INSTAGRAM_countries = toCountries(INSTAGRAM_responseExample)
const TELEGRAM_countries = toCountries(TELEGRAM_responseExample)
const TWITTER_countries = toCountries(TWITTER_responseExample)

const countries = INSTAGRAM_countries

;[...TELEGRAM_countries,
  ...TWITTER_countries
].forEach((c1) => {
  if (!countries.find((c0) => c1.old_id === c0.old_id)) {
    countries.push(c1)
  }
})

async function insertCountries() {
  await sql`
    INSERT INTO countries ${
      sql(countries)
    }
  `
}

async function main() {
  await insertCountries()
  await sql.end()
}
main()
