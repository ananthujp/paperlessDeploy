const colors = require('tailwindcss/colors')
module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia : colors.fuchsia,
        cyan : colors.cyan,
        blue: colors.blue,
        orange:colors.orange,
        pink:colors.pink,
        rose:colors.rose,
      },
      fontFamily: {
        'beb': 'Bebas, Arial',
        'treb': 'Trebuchet, Arial',
        'gloria': 'Gloria, Arial',
      },
      backgroundColor: {
        'des3bg':'#3e1944'
      },
      backgroundImage: {
        'des1-circle1':"url('./media/bg.svg')",
        'des1-lamp1':"url('./media/lamps.svg')",
        'homebg':"url('./media/Homebg.svg')",
        'des1':"url('./media/Des1.svg')",
        'des2':"url('./media/Des2.svg')",
        'des3':"url('./media/Des3.svg')",
        'des4':"url('./media/Des4.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
