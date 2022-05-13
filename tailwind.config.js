module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      jost: 'Jost, cursive',
      inconsolata: 'Inconsolata',
      poppins: 'Poppins, sans-serif'
    },
    extend: {
      lineHeight: {
        20: '5rem'
      }
    },
    colors: {
      'yellow-main': '#ffe852',
      'dark-gray': '#071013',
      'gray-main': '#CAD3C8',
      'white-main': '#f9f9f9'
    },
    animation: {
      'bounce-slow': 'bounce 2s linear infinite'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
