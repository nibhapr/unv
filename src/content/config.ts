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
};
