module.exports = {
  content: [
    './src/**/*.{html,js,tsx, ts}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './src/**/*.svg', './src/**/*.{js,ts,jsx,tsx}'
   
  ],
  theme: {
    extend: {
      colors : {
        hireNow : "#1dc704",
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
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar-hide')
  ],
  variants: {
    scrollbar: ['rounded']
}
}
