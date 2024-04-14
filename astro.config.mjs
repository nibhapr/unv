import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from 'astro-compress';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({applyBaseStyles: false}), react({experimentalReactChildren: true}), icon({
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
  }), compress({
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
  }),],  
});