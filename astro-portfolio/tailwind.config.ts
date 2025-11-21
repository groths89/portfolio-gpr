import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";


const config = {
  darkMode: ["class", ".dark"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
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
      fontFamily: {
        // Use the Titillium Web variable
        heading: ['var(--font-heading)', ...fontFamily.sans],
        
        // Use the Inter variable
        body: ['var(--font-body)', ...fontFamily.sans], 
        
        // Use the Fira Code variable
        mono: ['var(--font-mono)', ...fontFamily.mono], 
      },
      colors: {
        'primary-background': "#191923",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        // Primary Colors (Need to define DEFAULT explicitly if using variants)
        primary: "hsl(var(--primary) / <alpha-value>)",
        'primary-foreground': "hsl(var(--primary-foreground) / <alpha-value>)",

        // Secondary Colors
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        'secondary-foreground': "hsl(var(--secondary-foreground) / <alpha-value>)",

        // Muted Colors
        muted: "hsl(var(--muted) / <alpha-value>)",
        'muted-foreground': "hsl(var(--muted-foreground) / <alpha-value>)", // 👈 THIS IS THE FIX

        // Accent Colors
        accent: "hsl(var(--accent) / <alpha-value>)",
        'accent-foreground': "hsl(var(--accent-foreground) / <alpha-value>)",

        // Popover Colors
        popover: "hsl(var(--popover) / <alpha-value>)",
        'popover-foreground': "hsl(var(--popover-foreground) / <alpha-value>)",

        // Card Colors
        card: "hsl(var(--card) / <alpha-value>)",
        'card-foreground': "hsl(var(--card-foreground) / <alpha-value>)",

        // Destructive Colors
        destructive: "hsl(var(--destructive) / <alpha-value>)",
        'destructive-foreground': "hsl(var(--destructive-foreground) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "pulse": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse": 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
