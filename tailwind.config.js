/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          50: '#faf6f2',
          100: '#f3e9e2',
          200: '#e8d5c8',
          300: '#dbbda7',
          400: '#c69c80',
          500: '#b17e5e',
          600: '#96624a',
          700: '#7d4e3d',
          800: '#663f32',
          900: '#4a2d24',
        },
        'cream': {
          50: '#fffbf7',
          100: '#fff7ed',
          200: '#fcecd8',
          300: '#f7dfc1',
          400: '#f0cca3',
          500: '#e6b582',
          600: '#d19661',
          700: '#b77847',
          800: '#b3adad',
          900: '#8f8989',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      utilities: {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }
    },
  },
  plugins: [],
}
