import { compile } from 'mdsvex';
import { compile as svelte_compile } from 'svelte/compiler';

export default async function builtinCompile(raw: string) {
  const preprocess = await compile(raw, {});
  const compiled = svelte_compile(preprocess!.code, {
    generate: 'ssr',
    hydratable: true,
    filename: 'Helloworld.svelte'
  });

  const { js: Comp } = compiled;

  return Comp;
}
