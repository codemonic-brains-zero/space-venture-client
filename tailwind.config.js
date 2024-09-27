/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-pink': '#F5E3E0',
        'soft-pink': '#E8B4BC',
        'muted-pink': '#D282A6',
        'dark-mauve': '#6E4555',
        'dark-grayish-brown': '#3A3238',
      },
    },
  },
  plugins: [],
}