/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#654321',
        'primary-light': '#8a6544',
        'secondary': '#c9a227',
        'accent': '#b7863e',
        'dark': '#fbf7ef',
        'dark-light': '#ffffff',
        'light': '#ffffff',
        'light-gray': '#e9dfd0',
        'text-primary': '#2b2116',
        'text-secondary': '#7c6a56',
        'coffee': '#2b2116',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(101, 67, 33, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}