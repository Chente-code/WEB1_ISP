// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		animation: {
		  pulse: 'pulse 2s infinite',
		},
		keyframes: {
		  pulse: {
			'0%, 100%': { transform: 'scale(1)' },
			'50%': { transform: 'scale(1.05)' },
		  }
		}
	  },
	},
	plugins: [],
  }
  