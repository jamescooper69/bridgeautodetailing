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
        background: "#0D0D0D", // Jet Black
        foreground: "#F5F5F5", // Pearl White
        primary: {
          DEFAULT: "#D4AF37", // Royal Gold
          foreground: "#0D0D0D",
        },
        secondary: {
          DEFAULT: "#003366", // Deep Sapphire Blue
          foreground: "#F5F5F5",
        },
        accent: {
          DEFAULT: "#007BFF", // Electric Blue
          foreground: "#F5F5F5",
        },
        card: {
          DEFAULT: "#1A1A1A", // Gunmetal Gray
          foreground: "#F5F5F5",
        },
        muted: {
          DEFAULT: "#B0B0B0", // Cool Gray
          foreground: "#F5F5F5",
        },
        success: {
          DEFAULT: "#2ECC71", // Emerald Green
        },
        border: "#2A2A2A",
        input: "#1A1A1A",
        ring: "#D4AF37",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F5F5F5",
        },
        popover: {
          DEFAULT: "#1A1A1A",
          foreground: "#D4AF37",
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
