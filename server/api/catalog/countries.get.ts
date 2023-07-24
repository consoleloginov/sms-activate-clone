import response from '@/heap/countriesStackRender-response-example.json'

const countries = response.data.cards.map(({
  country,
  name,
  totalCount,
  prices
}) => ({
  id: country.toString(),
  name,
  quantity: totalCount,
  price: prices.min,
  flag_url: `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/${country}.svg`
}))

export default defineEventHandler((event) => {
  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const sortBy = queryParams.sortBy as 'price' | 'quantity' | undefined

  let result = countries.slice()

  if (sortBy) {
    result.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'quantity') return b.quantity - a.quantity
      else return 0
    })
  }

  return result
    .slice(offset, offset + limit)
})
