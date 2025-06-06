// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./src/**/*.css", // <--- THIS IS THE CRUCIAL ADDITION
        "./index.html", // Good practice to include your main index.html as well
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
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
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
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                },
                kenny: {
                    amber: "#FF6F1F",
                    gold: "#FF6F1F",
                    wood: "#3a1c0f",
                    dark: "#000000",
                    cream: "#FFF8E1",
                    copper: "#FF6F1F",
                    whiskey: "#FF6F1F",
                    toast: "#FF6F1F"
                }
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
                'candle-flicker': {
                    '0%, 100%': { opacity: '0.9' },
                    '50%': { opacity: '1' },
                },
                'gentle-bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' }
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in-slow': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                // Add the fillBeer keyframe to tailwind.config.js for consistency,
                // although it's also defined in index.css. This allows Tailwind to be aware of it.
                'fillBeer': {
                    from: { 'background-position': '0% 100%' },
                    to: { 'background-position': '0% 0%' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'candle-flicker': 'candle-flicker 3s ease-in-out infinite',
                'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-in-slow': 'fade-in-slow 1.5s ease-out',
                'fillBeer': 'fillBeer 2s ease-out forwards', // Link the keyframe here
            },
            fontFamily: {
                handwritten: ['Trebuchet MS', 'sans-serif'],
                title: ['Trebuchet MS', 'sans-serif'],
                body: ['Trebuchet MS', 'sans-serif'],
                logo: ['Trebuchet MS', 'sans-serif'],
                alt1: ['Trebuchet MS', 'sans-serif'],
                alt2: ['Trebuchet MS', 'sans-serif'],
                sans: ['Trebuchet MS', 'sans-serif'],
            },
            backgroundImage: {
                'wood-texture': "url('/wood-texture.jpg')",
                'amber-glow': "linear-gradient(180deg, rgba(245,166,35,0.2) 0%, rgba(245,166,35,0) 100%)",
                'warm-overlay': "linear-gradient(0deg, rgba(26,15,0,0.7) 0%, rgba(26,15,0,0.3) 100%)"
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;