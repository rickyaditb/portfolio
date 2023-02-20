/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        main: "#050010",
        secondary: "#875BF7"
      },
      scale: {
        '102': '1.02'
      }
    },
  },
  plugins: [],
}
