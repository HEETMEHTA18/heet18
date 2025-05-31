/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Lato', 'sans-serif'],
        serif: ['Roboto', 'Lato', 'serif'], // Or a different serif font if needed
        // Add other font families if necessary
      },
    },
  },
  plugins: [],
} 