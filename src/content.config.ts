import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bulletins = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/bulletins' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    classification: z.enum(['public', 'restricted', 'eyes-only']).default('public'),
  }),
});

export const collections = { bulletins };
