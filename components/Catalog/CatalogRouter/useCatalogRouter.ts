import {defineStore, acceptHMRUpdate} from 'pinia'

export type CatalogRoute =
  | '/'
  | '/items'
  | '/countries'
  | '/:slug/countries'
  // | '/countries/:slug/items'


export const useCatalogRouter = defineStore('useCatalogRouter', () => {
  let route = $ref<CatalogRoute>('/')

  return $$({
    route,
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatalogRouter, import.meta.hot))
}
