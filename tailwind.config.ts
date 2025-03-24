
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#F15025',
					foreground: '#FFFFFF',
					muted: 'rgba(241, 80, 37, 0.1)',
					hover: 'rgba(241, 80, 37, 0.9)',
				},
				white: '#FFFFFF',
				lightGray: '#E6E8E6',
				mediumGray: '#CED0CE',
				dark: '#191919',
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar))",
					foreground: "hsl(var(--sidebar-foreground))",
					border: "hsl(var(--sidebar-border))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.5s ease-out',
				'fade-down': 'fade-down 0.5s ease-out',
				'scale-up': 'scale-up 0.5s ease-out',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#191919',
						a: {
							color: '#F15025',
							'&:hover': {
								color: 'rgba(241, 80, 37, 0.9)',
							},
						},
						h1: {
							color: '#191919',
							fontWeight: '700',
							fontFamily: 'Inter, system-ui, sans-serif',
						},
						h2: {
							color: '#191919',
							fontWeight: '600',
							fontFamily: 'Inter, system-ui, sans-serif',
						},
						h3: {
							color: '#191919',
							fontWeight: '600',
							fontFamily: 'Inter, system-ui, sans-serif',
						},
						blockquote: {
							borderLeftColor: '#F15025',
							backgroundColor: 'rgba(241, 80, 37, 0.1)',
							color: '#191919',
						},
					},
				},
				dark: {
					css: {
						color: '#FFFFFF',
						a: {
							color: '#F15025',
							'&:hover': {
								color: 'rgba(241, 80, 37, 0.9)',
							},
						},
						h1: {
							color: '#FFFFFF',
							fontWeight: '700',
							fontFamily: 'Inter, system-ui, sans-serif',
						},
						h2: {
							color: '#FFFFFF',
							fontWeight: '600',
							fontFamily: 'Inter, system-ui, sans-serif',
						},
						h3: {
							color: '#FFFFFF',
							fontWeight: '600',
							fontFamily: 'Inter, system-ui, sans-serif',
						},
						blockquote: {
							borderLeftColor: '#F15025',
							backgroundColor: 'rgba(241, 80, 37, 0.3)',
							color: '#FFFFFF',
						},
						strong: {
							color: '#FFFFFF',
						},
						code: {
							color: '#FFFFFF',
						},
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;
