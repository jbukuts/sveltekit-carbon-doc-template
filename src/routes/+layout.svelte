<script lang="ts">
  import 'carbon-components-svelte/css/all.css';
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
  import { Light, EarthFilled } from 'carbon-icons-svelte';
  import { browser } from '$app/environment';

  type CarbonTheme = 'white' | 'g10' | 'g90' | 'g100';

  let isSideNavOpen = false;
  let theme: CarbonTheme = 'g100';

  function toggleTheme() {
    theme = theme === 'g100' ? 'white' : 'g100';
  }

  // reacive statement like useEffect
  $: if (browser) {
    // document.documentElement.setAttribute("theme", theme);
  }
</script>

<Theme bind:theme persist persistKey="__carbon-theme" />
<Header company="IBM" platformName="VAD VAR Svelte" bind:isSideNavOpen>
  <HeaderUtilities>
    <HeaderSearch />
    <HeaderGlobalAction
      on:click={toggleTheme}
      icon={Light}
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
    <SideNavLink text="Test Page" href="/en/test-base"></SideNavLink>
  </SideNavItems>
</SideNav>

<Content>
  <slot />
</Content>

<style lang="scss">
  $carbon--theme: themes.$carbon--theme--g100;
  :global(#sidebar) {
    border-right: 1px solid gray !important;
  }
</style>
