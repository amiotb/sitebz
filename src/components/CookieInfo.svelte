<script>
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  const enabled = writable(false);
  const loaded = writable(false);
  onMount(() => {
    $enabled = window.localStorage.hideInfo === "true";
    $loaded = true;
    enabled.subscribe(
      (value) => (window.localStorage.hideInfo = String(value))
    );
  });
</script>

{#if !$enabled && $loaded}
  <div
    class="fixed bg-background bottom-5 right-5 rounded ml-5"
    out:fade={{}}
    in:fade={{}}
  >
    <div class="p-5 bg-black bg-opacity-10">
      <p>
        Nous n'utilisons ni de cookies, <br />
        ni ne recueillons d'informations.
      </p>
      <div class="flex justify-end">
        <button on:click={() => ($enabled = true)} class="font-medium pr-2"
          >cacher</button
        >
      </div>
    </div>
  </div>
{/if}
