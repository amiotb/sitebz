const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f0f5",
        text: "#01010f",
        primary: "#ffbe98",
      },
      fontFamily: {
        ostia: ["OstiaAntica", ...defaultTheme.fontFamily.serif],
        'ostia-book': ["OstiaAnticaBook", ...defaultTheme.fontFamily.serif],
        //medium: 'GT Secra',
      },
      screens: {
        xs: '520px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant, addComponents, matchUtilities, theme }) {
      addVariant("view", ".view&");

      addVariant("playing", ".playing&");

      // addComponents({
      //   '.translate2-y-20': {
      //     '--translate-y': '5rem',
      //   },
      //   '.translate2-y-0': {
      //     '--translate-y': '0rem',
      //   },
      // });

      matchUtilities(
        {
          'translate2-y': (value) => ({
            '--translate-y': value
          }),
          'project-y': (value) => ({
            '--project-y': value
          })
        },
        { values: theme('spacing') }
      )
      // addComponents({
      //   '.animate': {
      //     opacity: '0 !important',
      //   },
      // });
      //addVariant('hocus', ['&:hover', '&:focus'])
      //addVariant('inverted-colors', '@media (inverted-colors: inverted)')
    }),
  ],
  safelist: ["text-primary", "view:opacity-100", "hidden", "opacity-0"],
};
