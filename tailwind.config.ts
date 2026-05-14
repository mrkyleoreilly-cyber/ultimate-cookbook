import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        background: "#FAFAF8",
        surface: "#FFFFFF",
        "surface-2": "#F5F5F0",
        "surface-3": "#EEEDE8",
        border: "rgba(0,0,0,0.08)",
        "text-primary": "#1A1A1A",
        "text-secondary": "#6B6B6B",
        "text-tertiary": "#A0A0A0",
        accent: "#FF6B35",
        "accent-soft": "rgba(255,107,53,0.12)",
        success: "#34C759",
        warning: "#FF9500",
        danger: "#FF3B30",
        "glass-bg": "rgba(255,255,255,0.72)",
        "glass-border": "rgba(255,255,255,0.4)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.75rem",
      },
      backdropBlur: {
        xs: "4px",
        "2xl": "40px",
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        "card-lg":
          "0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
        glass:
          "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
        tab: "0 -1px 0 rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
