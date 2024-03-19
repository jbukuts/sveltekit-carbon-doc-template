<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  $: component = data.comp as unknown as any;
</script>

<article>
  <svelte:component this={component} />
</article>
