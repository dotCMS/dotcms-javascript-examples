module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{ts,tsx}"],
  safelist: ['col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
    'col-start-8',
    'col-start-9',
    'col-start-10',
    'col-start-11',
    'col-start-12',
    'col-start-13',
    'col-start-auto',
    'col-end-1',
    'col-end-2',
    'col-end-3',
    'col-end-4',
    'col-end-5',
    'col-end-6',
    'col-end-7',
    'col-end-8',
    'col-end-9',
    'col-end-10',
    'col-end-11',
    'col-end-12',
    'col-end-13',
    'col-end-auto'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
};
