// tailwind.config.js

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        fe: "var(--color-fe)",
        be: "var(--color-be)",
        mb: "var(--color-mb)",
        tool: "var(--color-tool)",
        input_border: "var(--color-input-b)",
        declare: "var(--color-declare)",
        variable: "var(--color-variable)",
        string: "var(--color-string)",
      },
    },
  },
  plugins: [],
};
