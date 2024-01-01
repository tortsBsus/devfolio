module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        vergilia: ['Vergilia', 'sans-serif'],
      },
      fontSize: {
        titles: '8rem',
        heads1: '5.625rem',
        heads2: '4rem',
        heads3: '2.812rem',
        heads4: '2rem',
        heads5: '1.438rem',
        bases: '1rem',
        captions: '0.688rem',
        smalls: '0.5rem',
      }
    },
    
  },
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
    ],
  },
  plugins: [require('daisyui'),require('daisyui')],
};
