import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [AutoImport({ include: ['**/*.md'], dirs: ['./src/lib/components'] }), sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
				@use 'carbon-components/scss/globals/scss/vars';
				@use 'carbon-components/scss/globals/scss/vendor/@carbon/themes/scss' as themes;
				`
      }
    }
  },
  server: {
    fs: {
      allow: ['content']
    }
  }
});
