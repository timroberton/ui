# Tim's UI component library

### Tailwind settings

Need to define the following properties in `./tailwind.config.js`

```js
theme: {
  colors: {
    transparent: "transparent",
    gray: colors.pink,
    //
    primary: "#661AE6",
    "primary-focus": "#5114b8",
    "primary-content": "#ffffff",
    //
    secondary: "#D926AA",
    "secondary-focus": "#ad1e88",
    "secondary-content": "#ffffff",
    //
    accent: "#1FB2A5",
    "accent-focus": "#188e84",
    "accent-content": "#ffffff",
    //
    neutral: "#191D24",
    "neutral-focus": "#111318",
    "neutral-content": "#A6ADBB",
    //
    "base-100": "#2A303C",
    "base-200": "#242933",
    "base-300": "#20252E",
    "base-content": "#A6ADBB",
    //
    info: "#65D0F1",
    "info-content": "#000000",
    success: "#2DD788",
    "success-focus": "#24ac6c",
    "success-content": "#ffffff",
    warning: "#FAD852",
    "warning-content": "#000000",
    error: "#F9362F",
    "error-content": "#470000",
  },
  borderRadius: {
    DEFAULT: "3px",
  },
  fontWeight: {
    [400]: 400,
    [700]: 700,
  },
  fontFamily: {
    sans: ["var(--font-source-sans-pro)"],
    mono: ["var(--font-source-code-pro)"],
  },
},
  ```
