// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';

const currentDir = fileURLToPath(new URL('.', import.meta.url));
const tailwindConfigPath = path.resolve(currentDir, 'tailwind.config.mjs');

console.log(tailwindConfigPath);

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [
      tailwindcss({
        config: tailwindConfigPath,
      })
    ],
  },
});