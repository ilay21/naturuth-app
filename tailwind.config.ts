import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f2f7f0',
          100: '#e0edd9',
          200: '#c2dbb4',
          300: '#9bc386',
          400: '#7aad62',
          500: '#5d9244',
          600: '#487434',
          700: '#3a5a2c',
          800: '#314927',
          900: '#283d21',
        },
        beige: {
          50: '#faf8f3',
          100: '#f3efe4',
          200: '#e6ddc8',
          300: '#d4c5a9',
          400: '#c4ad8a',
          500: '#b89a72',
          600: '#ab8763',
          700: '#8f6e53',
          800: '#755b47',
          900: '#604c3c',
        },
        lavender: {
          50: '#f5f3f8',
          100: '#ebe7f1',
          200: '#d6cfe4',
          300: '#b8a9cf',
          400: '#9b8db5',
          500: '#82739e',
          600: '#6e5f86',
          700: '#5c4e6e',
          800: '#4e425c',
          900: '#42394e',
        },
        cream: '#faf8f5',
        'cream-dark': '#f0ebe3',
        brown: {
          DEFAULT: '#4a3f35',
          light: '#6b5e52',
          dark: '#332b23',
        },
        rose: {
          light: '#e0d0ce',
          DEFAULT: '#c9a9a6',
          dark: '#a88582',
        },
      },
      fontFamily: {
        heebo: ['var(--font-heebo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
