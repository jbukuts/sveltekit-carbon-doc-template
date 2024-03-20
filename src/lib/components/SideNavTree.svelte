<script lang="ts">
  import type { SlugTree } from '$lib/velite/generate-tree';
  import { SideNavLink, SideNavMenu } from 'carbon-components-svelte';

  export let navItems: NonNullable<SlugTree['children']>;
  export let depth: number = 0;
</script>

{#each Object.values(navItems) as { children, title, slug }}
  {#if children === undefined}
    <SideNavLink href={slug} class={`depth-${depth}`}>{title}</SideNavLink>
  {:else}
    <SideNavMenu text={title} class={`depth-${depth + 1}`}>
      <SideNavLink href={slug} class={`depth-${depth + 1}`}>{title}</SideNavLink>
      <svelte:self navItems={children} depth={depth + 1}></svelte:self>
    </SideNavMenu>
  {/if}
{/each}
