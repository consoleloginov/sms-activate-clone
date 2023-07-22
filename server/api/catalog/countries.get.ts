import response from '@/heap/countriesStackRender-response-example.json'

export default defineEventHandler((event) => {
  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const sortBy = queryParams.sortBy as 'price' | 'count' | undefined

  const countries = response.data.cards

  let result = countries.map(({country, name, count, prices}) => ({
    country, name, count, price: prices.min,
  }))

  if (sortBy) {
    result.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'count') return b.count - a.count
      else return 0
    })
  }

  result = result.slice(offset, offset + limit)

  return result
})
