export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },

  hooks: {
    'pages:extend'(pages) {
      pages.push(...[
        {
          path: '/auth',
          file: '@/components/Auth/AuthPage.vue',
          children: [
            {
              path: '/auth/signup',
              file: '@/components/Auth/SignUp/SignUpForm.vue',
            },
          ],
        },
      ])
    }
  },

  modules: [
    '@nuxthq/ui',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vue-macros/nuxt',
    '@vueuse/nuxt',
  ],

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
})
