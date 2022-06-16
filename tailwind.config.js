module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        tela: "1920px",
      },
      spacing: {
        custom: "150px",
        navbartop: "0.8rem",
        navbarbottom: "0.8rem",
        book: "85vh",
      },
      fontSize: {
        xxs: ".65rem",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
    colors: {
      theme: "#000013",
      golden: "#D6A84C",
      lightGolden: "#D0B281",
      gray1: "#91A3AD",
      white2: "#FEF2E8",
      theme2: "#04042D",
      preto: "#000000",
    },
    backgroundImage: {
      background: "url('/fundo.jpg')",
      gifTab: "url('/DualRing.svg')",
      bolinha: "url('/bolinha.png')",
      banner1: "url('/banner.jpg')",
      fumaca1: "url('/luz_livro.png')",
      fumaca2: "url('/luz_personagem.png')",
      fumaca3: "url('/luz_franquia.png')",
      fumaca4: "url('/luz_academy.png')",
      fumaca5: "url('/luz_celular.png')",
      bg1: "url('/background.jpg')",
      bg2: "url('/background2.jpg')",
      elem1: "url('/element1.png')",
      elem2: "url('/element2.png')",
      elem3: "url('/element3.png')",
      elem4: "url('/element4.png')",
      elem5: "url('/element5.png')",
      elem6: "url('/element6.png')",
      elem7: "url('/element7.png')",
      bg3: "url('/background3.jpg')",
      bg4: "url('/background4.jpg')",
      bg5: "url('/background5.jpg')",
      bg6: "url('/background6.jpg')",
      bg7: "url('/background7.jpg')",
    },
    fontFamily: {
      gotham: "Gotham HTF Medium",
      gothamBold: "Gotham",
    },
    textUnderlineOffset: {
      10: "1.3rem",
    },
    gradientColorStops: {
      theme: "#000013",
      theme2: "#04042D",
    },
  },
  plugins: [],
};
