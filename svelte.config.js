import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexConfig from './mdsvex.config.js';
import { mdsvex } from 'mdsvex';
import { optimizeCarbonImports } from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...(mdsvexConfig.extensions || [])],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({}), optimizeCarbonImports(), mdsvex(mdsvexConfig)],
  kit: {
    files: {
      // assets: '.velite'
    },
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      pages: 'out',
      assets: 'out',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    alias: {
      '#content/*': 'content/*'
    }
  }
};

export default config;
