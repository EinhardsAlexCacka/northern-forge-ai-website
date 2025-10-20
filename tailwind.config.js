/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Teal/Cyan from logo)
        'primary': '#17A2B8',
        'primary-dark': '#0D7A8A',
        'primary-light': '#3FBDD1',

        // Accent Colors (Gold from banner)
        'gold': '#D4AF37',
        'gold-light': '#E8C547',
        'gold-dark': '#B8941F',

        // Backgrounds
        'bg-dark': '#0A1A1F',
        'bg-darker': '#050F13',
        'bg-light': '#E9D8A6',
        'bg-card-dark': '#1A3942',
        'bg-card-light': '#FFFFFF',

        // Text Colors
        'text-cream': '#E9D8A6',
        'text-gold': '#D4AF37',
        'text-dark': '#0A1A1F',
        'text-teal-gray': '#7FB3BF',
        'text-gray': '#4A4A4A',

        // Legacy Accent Colors (minimal use)
        'amber': '#EE9B00',
        'orange': '#CA6702',
        'terra-cotta': '#BB3E03',
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        secondary: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
