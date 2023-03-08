/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
      '4xl': '2280px',
    },
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
