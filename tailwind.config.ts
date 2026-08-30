import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens from specification
        'maroon-deep': '#4A0E24',
        'near-black': '#17090E',
        'maroon-section': '#3E0F22',
        'cream': '#FBF1E8',
        'gold': '#C9A76B',
        'rose': '#E7A9BC',
        'ink': '#1F1B1D',
        'gray-body': '#6E6660',
        'gray-body-dark': '#C9BFBB',
        'white': '#FFFFFF',
      },
      fontFamily: {
        // Playfair Display for headlines (serif)
        'display': ['Playfair Display', 'serif'],
        // Inter or similar grotesk for body/UI
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;