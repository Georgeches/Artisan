/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: { "cart-btn": "rgb(202, 135, 54)" },
      colors: { "star-color": "rgb(255,189,88)" },
    },
  },
  plugins: [],
}

