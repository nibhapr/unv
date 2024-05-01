const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/preline/preline.js',],
  theme: {
    extend: {
      colors: {
        hikvision: '#D71920',
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
        "-20": "-20",
      },
      transitionProperty: {
        width: "width",
      },
      animation: {
        "moving-background": "moving-background 5s ease-in-out",
        "slide-text": "slide 5s infinite",
      },
      keyframes: {
        "moving-background": {
          "0%": {
            transform: "translateY(0)",
            opacity: 0,
          },
          "66%": {
            opacity: 0.4,
          },
          "100%": {
            transform: "translateY(-150px)",
            opacity: 0,
          },
        },
        "slide": {
          "0%": {
            top: 0,
          },
          "25%": {
            top: "-1.2em",
          },
          "50%": {
            top: "-2.4em",
          },
          "75%": {
            top: "-3.6em",
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),
  require('preline/plugin'),
],
  darkMode: 'class',
};
