module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  daisyui: {
    themes: [ {
      peachy: {
                "primary": "#FEBE98",
                "secondary": "#594030",
                "accent": "#120D09",
                "neutral": "#F9F4EF",
                "base-100": "#FEBE98",
                "info": "#594030",
                "success": "#68C07B",
                "warning": "#D87737",
                "error": "#C45259",
              },
    },
    "cupcake", "dark", "cmyk"],
  },
  plugins: [require('daisyui')],
};
