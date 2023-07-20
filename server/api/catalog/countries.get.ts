import response from '@/heap/countriesStackRender-response-example.json'

export default defineEventHandler(() => {
  const items = response.data.cards
  return items
})
