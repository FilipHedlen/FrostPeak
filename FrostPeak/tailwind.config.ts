import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "overall": "url('/bg-overall.png')",
            "hero": "url('/bg-hero.png')",
        },
        fontFamily: {
            playfair: ['Playfair Display', 'serif'],
            nunito: ['Nunito', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
            white: "#f5f5f5",
            black: "#111111",
            blue: "#1565C0",
            grey: "#1F2937",
            lightgrey: "#6b7280",
        },
        transitionDuration: {
            "1500": "1500ms",
            "2000": "2000ms",
            "2500": "2500ms",
        },
        animation: {
            "slide-in-top": "slide-in-top 0.8s ease-out",
            "fade-in-left": "fade-in-left 0.6s ease-in-out",
        },
        keyframes: {
            "slide-in-top": {
              "0%": {
                transform: "translateY(-100px)",
              },
              "100%": {
                transform: "translateY(0)",
              },
            },
            "fade-in-left": {
                "0%": {
                    opacity: "0",
                    transform: "translateX(-200px)"
                },
                "100%": {
                    opacity: "1",
                    transform: "translateX(0)"
                },
            },
        } 
    },
  },
  plugins: [],
} satisfies Config

