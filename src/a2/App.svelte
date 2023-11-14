<script>
  import Body from './Body.svelte';
  import Mobile from './Mobile.svelte';
  let mobile = false;
  if(window.innerWidth < window.innerHeight){
    mobile = true;
  }
</script>
{#if !mobile}
  <Body/>
  {:else}
  <Mobile/>
{/if}
