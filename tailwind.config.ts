import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			colors: {
				body: 'rgb(var(--color-bg))',
				'box-bg': 'rgb(var(--color-box))',
				'box-shadow': 'rgb(var(--box-sd))',
				'box-border': 'rgb(var(--box-border))',
				primary: '#1d4ed8',
				'heading-1': 'rgb(var(--heading-1))',
				'heading-2': 'rgb(var(--heading-2))',
				'heading-3': 'rgb(var(--heading-3))',
			},
			screens:{
				midmd:'880px'
			}
		},
	},
  plugins: [],
}
export default config
