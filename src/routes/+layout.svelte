<script>
  import CookieInfo from "$cmp/CookieInfo.svelte";
  import Footer from "$cmp/Footer.svelte";
  import Navbar from "$cmp/Navbar.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { navigating } from "$app/state";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();

</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />
</svelte:head>

<div
  class="text-text bg-background font-ostia-regular font-normal overflow-hidden"
>
  <main class="min-h-screen p-10 flex flex-col" id="top">
    <Navbar />
    {@render children?.()}
    <CookieInfo />
  </main>
  <Footer />
</div>
