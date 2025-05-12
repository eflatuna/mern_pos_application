/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-green": "#4F7A21",
				"dark-green": "#2B4212",
				"light-blue": "#2E90FA",
				"dark-blue": "#194185",
				"light-yellow": "#CA8504",
				"dark-yellow": "#854A0E",
				"light-red": "#FF4405",
				"dark-red": "#BC1B06",
				"danger-light": "#F8D7DA",
				"danger-dark": "#C62828",
			},
			gridTemplateColumns: {
				card: "repeat(auto-fill,minmax(150px,1fr))",
			},
		},
	},
	plugins: [],
};
