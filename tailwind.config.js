/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Handlee: ["Handlee", "cursive"],
        DaiBanna: ["Dai Banna SIL", "serif"],
        Merriweather: ["Merriweather", "serif"],
        Sacramento: ["Sacramento", "cursive"],
      },
      backgroundImage: {
        'main': "url('./assets/main.jpeg')",
        'mountains': "url('./assets/mountains-2.jpeg')",
      },
      screens: {
        'xs': "550px",
      },
      colors: {
        'regal-blue': '#0C467F',
        'regal-purple': '#514FB5',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
