/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Bebas: ['Bebas Neue', 'cursive'],
        Lato: ['Lato', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        Myriad: ["myriad-pro", 'sans-serif']
      }, 
    },
    colors: {
      'main-blue': '#414f6b',
      'main-gray': '#4d4d4d',
      'secondary-gray': '#b0b4be',
      'white': '#fff',
      'red': '#FF0000',
    },
    screens: {
      'phone': '530px',
    },
  },
  plugins: [],
}
