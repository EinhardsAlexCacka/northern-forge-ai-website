/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'primary': '#0A9396',
        'primary-dark': '#005F73',

        // Backgrounds
        'bg-dark': '#001219',
        'bg-light': '#E9D8A6',
        'bg-card-dark': '#193233',
        'bg-card-light': '#FFFFFF',

        // Text
        'text-cream': '#E9D8A6',
        'text-dark': '#001219',
        'text-teal-gray': '#92C7C9',
        'text-gray': '#4A4A4A',

        // Accents
        'amber': '#EE9B00',
        'orange': '#CA6702',
        'terra-cotta': '#BB3E03',
        'olive': '#585123',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
