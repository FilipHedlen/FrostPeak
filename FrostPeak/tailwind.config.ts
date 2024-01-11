import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "overall": "url('/bg-overall.png')",
        },
        fontFamily: {
            playfair: ['Playfair Display', 'serif'],
            nunito: ['Nunito', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
        },
    },
  },
  plugins: [],
} satisfies Config

