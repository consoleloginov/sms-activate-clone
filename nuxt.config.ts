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
              path: '/auth/sign-up',
              file: '@/components/Auth/SignUp/SignUpForm.vue',
            },
            {
              path: '/auth/sign-in',
              file: '@/components/Auth/SignIn/SignInForm.vue',
            },
          ],
        },
      ])
    }
  },

  modules: [
    '@nuxthq/ui',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vue-macros/nuxt',
    '@vueuse/nuxt',
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

  vite: {
    clearScreen: false,
  }
})
