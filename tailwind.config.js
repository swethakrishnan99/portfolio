/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'cursive'],
        poppins: ["Poppins", "Monoton"],
      },

      backgroundImage: {
        'hero-pattern': "url('/src/Images/bghome.png')",
      }
    },
  },
  plugins: [],
}

