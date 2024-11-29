// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';


const productsCollection = defineCollection({
  type: 'content',
    schema: ({ image }) => z.object({
    main: z.object({
      id: z.number(),
      title: z.string(),
      subTitle: z.string(),
      content: z.string(),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    }),
    tabs: z.array(
      z.object({
        id: z.string(),
        dataTab: z.string(),
        title: z.string(),
      })
    ),
    description: z.object({
      title: z.string(),
      subTitle: z.string(),
      btnTitle: z.string(),
      btnURL: z.string(),
    }),
    descriptionList: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsLeft: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsRight: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ).optional(),
    blueprints: z.object({
      first: image().optional(),
      second: image().optional(),
      third: image().optional(),
    }),
    
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
  title: z.string(),
  description: z.string(),
  contents: z.array(z.string()),
  author: z.string(),
  role: z.string().optional(),
  authorImage: image(),
  authorImageAlt: z.string(),
  pubDate: z.date(),
  cardImage: image(),
  cardImageAlt: z.string(),
  readTime: z.number(),
  tags: z.array(z.string()).optional(),
  }),
});

const insightsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
  title: z.string(),
  description: z.string(),
  contents: z.array(z.string()),
  cardImage: image(),
  cardImageAlt: z.string(),
  }),
});

const testimonialCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
    id: z.number(),
    content: z.string(),
    author: z.string(),
    role: z.string(),
    avatarSrc: image(),
    avatarAlt: z.string(),
  }),
});
const featureCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
    id: z.number(),
    title: z.string(),
    body: z.string(),    
    icon: z.string().optional()
  }),
});
const teamCollection = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: image(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});
const sliderCollection = defineCollection({
    type: "content",
    
    schema: ({image}) => z.object({
    id: z.number(),
    slider: z.string(),
    sliderAlt:z.string(),
   
  }),
});
export const collections = {
  'products': productsCollection,
  'blog': blogCollection,
  'insights': insightsCollection,
  'testimonials': testimonialCollection,
  'feature' : featureCollection,
  'slider': sliderCollection,
  'teams'  : teamCollection
};