const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#f2f2f7",
        text: "#0f0f1a",
        primary: "#0000FF",
      },
      fontFamily: {
        secra: ["Secra", ...defaultTheme.fontFamily.serif],
        //medium: 'GT Secra',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant, addComponents }) {
      addVariant("view", ".view&");

      addVariant("playing", ".playing&");

      addComponents({
        '.translate2-y-20': {
          '--translate-y': '5rem',
        },
        '.translate2-y-0': {
          '--translate-y': '0rem',
        },
      });
      // addComponents({
      //   '.animate': {
      //     opacity: '0 !important',
      //   },
      // });
      //addVariant('hocus', ['&:hover', '&:focus'])
      //addVariant('inverted-colors', '@media (inverted-colors: inverted)')
    }),
  ],
  safelist: ["text-primary", "view:opacity-100"],
};
