/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2328',
          light: '#474E54',
          dark: '#171B1E',
          darker: '#0E1114',
        },
        secondary: {
          DEFAULT: '#0969DA',
          light: '#4B9CE6',
          dark: '#0058A7',
          darker: '#003D6F',
        },
      },
    },
  },
  plugins: [],
};

