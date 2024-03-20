<script lang="ts">
  import 'carbon-components-svelte/css/all.css';
  import '../styles/global.scss';
  import {
    Header,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavDivider,
    Content,
    HeaderUtilities,
    HeaderGlobalAction,
    HeaderSearch,
    Theme
  } from 'carbon-components-svelte';
  import { Light, EarthFilled, Moon } from 'carbon-icons-svelte';
  import { browser } from '$app/environment';
  import { SLUG_TREE } from '$lib/velite';
  import SideNavTree from '$lib/components/SideNavTree.svelte';

  type CarbonTheme = 'white' | 'g10' | 'g90' | 'g100';

  let isSideNavOpen = false;
  let theme: CarbonTheme = 'g100';

  let tree = SLUG_TREE.children!.en!.children!;

  function toggleTheme() {
    theme = theme === 'g100' ? 'white' : 'g100';
  }

  // reacive statement like useEffect
  $: if (browser) {
    document.documentElement.style.colorScheme = theme === 'g100' ? 'dark' : 'light';
  }
</script>

<Theme bind:theme persist persistKey="__carbon-theme" />
<Header company="Carbon" platformName="SvelteKit Template" bind:isSideNavOpen>
  <HeaderUtilities>
    <HeaderSearch />
    <HeaderGlobalAction
      on:click={toggleTheme}
      icon={theme === 'white' ? Light : Moon}
      iconDescription="Toggle theme"
      tooltipAlignment="end" />
    <HeaderGlobalAction
      icon={EarthFilled}
      iconDescription="Change language"
      tooltipAlignment="end" />
  </HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen} id="sidebar">
  <SideNavItems>
    <SideNavLink text="Home" href="/"></SideNavLink>
    <SideNavDivider></SideNavDivider>
    <SideNavTree navItems={tree}></SideNavTree>
  </SideNavItems>
</SideNav>

<Content>
  <slot />
</Content>

<style lang="scss">
  // $carbon--theme: themes.$carbon--theme--g100;
  :global(#sidebar) {
    border-right: 1px solid var(--cds-border-subtle) !important;
    background-color: var(--cds-ui-01);
  }
</style>
