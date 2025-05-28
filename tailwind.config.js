/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1220px', // вот здесь задаётся max-width для .container
      xl: '1220px',
      '2xl': '1220px',
    },
  },
  plugins: [],
};