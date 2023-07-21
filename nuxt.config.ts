export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  googleFonts: {
    families: {
      'Exo 2': [400, 600],
    },
  },
})
