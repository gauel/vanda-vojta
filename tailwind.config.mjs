/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				black: "#353535",
				beige: {
					DEFAULT: "#FFFBF6",
					50: "#FFFBF6",
					100: "#FFEFDA",
					200: "#EAD1B2",
					300: "#D3B189",
					400: "#FFA432",
					500: "#F98A00",
					600: "#C06B00",
					700: "#884C00",
					800: "#502D00",
					900: "#180D00",
					950: "#000000",
				},
			},
			height: {
				screen: "100lvh",
			},
			screens: {
				xs: "390px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
				"3xl": "1536px",
				"4xl": "1920px",
				"5xl": "2560px",
				"6xl": "3840px",
			},
		},
	},
};
