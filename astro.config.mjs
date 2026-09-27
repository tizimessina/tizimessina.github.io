// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages. For a user site (repo "tizimessina.github.io") leave BASE_PATH unset.
// For a project site (e.g. repo "personal-website"), the deploy workflow sets BASE_PATH=/personal-website.
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://tizimessina.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
