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
				kopcarqblanco: "url('/kopcarqblanco.png')",
				nosotrosimg: "url('/nosotrospic.jpg')",
			},
			animation: {
				fadeLeftAnimation: "fadeLeftAnimation 4s",
				fadeRightAnimation: "fadeRightAnimation 3s",
				fadeToRightAnimation: "fadeToRightAnimation 3s",
				fadeToLeftAnimation: "fadeToLeftAnimation 3s",
				fadeBottomAnimation: "fadeBottomAnimation 3s",
				fadeUpAnimation: "fadeUpAnimation 3s",
				fadeDownLeftAnimation: "fadeDownLeftAnimation 1s",
				fadeUpRightAnimation: "fadeUpRightAnimation 1s",
			},

			keyframes: {
				fadeLeftAnimation: {
					from: {
						transform: "translateX(0%)",
						opacity: "1",
					},
					to: {
						transform: "translateX(-100%)",
						opacity: "0",
					},
				},
				fadeRightAnimation: {
					from: {
						transform: "translateX(100%)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0%)",
						opacity: "1",
					},
				},
				fadeToRightAnimation: {
					from: {
						transform: "translateX(-150%)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0%)",
						opacity: "1",
					},
				},
				fadeToLeftAnimation: {
					from: {
						transform: "translateX(150%)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0%)",
						opacity: "1",
					},
				},
				fadeBottomAnimation: {
					from: {
						transform: "translateY(-100%)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0%)",
						opacity: "1",
					},
				},
				fadeUpAnimation: {
					from: {
						transform: "translateY(100%)",
						opacity: "0",
					},
					to: {
						transform: "translateY(0%)",
						opacity: "1",
					},
				},
				fadeDownLeftAnimation: {
					from: {
						transform: "translateY(-80%) translateX(70%)",
						opacity: "0.8",
					},
					to: {
						transform: "translateY(0%) translateX(0%)",
						opacity: "1",
					},
				},
				fadeUpRightAnimation: {
					from: {
						transform: "translateY(0%) translateX(0%)",
						opacity: "0.8",
					},
					to: {
						transform: "translateY(-100%) translateX(90%)",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [],
};

export default config;
