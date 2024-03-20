// import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { labs } from '$lib/.velite';
import type { SvelteComponent } from 'svelte';

type MDXFile = { default: SvelteComponent };
type MDXResolve = () => Promise<MDXFile>;

async function getContent(slug: string) {
  // grab item from data layer
  const item = labs.find((i) => i.slug === slug);
  if (!item) throw Error(`No slug by that name: ${slug}`);
  const { path, updated, title, timeToComplete } = item;

  // find actual module
  const modules = import.meta.glob(`/content/**/*.{md,svx,svelte.md}`);
  const { default: comp } = await (modules[`/${path}.md`] as MDXResolve)();

  return {
    comp,
    metadata: {
      updated,
      title,
      timeToComplete
    }
  };
}

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  const { comp } = await getContent(slug);
  return { comp };
};
