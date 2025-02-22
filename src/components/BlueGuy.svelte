<script>
  import { run } from 'svelte/legacy';

  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let rightSide = $state(true);

  let count = $state(0);
  let hideGuy = $state(false);

  /**
   * @typedef {Object} Props
   * @property {boolean} [done]
   */

  /** @type {Props} */
  let { done = $bindable(false) } = $props();
  let display = $state(false);

  onMount(() => {
    if (done) {
      hideGuy = true;
    } else {
      setTimeout(() => (display = true), 30000);
    }
  });

  run(() => {
    //console.log(count)
    if (count >= 2) {
      //console.log("hide !!");
      setTimeout(() => (hideGuy = true), 2900);
      done = true;
    }
  });
</script>

{#if !rightSide && !done && display}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <div
    class="absolute w-20 h-20 bottom-3 left-3 group flex justify-center items-center overflow-hidden -m-3"
    onmouseover={() => {
      if (!rightSide) count++;
      rightSide = true;
    }}
  >
    <div
      class="bg-primary rounded-full w-5 h-5 transition duration-500"
      transition:fly={{ duration: 600, x: -80 }}
></div>
  </div>
{:else if rightSide && !done && display}
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="absolute w-20 h-20 bottom-3 right-3 group flex justify-center items-center overflow-hidden -m-3"
    onmouseover={() => {
      if (rightSide) count++;
      rightSide = false;
    }}
  >
    <div
      class="bg-primary rounded-full w-5 h-5 transition duration-500"
      transition:fly={{ duration: 600, x: 80 }}
></div>
  </div>
{:else if display}
  <div
    in:fly={{ duration: 600, x: 80 }}
    class="absolute bottom-8 right-8 flex justify-center items-center mix-blend-difference"
    class:hidden={hideGuy}
  >
    <div
      class="bg-primary invert rounded-full absolute w-5 h-5 transition duration-500 blue-guy-1"
></div>
    <div
      class="bg-primary invert rounded-full absolute w-2 h-2 transition duration-500 blue-guy-2 mix-blend-difference"
></div>
  </div>
{/if}

<style>
  @keyframes blueguy {
    0% {
    }
    50% {
      transform: translateX(calc(-50vw + 2rem + 10px));
    }
    75% {
      transform: translateX(calc(-50vw + 2rem + 10px)) scale(15);
    }
    100% {
      transform: translateX(calc(-50vw + 2rem + 10px)) scale(60);
    }
  }

  @keyframes blueguy2 {
    0% {
    }
    50% {
      transform: translateX(calc(-50vw + 2rem + 10px));
    }
    60% {
      transform: translateX(calc(-50vw + 2rem + 10px));
    }
    75% {
      transform: translateX(calc(-50vw + 2rem + 10px)) scale(15);
    }
    100% {
      transform: translateX(calc(-50vw + 2rem + 10px)) scale(150);
    }
  }

  .blue-guy-1 {
    animation: blueguy 3s ease-in-out;
  }

  .blue-guy-2 {
    animation: blueguy2 3s ease-in-out;
  }
</style>
