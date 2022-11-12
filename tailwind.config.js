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
          '50': '#ebfef5',
          '100': '#d0fbe6',
          '200': '#a4f6d1',
          '300': '#6aebba',
          '400': '#2fd89c',
          '500': '#0abf86',
          '600': '#009b6d',
          '700': '#007c5b',
          '800': '#036248',
          '900': '#034333',
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
      }
    },
  },
  plugins: [],
}