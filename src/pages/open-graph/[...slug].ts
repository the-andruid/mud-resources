import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const collection = await getCollection('docs');
const pages = Object.fromEntries(
	collection.map(({ id, data }) => [
		id.replace(/\.(md|mdx)$/, ''),
		{ title: data.title, description: data.description ?? '' },
	])
);

const route = await OGImageRoute({
	param: 'slug',
	pages,
	getImageOptions: (_path, page) => ({
		title: page.title,
		description: page.description,
		// Writing Games brand: teal accent over dark teal background
		bgGradient: [
			[1, 55, 50],
			[3, 60, 55],
		],
		border: { color: [3, 189, 168], width: 8, side: 'inline-start' },
		padding: 80,
		font: {
			title: {
				color: [255, 255, 255],
				weight: 'Bold',
				size: 72,
			},
			description: {
				color: [194, 203, 201],
				size: 32,
				lineHeight: 1.4,
			},
		},
	}),
});

export const prerender = true;
export const getStaticPaths = route.getStaticPaths;
export const GET = route.GET;
