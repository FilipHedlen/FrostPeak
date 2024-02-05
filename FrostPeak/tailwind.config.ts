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
            white: "#F5F5F5",
            black: "#111111",
            blue: "#1565C0",
            darkblue: "#00008B",
            purple: "#0c008b",
            grey: "#1F2937",
            lightgrey: "#6B7280",
            yellow: "#FFEB3B",
            gold: "#FFD700",
            red: "#E53935",
            cherryred: "#D2042D",
            green: "#43A047",
        },
        transitionDuration: {
            "1500": "1500ms",
            "2000": "2000ms",
            "2500": "2500ms",
        },
        animation: {
            "slide-in-top": "slide-in-top 0.8s ease-out",
            "slide-in-right": "slide-in-right 1s ease-out",
            "fade-in-left": "fade-in-left 0.6s ease-in-out",
            "fade-in-bottom": "fade-in-bottom 0.6 ease-in-out",
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
            "slide-in-right": {
                "0%": {
                  transform: "translateX(-100px)",
                },
                "100%": {
                  transform: "translateX(0)",
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
            "fade-in-bottom": {
                "0%": {
                    opacity: "0",
                    transform: "translateY(-200px)"
                },
                "100%": {
                    opacity: "1",
                    transform: "translateY(0)"
                }
            }
        } 
    },
  },
  plugins: [],
} satisfies Config

