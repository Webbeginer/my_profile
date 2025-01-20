/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      fontFamily: {
        inter: ['inter']
      },
      colors: {
        primary: '#14b8a6',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

