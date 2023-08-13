import {sql} from './db-client'

import response from '../heap/countriesStackRender-response-example.json'

const countries = response.data.cards
  .map((__, index) => ({
    name: __.name,
    price: __.prices.min,
    quantity: __.totalCount,
    flag_url: `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/${__.country}.svg`,
    keywords: __.searchName,
    priority: index,
    __
  }))

async function insertCountries() {
  const result = await sql`
    insert into countries ${
      sql(countries, 'name', 'flag_url', 'price', 'quantity', 'priority', 'keywords')
    }
  `
}

insertCountries()
