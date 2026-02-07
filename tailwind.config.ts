import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: '#6BBE45', // Green reminiscent of health and vitality
        secondary: '#4A4B4D', // Darker gray for professionalism
        accent: '#F8C471', // Soft orange for warmth
        background: '#F5F5F5', // Light gray background for a clean look
        text: '#333333', // Dark text for readability
      },
    },
  },
  plugins: [],
}

export default config
