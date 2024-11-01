/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn1:'#23BE0A',
        btn2:'#59C6D2'
      }
    },
  },
  plugins: [require('daisyui'),],
}

