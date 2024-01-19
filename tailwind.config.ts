import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				logoimg: "url('/kopcarqlogo.png')",
			},
			animation: {
				slideOutAnimation: "slideOutAnimation 5s",
				slideInAnimation: "slideInAnimation 4s",
				fadeUpAnimation: "fadeUpAnimation 3s",
			},

			keyframes: {
				slideOutAnimation: {
					from: {
						transform: "translateX(0%)",
						opacity: "1",
					},
					to: {
						transform: "translateX(-100%)",
						opacity: "0.3",
					},
				},
				slideInAnimation: {
					from: {
						transform: "translateX(100%)",
						opacity: "0.7",
					},
					to: {
						transform: "translateX(0%)",
						opacity: "1",
					},
				},
				fadeUpAnimation: {
					from: {
						transform: "translateY(100%)",
						opacity: "0.2",
					},
					to: {
						transform: "translateY(0%)",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [],
};

export default config;
