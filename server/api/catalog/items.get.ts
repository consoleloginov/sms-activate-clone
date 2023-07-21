import response from '@/heap/getAllServicesDesktop-response-example.json'

export default defineEventHandler((event) => {
  let {offset, limit} = getQuery(event)

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const items = response.data.map((item) => {
    const substr = '<small>+переадресация</small>'
    if (item.forward) {
      item.name = item.name.slice(0, -substr.length)
    }
    return item
  }).slice(offset, offset + limit)

  return items
})
