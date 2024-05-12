/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        slideRight: 'slideRight .3s linear',
      },
      keyframes: {
        slideRight: {
          from: { transform: 'translate3d( -64px, 0, 0)' },
          to: { transform: 'translate3d( 0, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
};
