module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        'beb': 'Bebas, Arial',
        'treb': 'Trebuchet, Arial',
        
      },
      backgroundColor: {
        'des3bg':'#3e1944'
      },
      backgroundImage: {
        'des1-circle1':"url('./media/bg.svg')",
        'des1-lamp1':"url('./media/lamps.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
