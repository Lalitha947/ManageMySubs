/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#3B82F6',
        background: '#F1F5F9',
        accent: '#10B981',
        text: '#0F172A',
      },
    },
  },
  plugins: [],
};