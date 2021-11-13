const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#BB86FC',
        secondary: '#03DAC6',
        gray: colors.trueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
