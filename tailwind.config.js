/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Handlee: ["Handlee", "cursive"],
        DaiBanna: ["Dai Banna SIL", "serif"],
        Sacramento: ["Sacramento", "cursive"],
      },
      backgroundImage: {
        'main': "url('./assets/main.jpeg')",
        'mountains': "url('./assets/mountains-2.jpeg')",
      },
      screens: {
        'xs': "550px",
      },
    },
  },
  plugins: [],
}
