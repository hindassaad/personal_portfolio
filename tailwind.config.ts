import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f2f0",
        foreground: "#444444",
        muted: "#6e6e6e",
        border: "#ebeced",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Roboto", "Helvetica", "sans-serif"],
        mono: ["var(--font-mono)", "Noto Sans Mono", "monospace"],
      },
      maxWidth: {
        content: "960px",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "#444444",
            a: {
              color: "#444444",
              textDecoration: "underline",
              "&:hover": { color: "#000" },
            },
            blockquote: {
              borderLeftColor: "#6e6e6e",
              color: "#6e6e6e",
            },
            code: {
              backgroundColor: "#ebeced",
              borderRadius: "3px",
              padding: "2px 5px",
              fontWeight: "400",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
