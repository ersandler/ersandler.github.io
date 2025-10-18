/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'conifer': '#2d5016',
        'rust': '#c2410c',
        'light-grey': '#f5f5f5',
        'charcoal': '#374151',
      },
    },
  },
  plugins: [],
}
