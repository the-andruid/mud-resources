// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightLlmsTxt from 'starlight-llms-txt';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
	site: 'https://resources.writing-games.org',
	markdown: {
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
	},
	integrations: [
		sitemap(),
		starlight({
			plugins: [starlightLlmsTxt()],
			components: {
				Head: './src/components/Head.astro',
			},
			title: 'MU* Resources',
			description: 'Curated resources for playing and creating MUDs, MUSHes, and other multi-user text games. Maintained by Writing Games.',
			customCss: ['./src/styles/custom.css'],
			favicon: '/favicon.png',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'external', label: 'Writing Games', href: 'https://writing-games.org/' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/the-andruid' },
				{ icon: 'mastodon', label: 'Mastodon', href: 'https://mastodon.gamedev.place/@andruid' },
				{ icon: 'rss', label: 'RSS', href: 'https://writing-games.org/feed/' },
			],
			editLink: {
			 	baseUrl: 'https://github.com/the-andruid/mud-resources/edit/main/',
			},
			lastUpdated: true,
			head: [
				{
					tag: 'meta',
					attrs: { name: 'author', content: 'Andruid' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:site_name', content: 'Writing Games' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:card', content: 'summary_large_image' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:creator', content: '@the_andruid' },
				},
			],
			sidebar: [
				{ label: 'Overview', slug: 'index' },
				{
					label: 'Playing',
					items: [
						{ label: 'Getting Started', slug: 'playing/guides' },
						{ label: 'Finding a Game', slug: 'playing/directories' },
						{ label: 'MU* Clients', slug: 'playing/clients' },
					],
				},
				{
					label: 'Developing',
					items: [
						{ label: 'Codebases', slug: 'developing/codebases' },
						{ label: 'Protocols', slug: 'developing/protocols' },
						{ label: 'Open Source Projects', slug: 'developing/open-source' },
						{ label: 'Hosting Services', slug: 'developing/hosting' },
						{ label: 'Accessibility', slug: 'developing/accessibility' },
					],
				},
				{
					label: 'Building & Marketing',
					items: [
						{ label: 'World Building', slug: 'building/craft' },
						{ label: 'Marketing & Retention', slug: 'building/marketing' },
						{ label: 'Recommended Reading', slug: 'building/reading' },
					],
				},
				{ label: 'Archives', slug: 'archives' },
				{ label: 'Interactive Fiction', slug: 'interactive-fiction' },
				{ label: 'Back to Writing Games', link: 'https://writing-games.org/', attrs: { 'aria-label': 'Back to Writing Games (opens in current tab)' } },
			],
		}),
	],
});
