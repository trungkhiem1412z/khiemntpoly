/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'orange-cus': '#f28f39',
        'yellow-cus': '#e7e123',
        'yellowcus-1': '#FFD626',
      },
      backgroundImage: {
        'tet-bg': "url('../images/bg.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
