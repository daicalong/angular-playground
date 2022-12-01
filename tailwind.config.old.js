/** @type {import('tailwindcss').Config} */
const customPreset = require('custom-tailwind-config/custom-tailwind.config');
const theme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['src/**/*{html,ts,js}'],
  theme: theme,
  presets: [
    customPreset
  ],
  plugins: [],
}
