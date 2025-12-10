import defaultTheme from "tailwindcss/defaultTheme";


const config = { 
darkMode: ["class", ".dark"],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', 
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
        inter: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        mono: ['var(--font-fira-code)', 'ui-monospace', 'SFMono-regular', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
        titillium: ['var(--font-titillium-web)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
      colors: {
        'primary-background': "#191923",
        'test-color': '#1E90FF',
        border: ({ opacityValue }) => `hsl(var(--border) / ${opacityValue})`,
        input: ({ opacityValue }) => `hsl(var(--input) / ${opacityValue})`,
        ring: ({ opacityValue }) => `hsl(var(--ring) / ${opacityValue})`,
        background: ({ opacityValue }) => `hsl(var(--background) / ${opacityValue})`,
        foreground: ({ opacityValue }) => `hsl(var(--foreground) / ${opacityValue})`,
        primary: ({ opacityValue }) => `hsl(var(--primary) / ${opacityValue})`,
        'primary-foreground': ({ opacityValue }) => `hsl(var(--primary-foreground) / ${opacityValue})`,
        secondary: ({ opacityValue }) => `hsl(var(--secondary) / ${opacityValue})`,
        'secondary-foreground': ({ opacityValue }) => `hsl(var(--secondary-foreground) / ${opacityValue})`,
        muted: ({ opacityValue }) => `hsl(var(--muted) / ${opacityValue})`,
        'muted-foreground': ({ opacityValue }) => `hsl(var(--muted-foreground) / ${opacityValue})`,
        accent: ({ opacityValue }) => `hsl(var(--accent) / ${opacityValue})`,
        'accent-foreground': ({ opacityValue }) => `hsl(var(--accent-foreground) / ${opacityValue})`,
        popover: ({ opacityValue }) => `hsl(var(--popover) / ${opacityValue})`,
        'popover-foreground': ({ opacityValue }) => `hsl(var(--popover-foreground) / ${opacityValue})`,
        card: ({ opacityValue }) => `hsl(var(--card) / ${opacityValue})`,
        'card-foreground': ({ opacityValue }) => `hsl(var(--card-foreground) / ${opacityValue})`,
        destructive: ({ opacityValue }) => `hsl(var(--destructive) / ${opacityValue})`,
        'destructive-foreground': ({ opacityValue }) => `hsl(var(--destructive-foreground) / ${opacityValue})`,
        'neon-cyan': ({ opacityValue }) => `hsl(var(--neon-cyan) / ${opacityValue})`,
        'neon-purple': ({ opacityValue }) => `hsl(var(--neon-purple) / ${opacityValue})`,
        'neon-amber': ({ opacityValue }) => `hsl(var(--neon-amber) / ${opacityValue})`,
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
};

console.log("--- TAILWIND CONFIG LOADED ---");
console.log("Extended Theme Colors:", config.theme.extend.colors); 
console.log("-----------------------------");

export default config;
