/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			"xs": "470px",
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1536px",
		},
		extend: {
			backgroundImage: {
				"radial-hero": "radial-gradient(ellipse at 50% 40vh, var(--tw-gradient-stops))",
				"top-bottom": "linear-gradient(0deg, var(--tw-gradient-from) 0%, var(--tw-gradient-from) 70%, var(--tw-gradient-to) 100%",
				"gradient-in": "linear-gradient(180deg, transparent 0%, var(--tw-gradient-to) 100%)",
				"gradient-out": "linear-gradient(0deg, transparent 0%, var(--tw-gradient-to) 100%)",
			},
			colors: {
				"background": {
					DEFAULT: "#131415",
					"other": "#1f2024",
				},
				"main": "#D5D5CD",
				"accent": "#F7D482",
			}
		},
	},
	plugins: [],
};
