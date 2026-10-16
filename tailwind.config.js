/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0284c7', // Sky 600
          light: '#38bdf8',   // Sky 400
          dark: '#0369a1',    // Sky 700
          glow: '#00d2ff',
        },
        accent: {
          DEFAULT: '#0ea5e9',
          hover: '#0284c7',
        },
        dark: {
          bg: '#080b11',
          surface: '#0f1420',
          card: '#141c2e',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      }
    },
=======
    extend: {},
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
  },
  plugins: [],
}
