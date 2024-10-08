const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3662E3',
        lightblue: '#C2DAF9',
        dark: '#121826',     
        lightgray: '#E5E7EB',
        white: '#FFFFFF',    
        lightwhite: '#F9FAFB',
        darkgray: '#212936',  
        graytext: '#4D5562',  
        transparentwhite: '#F9FAFBCC'
      },
      keyframes:{
        'horizontal-slide':{
          '0%' : { transform : 'translateX(-100%)'},
          '100%' : {transform : 'translateX(100%)'}
        }
      },
      animation:{
        'horizontal-slide': 'horizontal-slide 1.5s ease-in-out infintite'
      },
    },
  },
  plugins: [],
}