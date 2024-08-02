/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.{html,md,njk,js}", "_includes/**/*.{html,md,njk,js}"],
	theme: {
		extend: {
			colors: {
				primary: {
					900: "#610404",
					800: "#780A0A",
					700: "#911111",
					600: "#A61B1B",
					500: "#BA2525",
					400: "#D64545",
					300: "#E66A6A",
					200: "#F29B9B",
					100: "#FACDCD",
					50: "#FFEEEE",
				},
				// vivid
				secondary: {
					900: "#8D2B0B",
					800: "#B44D12",
					700: "#CB6E17",
					600: "#DE911D",
					500: "#F0B429",
					400: "#F7C948",
					300: "#FADB5F",
					200: "#FCE588",
					100: "#FFF3C4",
					50: "#FFFBEA",
				},
				// warm grey
				neutral: {
					900: "#27241D",
					800: "#423D33",
					700: "#504A40",
					600: "#625D52",
					500: "#857F72",
					400: "#A39E93",
					300: "#B8B2A7",
					200: "#D3CEC4",
					100: "#E8E6E1",
					50: "#FAF9F7",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [require("@tailwindcss/typography")],
};
