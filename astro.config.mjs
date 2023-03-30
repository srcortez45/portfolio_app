import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://portfolioapp-srcortez45.vercel.app/',
  adapter: vercel(),
  integrations: [mdx(), sitemap(), tailwind()]
});