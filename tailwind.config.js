/** @type {import('tailwindcss').Config} */
const customTwPreset = require('custom-tailwind-config/custom-tailwind.config');
const colors = require('custom-tailwind-config/colors.preset');
const lineClampPlugin = require('@tailwindcss/line-clamp');
module.exports = {
    content: ['./src/**/*{html,ts,js}'],
    theme: {
        extend: {},
    },
    presets: [
        customTwPreset
    ],
    plugins: [
        lineClampPlugin
    ],
}
