export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007bff",
          dark: "#0056b3",
        },
        secondary: {
          DEFAULT: "#6c757d",
          dark: "#495057",
        },
        background: {
          primary: "#ffffff",
          secondary: "#f8f9fa",
        },
        text: {
          primary: "#212529",
          secondary: "#6c757d",
        },
        error: "#dc3545",
        success: "#28a745",
      },
      fontFamily: {
        sans: ["Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
