# Carbon SvelteKit Documentation Template

This is a site template created with Next.js and Carbon Design System that is intended to build a documentation-style site as static assets.

It is built using:

- SvelteKit
- Carbon i.e `carbon-components-svelte`
  - Adheres to Carbon v10
- MDX
- Velite (as a content layer between site code and content)

## Getting Started

> This template requires a minimum of Node v18.17.0 to be installed.

First install dependencies via:

```bash
npm ci
```

Then, run the development server:

```bash
npm run dev -- --open
```

This will open the dev site at http://localhost:5173 in your browser.

## Building for production

To create a production version of your app:

```bash
npm run build
```

This will build out static assets to the `out` folder. You can preview the production build with:

```bash
npm run preview -- --open
```

This will open the prod build of the site in your browser at http://localhost:4174.

> The currently configured adapter is for a static build. Read about more adapters [here](https://kit.svelte.dev/docs/adapters)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [SvelteKit Documentation](https://kit.svelte.dev/docs/introduction) - learn about Next.js features and API.
- [Learn Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte) - interactive Svelte documentations.
- [REPL](https://svelte.dev/repl/hello-world?version=4.2.12) - Svelte Playground
