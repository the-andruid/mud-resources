# MU* Resources

Source for [resources.writing-games.org](https://resources.writing-games.org) - a curated reference for those interested in playing or creating multi-user (MU*) text games.

Built with [Astro Starlight](https://starlight.astro.build/). Deployed via Cloudflare Pages.

## Working on it

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Content

All pages live in `src/content/docs/`, organized into sections by directory (`playing/`, `developing/`, `building/`) with standalone top-level pages (`index.md`, `archives.md`, `interactive-fiction.md`).

Navigation order is configured in `astro.config.mjs`.

## Contributing

Edits, additions, and suggestions welcome. Feel free to open an issue or submit a pull request! You can also hit me up on Discord or use the [Submit a Resource](https://writing-games.org/submit-a-resource/) form.
