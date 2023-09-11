/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //extend: {},
    colors: {
      base: '#D9D9D9',
      primary: '#3056D3',
      secondary: '#13C296',
      dark: '#212B36',
      textcolor: '#637381'
      // ...
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}

