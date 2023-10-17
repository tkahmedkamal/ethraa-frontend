const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-rtlcss": {
      ltrPrefix: '[dir="rtl"]',
      rtlPrefix: '[dir="ltr"]',
    },
  },
};

export default config;
