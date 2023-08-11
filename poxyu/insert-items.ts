import {sql} from './db-client'

import response from '../heap/getAllServicesDesktop-response-example.json'

const items = response.data
  .filter(({forward}) => !forward)
  .map((__) => ({
    name: __.name,
    logo_url: `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${__.shortName}0.webp`,
    min_price: __.minPrice,
    priority: __.sellTop,
    keywords: __.nameSearch,
    __
  }))

async function insertItems() {
  const result = await sql`
    insert into items ${
      sql(items, 'name', 'logo_url', 'min_price', 'priority', 'keywords')
    }
  `
}

insertItems()
