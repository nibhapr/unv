import { z, defineCollection } from 'astro:content';

const ipCamerasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    features: z.array(z.string()),
    specifications: z.object({
      sensor: z.string(),
      resolution: z.string(),
      focalLength: z.string(),
      irRange: z.string(),
      powerSupply: z.string(),
      protection: z.string(),
      storage: z.string(),
      dimensions: z.string(),
    }),
  }),
});

const analogCamerasSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  features: z.array(z.string()),
  specifications: z.object({
    sensor: z.string(),
    resolution: z.string(),
    focalLength: z.string(),
    irRange: z.string(),
    powerSupply: z.string(),
    protection: z.string(),
    storage: z.string(),
    dimensions: z.string(),
  }),
});

const ptzCamerasSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  features: z.array(z.string()),
  specifications: z.object({
    sensor: z.string(),
    resolution: z.string(),
    focalLength: z.string(),
    irRange: z.string(),
    powerSupply: z.string(),
    protection: z.string(),
    storage: z.string(),
    dimensions: z.string(),
  }),
});

const thermalCamerasSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  features: z.array(z.string()),
  specifications: z.object({
    thermalSensor: z.string(),
    thermalResolution: z.string(),
    temperatureRange: z.string(),
    thermalSensitivity: z.string(),
    focalLength: z.string(),
    powerSupply: z.string(),
    protection: z.string(),
    storage: z.string(),
    dimensions: z.string(),
  }),
});

const nvrSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  features: z.array(z.string()),
  specifications: z.object({
    channels: z.string(),
    storage: z.string(),
    bandwidth: z.string(),
    videoOutput: z.string(),
    compression: z.string(),
    powerSupply: z.string(),
    dimensions: z.string(),
    networkInterface: z.string(),
  }),
});

const dvrSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  features: z.array(z.string()),
  specifications: z.object({
    channels: z.string(),
    videoCompression: z.string(),
    resolution: z.string(),
    recordingBandwidth: z.string(),
    storageCapacity: z.string(),
    networkInterface: z.string(),
    powerSupply: z.string(),
    dimensions: z.string(),
  }),
});

const storageSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  features: z.array(z.string()),
  specifications: z.object({
    capacity: z.string(),
    interface: z.string(),
    formFactor: z.string(),
    transferRate: z.string(),
    reliability: z.string(),
    powerConsumption: z.string(),
    warranty: z.string(),
    dimensions: z.string(),
  }),
});

const accessoriesSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  features: z.array(z.string()),
  specifications: z.object({
    compatibility: z.string(),
    material: z.string(),
    dimensions: z.string(),
    weight: z.string(),
    powerRequirements: z.string().optional(),
    operatingTemperature: z.string().optional(),
    mountingType: z.string().optional(),
    color: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    id: z.number(),
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
  schema: ({ image }) => z.object({
    id: z.number(),
    pubDate: z.date(),
    title: z.string(),
    description: z.string(),
    contents: z.array(z.string()),
    cardImage: image(),
    cardImageAlt: z.string(),
  }),
});

const testimonialCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
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
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    body: z.string(),
    icon: z.string().optional()
  }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
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
  schema: ({ image }) => z.object({
    id: z.number(),
    slider: z.string(),
    sliderAlt: z.string(),
  }),
});

export const collections = {
  'ip-cameras': ipCamerasCollection,
  'analog-cameras': defineCollection({
    type: 'content',
    schema: analogCamerasSchema,
  }),
  'ptz-cameras': defineCollection({
    type: 'content',
    schema: ptzCamerasSchema,
  }),
  'thermal-cameras': defineCollection({
    type: 'content',
    schema: thermalCamerasSchema,
  }),
  'nvr': defineCollection({
    type: 'content',
    schema: nvrSchema,
  }),
  'dvr': defineCollection({
    type: 'content',
    schema: dvrSchema,
  }),
  'storage': defineCollection({
    type: 'content',
    schema: storageSchema,
  }),
  'accessories': defineCollection({
    type: 'content',
    schema: accessoriesSchema,
  }),
  'blog': blogCollection,
  'insights': insightsCollection,
  'testimonials': testimonialCollection,
  'feature': featureCollection,
  'slider': sliderCollection,
  'teams': teamCollection
};
