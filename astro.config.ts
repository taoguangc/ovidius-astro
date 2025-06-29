import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://ovidius-astro.vercel.app',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap(), icon({
        iconDir: 'src/assets/icons'
    })],
    image: {
        layout: 'constrained'
    }
});