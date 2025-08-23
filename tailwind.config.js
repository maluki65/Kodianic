module.exports = {
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'Poppins', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
};
