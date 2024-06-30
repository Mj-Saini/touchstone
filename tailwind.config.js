/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_color: "#393F62",
      },
      boxShadow: {
        drop_shadow: "0px 4px 4px 0px #0000005E",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/png/hero img.png')",
        support_mission:
          "url('/src/assets/images/png/support-our-mission-bg.png')",
      },
    },
  },
  plugins: [],
};
