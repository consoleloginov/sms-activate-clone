export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },

  modules: [
    // '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vue-macros/nuxt',
    '@vueuse/nuxt',
  ],

  // googleFonts: {
  //   families: {
  //     'Exo 2': [400, 600],
  //   },
  // },

  pinia: {
    autoImports: ['defineStore'],
  },
})
