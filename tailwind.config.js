/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        drop_shadow: "0px 4px 4px 0px #0000005E",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/png/hero img.png')",
      },
    },
  },
  plugins: [],
};
