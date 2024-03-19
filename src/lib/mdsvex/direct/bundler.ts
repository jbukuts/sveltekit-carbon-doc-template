import { mdsvex } from 'mdsvex';
import { rollup } from 'rollup';
import svelte from 'rollup-plugin-svelte';
import virtual from '@rollup/plugin-virtual';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import type { PreprocessorGroup } from 'svelte/compiler';

export default async function rollupTest(raw: string) {
  const bundle = await rollup({
    input: 'entry',
    output: {
      format: 'es',
      sourcemap: false
    },
    plugins: [
      virtual({
        entry: raw
      }),
      svelte({
        preprocess: [mdsvex({}) as PreprocessorGroup],
        emitCss: false,
        compilerOptions: { dev: true },
        extensions: ['.md', '']
      }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs()
    ]
  });

  const { output } = await bundle.generate({ exports: 'auto' });
  await bundle.close();

  console.log(output[0]);
}
