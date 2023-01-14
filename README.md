# Tim's UI component library

## Tailwind settings

Need to define the following properties in `./tailwind.config.js`

```js
const colors = require("tailwindcss/colors");

const c1 = colors.blue;
const c2 = colors.emerald;
const c3 = colors.fuchsia;
const n1 = colors.slate;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../../_TIM_LIBS/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      //
      primary: c1[500],
      "primary-focus": c1[600],
      "primary-content": "#ffffff",
      //
      secondary: c2[500],
      "secondary-focus": c2[600],
      "secondary-content": "#ffffff",
      //
      accent: c3[500],
      "accent-focus": c3[600],
      "accent-content": "#ffffff",
      //
      neutral: n1[500],
      "neutral-focus": n1[600],
      "neutral-content": "#ffffff",
      //
      "base-100": n1[50],
      "base-200": n1[100],
      "base-300": n1[200],
      "base-content": n1[800],
      "base-content-lighter": n1[600],
      //
      success: colors.green[500],
      "success-focus": colors.green[600],
      "success-content": colors.green[100],
      //
      warning: colors.orange[500],
      "warning-focus": colors.orange[600],
      "warning-content": "#000000",
      //
      error: colors.red[500],
      "error-focus": colors.red[600],
      "error-content": colors.red[100],
    },
    borderRadius: {
      DEFAULT: "3px",
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
```
