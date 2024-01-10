import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "hero": "url('/bg-hero.jpg')",
            "overall": "url('/bg-overall.png')"
        }
    },
  },
  plugins: [],
} satisfies Config

