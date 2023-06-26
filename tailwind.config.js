/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#5f4b8b',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

