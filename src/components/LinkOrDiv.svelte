<script>
  export let href = "";
  let className = "";

  export { className as class };
</script>

{#if href == ""}
  <p class={className}>
    <slot />
  </p>
{:else}
  <a {href} class={className}>
    <slot />
  </a>
{/if}
