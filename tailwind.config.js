module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      theme: "#000013",
      golden: "#D6A84C",
      lightGolden: "#D0B281",
      gray1: "#91A3AD",
      white2: "#FEF2E8",
      theme2: "#04042D",
    },
    backgroundImage: {
      background: "url('/fundo.png')",
    },
    fontFamily: {
      gotham: "Gotham HTF Medium",
    },
    textUnderlineOffset: {
      10: "1.3rem",
    },
  },
  plugins: [],
};
