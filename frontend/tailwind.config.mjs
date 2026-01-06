// tailwind.config.js

export default {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        primary: "var(--color-primary)",
        border: "var(--color-border)",
        highlight: "var(--color-highlight)",
        hover: "var(--color-hover)",
        focus: "var(--color-focus)",
        submit_bg: "var(--color-submit-bg)",
        submit_bg_active: "var(--color-submit-bg-active)",
        underline: "var(--color-underline)",
      },
    },
  },
  plugins: [],
};
