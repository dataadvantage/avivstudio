/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.{html,md,njk,js}", "_includes/**/*.{html,md,njk,js}"],
	theme: {
		extend: {
			colors: {},
		},
	},
	darkMode: "class",
	plugins: [require("@tailwindcss/typography")],
};
