/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      ftitulo: ["Yantramanav", "sans-serif"],
      fsubtitulo: ["Cormorant Infant", "serif"],
      ftexto: ["Mulish", "sans-serif"],

      // roboto: ["Roboto", "sans-serif"],
      // passion: ["Passion One", "cursive"],
    },
    colors: {
      cfondo: "#0d3b66",
      ctitulo: "#f4d35e",
      ctexto: "#faf0ca",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
