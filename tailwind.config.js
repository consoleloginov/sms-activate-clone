const defaultTheme = require('tailwindcss/defaultTheme')

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
    },
  },
}
