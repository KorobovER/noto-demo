/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin")],
  darkMode:'class',
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
    extend: {
      gridTemplateColumns: {
        'main_xl': '6fr 230px minmax(1.75rem, 2fr) minmax(1000px, 18fr) minmax(1.75rem, 2fr) 6fr',
        'main_lg': '230px 1.75rem 1fr 1.75rem',
        'main_md': '80px 1.25rem 1fr 1.25rem'
      }
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
}
