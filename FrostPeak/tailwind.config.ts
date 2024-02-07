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
          }
    },
  },
  plugins: [],
} satisfies Config

