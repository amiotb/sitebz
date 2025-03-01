<script>
  import { videosExtentions } from "$lib/videoExtentions";
  import Appear from "./Appear.svelte";
  import LinkOrDiv from "./LinkOrDiv.svelte";

  // const im = () => import('$static/images/profil.jpg?enhanced').then((m) => m['default']);

  /**
   * @typedef {Object} Props
   * @property {string} image
   * @property {string} [link]
   * @property {string} [name]
   * @property {number} [index]
   * @property {()=>void} [onclick]
   */

  /** @type {Props} */
  let {
    image = "/images/1.png",
    link = "",
    name = "Hello World",
    index = 0,
    onclick = () => {},
  } = $props();

  let videoPaused = $state(true);

  // let imageImMyImagep = import('../../../../static' + image + '?enhanced').then((m) => m['default'])

  /**
   * @param {Event} event
   */
  function onchange(event) {
    if (event.target) {
      const t = event.target;
      //@ts-ignore
      videoPaused = t.paused ?? false;
    }
    // console.log(event)
  }
</script>

<Appear
  class="flex flex-row w-full pointer-events-none justify-center project -translate-x-6 group-odd/project:translate-x-6"
  style="--index: {index};"
>
  <div
    class="lg:w-1/2 xs:w-2/3 w-0 group-odd/project:order-2 pointer-events-none"
  ></div>
  <LinkOrDiv
    href={link}
    class="lg:w-1/2 xs:w-2/3 w-full block bg-primary relative group pointer-events-auto transition duration-1000 text-center hover:scale-105 delay-0 hover:delay-500"
  >
    {#if videosExtentions.some((ext) => image.endsWith(ext))}
      <!-- svelte-ignore a11y_media_has_caption -->
      <video
        class="w-full object-cover group-hover:opacity-100 playing:opacity-100 opacity-20 transition duration-500"
        controls
        autoplay={false}
        onpause={onchange}
        onplay={onchange}
        class:playing={!videoPaused}
      >
        <source src={image} type="video/mp4" />
        {name}
      </video>
      <div
        class:playing={!videoPaused}
        class="absolute top-1/2 left-1/2 group-hover:pointer-events-none -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 visible opacity-100 transition duration-500 font-normal text-2xl text-background playing:opacity-0"
      >
        {name}
      </div>
    {:else}
      <button onclick={() => onclick()} class="contents">
        <img
          src={image}
          class="w-full object-cover group-hover:opacity-20 opacity-100 transition duration-500"
          alt={name}
        />

        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition duration-500 font-normal text-2xl text-background"
        >
          {name}
        </div>
      </button>
    {/if}
  </LinkOrDiv>
  <!-- <div class="bg-primary absolute w-full h-full top-0"/> -->
</Appear>

<style>
  :global(.project) {
    --tw-translate-y: calc(
      calc(var(--project-y) * var(--index) * -1) + var(--translate-y)
    ) !important;
  }
</style>
