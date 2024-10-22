/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,md,mdx,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        highlight: "#DAFF00",
        brand: {
          red: {
            DEFAULT: "#FF3333",
          },
          blue: {
            DEFAULT: "#33B0FF",
          }
        }
      }
    },
  },
  plugins: [],
}
