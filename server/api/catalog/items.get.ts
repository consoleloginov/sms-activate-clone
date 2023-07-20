import response from '@/heap/getAllServicesDesktop-response-example.json'

export default defineEventHandler(() => {
  const items = response.data.map((item) => {
    const substr = '<small>+переадресация</small>'
    if (item.forward) {
      item.name = item.name.slice(0, -substr.length)
    }
    return item
  })

  return items
})
