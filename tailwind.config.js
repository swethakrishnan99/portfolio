/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        vidaloka: ['Vidaloka', 'cursive'],
        roboto: ["Roboto", "Monoton"],
      },

      background: {
        'radial-gradient': "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(5,18,103,1) 59%))",
      }, keyframes: {

        background1: {
          "0%": { "opacity": "50%", },
          "50%": { "opacity": "100%", },
          "100%": { "opacity": "50%", }
        },
        background2: {
          "0%": { "opacity": "100%" },
          "50%": { "opacity": "50%" },
          "100%": { "opacity": "100%" },
        },
      },
      animation: {
        background1: "background1 5s linear infinite",
        background2: "background2 5s linear infinite",
        background3: "background2 5s ease-in-out infinite",
        background4: "background1 5s ease-in-out infinite"
      },

    },
  },
  plugins: [],
}

