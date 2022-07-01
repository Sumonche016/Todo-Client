/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      daisyui: {
        themes: false,
      },
    },
  ],
  plugins: [require("daisyui")]
}
