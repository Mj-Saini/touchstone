/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkTheme: {
          background: "#393F62",
          text: "#FFFFFF",
        },
        lightTheme: {
          background: "#FFFFFF",
          text: "#000000",
        },
      },
      boxShadow: {
        drop_shadow: "0px 4px 4px 0px #0000005E",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/png/hero img.png')",
        discover_bg: "url('/src/assets/images/png/bg-book.png')",
        macbook_bg: "url('/src/assets/images/png/macbook-img.png')",
        support_mission:
          "url('/src/assets/images/png/support-our-mission-bg.png')",
      },
    },
  },
  plugins: [],
};
