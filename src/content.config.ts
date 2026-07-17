import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: ({ image }) =>
				z.object({
					// Hand-made social image used instead of the auto-generated
					// open-graph card; path is relative to the content file
					ogImage: image().optional(),
				}),
		}),
	}),
};
