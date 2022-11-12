/** @type {import('tailwindcss').Config} */
module.exports = {
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
          '50': '#ebfef7',
          '100': '#cffcea',
          '200': '#a4f6d9',
          '300': '#69ecc7',
          '400': '#26d9ac',
          '500': '#08c199',
          '600': '#009d7d',
          '700': '#007d67',
          '800': '#026353',
          '900': '#035146',
        },
        'secondary': {
          '50': '#edfbfe',
          '100': '#d2f3fb',
          '200': '#abe7f6',
          '300': '#72d4ee',
          '400': '#31b7df',
          '500': '#159ac5',
          '600': '#147ba6',
          '700': '#186486',
          '800': '#1c526e',
          '900': '#08141b',
        },
      }
    },
  },
  plugins: [],
}