module.exports = {
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        bounce: 'bounce 2s ease-in-out infinite',
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
};