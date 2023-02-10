/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', "sans-serif"]
    },
    maxWidth: {
      '2/3': '60%',
    }
  },
  plugins: [],
}
