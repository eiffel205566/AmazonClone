module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        15: '3.75rem',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        topNav: '#131921',
        sideDark: '#252525',
        overlay: '#3a3a3a',
        danger: '#e3342f',
        golden: '#ffda00',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
