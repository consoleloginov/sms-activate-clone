import response from '@/heap/getAllServicesDesktop-response-example.json'

export default defineEventHandler((event) => {
  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const searchQuery = queryParams.search as string ?? ''

  const items = response.data
  let result = items

  if (searchQuery) {
    result = result.filter(({ nameSearch}) => nameSearch.includes(searchQuery))
  }

  result = result.slice(offset, offset + limit)

  result.map((item) => {
    const substr = '<small>+переадресация</small>'
    if (item.forward) {
      item.name = item.name.slice(0, -substr.length)
    }
    return item
  })

  return result
})
