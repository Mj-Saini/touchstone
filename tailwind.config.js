/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      mixBlendMode: {
        multiply: "multiply",
        screen: "screen",
        overlay: "overlay",
        darken: "darken",
        lighten: "lighten",
        colorDodge: "color-dodge",
        colorBurn: "color-burn",
        hardLight: "hard-light",
        softLight: "soft-light",
        difference: "difference",
        exclusion: "exclusion",
        hue: "hue",
        saturation: "saturation",
        color: "color",
        luminosity: "luminosity",
      },
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
