import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/projects'
	}),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		date: z.coerce.date(),
		category: z.enum(['Professional', 'Big Project', 'Hobby']).default('Hobby'),
		role: z.string().optional(),
		youtube_url: z.string().url().optional(),
		media_images: z.array(z.string()).default([]),
		engine: z.string(),
		api: z.enum(['Vulkan', 'OpenGL', 'DirectX', 'Metal', 'WebGPU', 'Other']),
		features: z.array(z.string()).min(1),
		performance_metrics: z.array(z.string()).default([]),
		problem: z.string().optional(),
		approach: z.array(z.string()).default([]),
		outcomes: z.array(z.string()).default([]),
		external_url: z.string().url().optional(),
		featured: z.boolean().default(false),
		spotlight_order: z.number().int().positive().optional()
	})
});

export const collections = {
	projects
};
