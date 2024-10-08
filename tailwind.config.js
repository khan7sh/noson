/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000', // Deep Burgundy Red
        secondary: '#556B2F', // Dark Olive Green
        accent: '#D2B48C', // Tan
        background: '#FFF8DC', // Cornsilk (light beige)
        text: '#4A4A4A', // Dark Gray
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}