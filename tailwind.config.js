/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/images/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      brandThin: ['font-100', 'sans-serif', 'serif'],
      brandExtraLight: ['font-200', 'sans-serif', 'serif'],
      brandLight: ['font-300', 'sans-serif', 'serif'],
      brandRegular: ['font-400', 'sans-serif', 'serif'],
      brandMedium: ['font-500', 'sans-serif', 'serif'],
      brandSemiBold: ['font-600', 'sans-serif', 'serif'],
      brandBold: ['font-700', 'sans-serif', 'serif'],
      brandExtraBold: ['font-800', 'sans-serif', 'serif'],
      brandBlack: ['font-900', 'sans-serif', 'serif'],
    },
    colors: {
      'gray-light': '#1b1d23',
      'gray-dark': '#131519',
      'gray-darkest': '#0d0f11',
      'brand-coal': '#0f0d0e',
      'brand-charcoal': '#231f20',
      'brand-gray': '#262522',
      'brand-yellow': '#fcba28',
      'brand-pink': '#f38ba3',
      'brand-green': '#0ba95b',
      'brand-light-green': '#cfe957',
      'brand-purple': '#7b5ea7',
      'brand-biege': '#f9f4da',
      'brand-blue': '#12b5e5',
      'brand-orange': '#fc7428',
      'brand-red': '#ed203d',
      'brand-white': '#ffffff',
      'brand-lightText': '#162c49',
      'brand-lightBlue': '#f3f6fa',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
