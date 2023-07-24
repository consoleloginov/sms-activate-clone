import {omit} from 'radash'

import response from '@/heap/getAllServicesDesktop-response-example.json'

const items = response.data
  .filter(({forward}) => !forward)
  .map(({
    shortName,
    name,
    minPrice,
    nameSearch,
  }) => ({
    id: shortName,
    name,
    minPrice,
    logo_url: `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${shortName}0.webp`,
    _nameSearch: nameSearch,
  }))

export default defineEventHandler((event) => {
  const queryParams = getQuery(event)

  let {offset, limit} = queryParams

  offset = offset ? parseInt(offset as string) : 0
  limit = limit ? parseInt(limit as string) : 50

  const searchQuery = queryParams.search as string ?? ''

  let result = items

  if (searchQuery) {
    result = result.filter(({_nameSearch}) => _nameSearch.includes(searchQuery))
  }

  return result
    .slice(offset, offset + limit)
    .map((item) => omit(item, ['_nameSearch']))
})
