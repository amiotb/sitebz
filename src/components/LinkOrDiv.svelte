<script>
  /**
   * @typedef {Object} Props
   * @property {string} [href]
   * @property {string} [class]
   * @property {import('svelte').Snippet} children
   */

  /** @type {Props} */
  let { href = "", class: className = "", children } = $props();

  
</script>

{#if href == ""}
  <div class={className}>
    {@render children()}
  </div>
{:else}
  <a {href} class={className}>
    {@render children()}
  </a>
{/if}
