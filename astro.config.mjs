import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://unvdubai.com',
  integrations: [tailwind({applyBaseStyles: false}), 
    sitemap(), 
    robotsTxt(),
    react({experimentalReactChildren: true}), 
    icon({
    include: {
      mdi: ["*"],
      tabler: ['*'],
      'flat-color-icons': [
        'template',
        'gallery',
        'approval',
        'document',
        'advertising',
        'currency-exchange',
        'voice-presentation',
        'business-contact',
        'database',
      ],
      
    },
  }), playformCompress({
    CSS: true,
    HTML: {
      'html-minifier-terser': {
        removeAttributeQuotes: false,
      },
    },
    Image: false,
    JavaScript: true,
    SVG: false,
    Logger: 1,
  }),

],  
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'chunks/[name].[hash].js',
          entryFileNames: 'entries/[name].[hash].js',
        }
      }
    },
    logLevel: 'error' // Only show errors, ignore warnings
  }
});