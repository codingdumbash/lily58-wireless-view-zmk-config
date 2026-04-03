/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          light: '#1A2E45',
          deep: '#060D14'
        },
        bone: {
          DEFAULT: '#F5F0E8',
          light: '#FAF7F2',
          dark: '#E8E0D0'
        },
        crimson: {
          DEFAULT: '#8B1A1A',
          light: '#A52828',
          muted: '#6B1414'
        },
        gold: {
          DEFAULT: '#B8942A',
          light: '#D4AE3C',
          pale: '#E8D28A',
          deep: '#8B6914'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif']
      },
      letterSpacing: {
        'ultra': '0.25em',
        'luxury': '0.15em'
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-in': 'slideIn 0.8s ease forwards',
        'shimmer': 'shimmer 2.5s infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        }
      }
    }
  },
  plugins: []
}
