/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"peach-100": "#fff2e6",
				"peach-200": "#ffe6cc",
				"peach-300": "#ffd9b3",
				"peach-400": "#ffcc99",
				"peach-500": "#ffbf80",
				"peach-600": "#ffb366",
				"peach-700": "#ff9933",
				"peach-800": "#ffa64d",
			},
		},
	},
	plugins: [],
};
