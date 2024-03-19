import { mdsvex, compile as mdsvexCompile } from 'mdsvex';
import * as svelte from 'svelte/compiler';
import { create_ssr_component } from 'svelte/internal';

export default async function blobLoad(raw: string) {
  // const c = await mdsvexCompile('## test', {});
  const p = await svelte.preprocess(raw, [mdsvex({}) as svelte.PreprocessorGroup], {
    filename: 'test.md'
  });
  const com = await svelte.compile(p.code, { generate: 'ssr' });

  const blob = new Blob([com.js.code], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);

  const t = create_ssr_component(() => {
    return `<h2>test</h2>`;
  });
}
