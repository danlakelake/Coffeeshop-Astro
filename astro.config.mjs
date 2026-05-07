// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// WordPress Environment Variables
const WORDPRESS_URL = import.meta.env.PUBLIC_WORDPRESS_API;
const WORDPRESS_DOMAIN = WORDPRESS_URL ? new URL(WORDPRESS_URL).hostname : '';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [WORDPRESS_DOMAIN],
  },
});
