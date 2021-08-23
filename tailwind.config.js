module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#1EA4CE',
        },
        coolGray: {
          50: '#E5E5E5',
          100: '#FEFEFE',
        },
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
