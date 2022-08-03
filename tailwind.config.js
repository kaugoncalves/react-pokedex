/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        "grass": '#5FBD58',
        "bug": '#92BC2C',
        "dark": '#595761',
        "dragon": '#0C69C8',
        "electric": '#F2D94E',
        "fairy": '#EE90E6',
        "fighting": '#D3425F',
        "fire": '#dc872f',
        "flying": '#A1BBEC',
        "ghost": '#5F6DBC',
        "ground": '#DA7C4D',
        "ice": '#75D0C1',
        "poison": '#B763CF',
        "psychic": '#ff2ca8',
        "rock": '#a38c21',
        "steel": '#5695A3',
        "water": '#539DDF',
      }
    },
    screens: {
      'sm': '576px',
  
      'md': '900px',
  
      'lg': '1440px',
  
    },
  },
  plugins: [],

}
