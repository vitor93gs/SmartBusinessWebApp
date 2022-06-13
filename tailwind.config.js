module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				custom: '150px',
				navbartop: '0.8rem',
				navbarbottom: '0.8rem',
			},
			fontSize: {
				xxs: '.65rem',
			},
			transitionDuration: {
				0: '0ms',
				2000: '2000ms',
			},
		},
		colors: {
			theme: '#000013',
			golden: '#D6A84C',
			lightGolden: '#D0B281',
			gray1: '#91A3AD',
			white2: '#FEF2E8',
			theme2: '#04042D',
			preto: '#000000',
		},
		backgroundImage: {
			background: "url('/fundo.jpg')",
			gifTab: "url('/DualRing.svg')",
			bolinha: "url('/bolinha.png')",
			banner1: "url('/banner.jpg')",
			fumaca: "url('/fumaça1.png')",
			fumaca2: "url('/fumaça2.png')",
			bg1: "url('/background1.png')",
			bg2: "url('/background2.png')",
			elem1: "url('/element1.png')",
			bg3: "url('/background3.png')",
			bg4: "url('/background4.png')",
			bg5: "url('/background5.png')",
			bg6: "url('/background6.png')",
		},
		fontFamily: {
			gotham: 'Gotham HTF Medium',
			gothamBold: 'Gotham',
		},
		textUnderlineOffset: {
			10: '1.3rem',
		},
		gradientColorStops: {
			theme: '#000013',
			theme2: '#04042D',
		},
	},
	plugins: [],
};
