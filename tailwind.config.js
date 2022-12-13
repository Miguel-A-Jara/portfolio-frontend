/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#F6FDFD',
          '100': '#E5FAF9',
          '200': '#C3F4F0',
          '300': '#A1EDE8',
          '400': '#7EE7DF',
          '500': '#5CE0D7',
          '600': '#2DD7CB',
          '700': '#21ABA1',
          '800': '#187C75',
          '900': '#0F4D49'
        },
        'secondary': {
          '50': '#edfbfe',
          '100': '#d2f3fb',
          '200': '#abe7f6',
          '300': '#72d4ee',
          '400': '#31b7df',
          '500': '#159ac5',
          '600': '#147ba6',
          '700': '#036686',
          '800': '#032233',
          '900': '#08141b',
        },
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif']
      }
    },
  },
  plugins: [],
});