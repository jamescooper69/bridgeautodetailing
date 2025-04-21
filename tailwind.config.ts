
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#ECECEC",
        input: "#ECECEC",
        ring: "#8766FD",
        background: "#181F2C", // Deep navy
        foreground: "#F3F3F8", // Off white
        primary: {
          DEFAULT: "#4427A0", // Royal Purple
          foreground: "#FEF7E6", // Very light gold
        },
        secondary: {
          DEFAULT: "#FFD700", // Gold
          foreground: "#181F2C", // For constrast
        },
        accent: {
          DEFAULT: "#8866EE", // Soft purple
          foreground: "#181F2C",
        },
        muted: {
          DEFAULT: "#EFEAF7", // Subtle purple background
          foreground: "#4427A0",
        },
        card: {
          DEFAULT: "#211B2A",
          foreground: "#F3F3F8",
        },
        popover: {
          DEFAULT: "#29243E",
          foreground: "#FFD700",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FEF7E6",
        },
      },
      borderRadius: {
        lg: "1.2rem",
        md: "1rem",
        sm: "0.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
