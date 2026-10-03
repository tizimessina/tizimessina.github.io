// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages with the custom domain tizimessina.com.ar (set in the repo's Pages settings).
// For a user site (repo "tizimessina.github.io") leave BASE_PATH unset.
// For a project site (e.g. repo "personal-website"), the deploy workflow sets BASE_PATH=/personal-website.
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://tizimessina.com.ar',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
