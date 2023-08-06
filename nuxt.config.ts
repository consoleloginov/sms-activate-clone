export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },

  components: [{path: '@/components', pathPrefix: false}],

  modules: [
    '@nuxthq/ui',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vue-macros/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],

  ui: {
    prefix: 'Nuxt',
  },

  colorMode: {
    preference: 'light',
  },

  // googleFonts: {
  //   families: {
  //     'Exo 2': [400, 600],
  //   },
  // },

  pinia: {
    autoImports: ['defineStore'],
  },

  supabase: {
    redirect: false,
  },

  vite: {
    clearScreen: false,
  }
})
