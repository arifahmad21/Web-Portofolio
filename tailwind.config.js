/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        'poppins' : 'Poppins'
      },
      borderRadius: {
        'bg': '2rem',
      }
    },
  },
  plugins: [],
}