const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,tsx}',
    './App.vue'
  ],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Exo 2"', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        '600': 600,
      }
    },
  },

  plugins: [
    plugin(({matchUtilities}) => {
      matchUtilities({
        'grid-area': (value) => ({
          'grid-area': value,
        })
      })
    })
  ],
}
