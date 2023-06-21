/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('./assets/home-background.JPG')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

