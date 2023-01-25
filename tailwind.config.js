const colors = require("tailwindcss/colors");

const c1 = colors.blue;
const c2 = colors.pink;
const c3 = colors.fuchsia;
const n1 = colors.slate;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      //
      primary: c1[500],
      "primary-focus": c1[600],
      "primary-content": colors.white,
      //
      secondary: c2[500],
      "secondary-focus": c2[600],
      "secondary-content": colors.white,
      //
      accent: c3[500],
      "accent-focus": c3[600],
      "accent-content": colors.white,
      //
      neutral: n1[500],
      "neutral-focus": n1[600],
      "neutral-content": colors.white,
      //
      "base-100": n1[50],
      "base-200": n1[100],
      "base-300": n1[200],
      "base-content": n1[800],
      "base-content-lighter": n1[600],
      //
      success: colors.emerald[500],
      "success-focus": colors.emerald[600],
      "success-content": colors.white,
      //
      warning: colors.orange[500],
      "warning-focus": colors.orange[600],
      "warning-content": colors.white,
      //
      error: colors.red[500],
      "error-focus": colors.red[600],
      "error-content": colors.white,
    },
    borderRadius: {
      DEFAULT: "4px",
    },
    fontFamily: {
      sans: ["var(--font-fsc)"],
    },
    fontWeight: {
      [400]: 400,
      [700]: 700,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
