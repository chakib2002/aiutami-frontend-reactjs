module.exports = {
  purge: ['./src/**/*.{svg}', './src/**/*.{js,ts,jsx,tsx}'],
  content: [
    './src/**/*.{html,js,tsx, ts}',
    './node_modules/tw-elements/dist/js/**/*.js'
   
  ],
  theme: {
    extend: {
      colors : {
        primary: '#42C2FF',
        secondary :'#EFFFFD',
        bluedark : '#063970',
        white : '#ffffff',
        dark:'#000000',
        green : '#519259',
        darkgreen :'#064635',
        lightgray : '#D4D4D4'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
