/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-desktop': "url('./assets/bg-desktop-light.jpg')"
      }
    },
  },
  plugins: [],
}

