/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { principal: { 100: "#0181da" }, secondary: { 100: "#3f3d56" } },
    },
  },
  plugins: [],
};
