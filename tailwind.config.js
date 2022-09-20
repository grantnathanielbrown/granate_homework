/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      "80": "20rem",
      "screen": "100vh"
    },
    extend: {},
  },
  plugins: [],
}