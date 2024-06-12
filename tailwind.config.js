/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-regular": ["sf-pro-regular", "sans-serif"],
      },
      backgroundImage: {
        "hero-mac": "url('src/assets/home_images/hero_macbook_air_m3.jpg')",
      },
      boxShadow: {
        "3xl": "35px 35px 35px 35px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
