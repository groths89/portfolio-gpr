import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class", ".dark"],
  content: [
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
        heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
        
        // Use the Inter variable
        body: ['var(--font-body)', ...defaultTheme.fontFamily.sans], 
        
        // Use the Fira Code variable
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono], 
      },
      colors: {
        'primary-background': "#191923",
        border: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--border) / ${opacityValue})`,
        input: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--input) / ${opacityValue})`,
        ring: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--ring) / ${opacityValue})`,
        background: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--background) / ${opacityValue})`,
        foreground: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--foreground) / ${opacityValue})`,
        primary: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--primary) / ${opacityValue})`,
        'primary-foreground': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--primary-foreground) / ${opacityValue})`,
        secondary: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--secondary) / ${opacityValue})`,
        'secondary-foreground': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--secondary-foreground) / ${opacityValue})`,
        muted: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--muted) / ${opacityValue})`,
        'muted-foreground': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--muted-foreground) / ${opacityValue})`,
        accent: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--accent) / ${opacityValue})`,
        'accent-foreground': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--accent-foreground) / ${opacityValue})`,
        popover: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--popover) / ${opacityValue})`,
        'popover-foreground': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--popover-foreground) / ${opacityValue})`,
        card: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--card) / ${opacityValue})`,
        'card-foreground': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--card-foreground) / ${opacityValue})`,
        destructive: ({ opacityValue }: { opacityValue: string }) => `hsl(var(--destructive) / ${opacityValue})`,
        'destructive-foreground': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--destructive-foreground) / ${opacityValue})`,
        'neon-cyan': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--neon-cyan) / ${opacityValue})`,
        'neon-purple': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--neon-purple) / ${opacityValue})`,
        'neon-amber': ({ opacityValue }: { opacityValue: string }) => `hsl(var(--neon-amber) / ${opacityValue})`,
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
