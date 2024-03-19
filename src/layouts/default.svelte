<!-- this is the default layout applied during mdsvex compilation -->
<script context="module" lang="ts">
  import Heading1 from '$lib/components/Heading1.svelte';

  export { Heading1 as h1 };
</script>

<div id="article-layout">
  <slot>
    <!-- the mdsvex content will be slotted in here -->
  </slot>
</div>

<style lang="scss">
  #article-layout {
    margin-bottom: 1.475rem;
  }
</style>
