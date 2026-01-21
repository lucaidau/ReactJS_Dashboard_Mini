/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand & Action
        "primary-act": "#1A73E8",
        "hover-act": "#E8F0FE",

        // Background & surface
        "main-bg": "#F8F9FA",
        "sidebar-bg": "#FFFFFF",
        "borders-bg": "E0E0E0",

        // Typography
        "main-txt": "#202124",
        "sub-txt": "#5F6368",
        "blur-txt": "#70757A",

        // Status Tags
        "done-bg": "#E6F4EA",
        "done-txt": "#1E8E3E",
        "inProgress-bg": "#E8F0FE",
        "inProgress-txt": "#1967D2",
        "pending-bg": "#FEF7E0",
        "pending-txt": "#B06000",
      },
    },
  },
  plugins: [],
};
