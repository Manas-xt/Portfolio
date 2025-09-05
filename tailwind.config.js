/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'outfit': ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        accent: {
          400: '#a855f7',
          500: '#9333ea',
          600: '#7c3aed',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px theme(colors.primary.500)' },
          'to': { boxShadow: '0 0 30px theme(colors.accent.500)' },
        }
      }
    },
  },
  plugins: [],
}
