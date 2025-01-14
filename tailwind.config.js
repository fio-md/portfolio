/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "selector",
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
