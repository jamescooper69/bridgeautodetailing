
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
        background: "#F5F7FA", // Light Gray Background
        foreground: "#222831", // Dark Gray/Charcoal for text
        primary: {
          DEFAULT: "#1E90FF", // Dodger Blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#4DA6FF", // Soft Accent Blue
          foreground: "#222831",
        },
        accent: {
          DEFAULT: "#0A1E3F", // Dark Blue for contrast
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF", // White cards
          foreground: "#222831",
        },
        muted: {
          DEFAULT: "#B0B0B0", // Cool Gray
          foreground: "#222831",
        },
        success: {
          DEFAULT: "#2ECC71", // Emerald Green
        },
        border: "#D1D5DB",
        input: "#F5F5F5",
        ring: "#1E90FF",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E90FF",
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

