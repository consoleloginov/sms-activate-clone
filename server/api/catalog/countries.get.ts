import response from '@/heap/countriesStackRender-response-example.json'

export default defineEventHandler((event) => {
  let {offset, limit} = getQuery(event)

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const countries = response.data.cards

  return countries.slice(offset, offset + limit)
})
