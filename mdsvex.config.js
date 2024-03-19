import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.md'],
  layout: './src/layouts/default.svelte',
  rehypePlugins: [],
  remarkPlugins: []
});

export default config;
