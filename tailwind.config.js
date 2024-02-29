module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {

    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        'xl': '1200px',
        '2xl': '1200px',
      },
    },
    
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

    colors:{
      "primary": "#143235",
      "secondary": "#748E5A",
      "accent": "#120D09",
      "neutral": "#d6d3d6",
      "base-100": "#143235",
      "info": "#246F6A",
      "success": "#68C07B",
      "warning": "#D87737",
      "error": "#C45259",
    },
    
  },
  daisyui: {
    themes: [ {
      peachy: {
                "primary": "#143235",
                "secondary": "#748E5A",
                "accent": "#080002",
                "neutral": "#d6d3d6",
                "base-100": "#143235",
                "info": "#246F6A",
                "success": "#68C07B",
                "warning": "#D87737",
                "error": "#C45259",
              },
    },
    ],
  },
  plugins: [require('daisyui')],
};
