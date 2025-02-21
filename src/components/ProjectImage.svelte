<script>
  import Appear from "./Appear.svelte";
  import LinkOrDiv from "./LinkOrDiv.svelte";

  export let image = "/images/1.png";
  export let link = "";
  export let name = "Hello World";

  const videosExtentions = ['.mp4'];
  var videoPaused = false;
</script>

<Appear
  class="flex flex-row w-full justify-center project -translate-x-6 group-odd/project:translate-x-6"
>
  <div class="lg:w-1/2 xs:w-2/3 w-0 group-odd/project:order-2" />
  <LinkOrDiv
    href={link}
    class="lg:w-1/2 xs:w-2/3 w-full block bg-primary relative group transition duration-1000 text-center"
  >
    {#if videosExtentions.some(ext => image.endsWith(ext))}
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        class="w-full object-cover group-hover:opacity-100 playing:opacity-100 opacity-20 transition duration-500"
        controls
        bind:paused={videoPaused}
        class:playing={!videoPaused}
      >
        <source src={image} type="video/mp4" />
        Hello world
      </video>
      <div
        class:playing={!videoPaused}
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:hidden visible opacity-100 transition duration-500 font-normal text-2xl text-background playing:hidden playing:opacity-0"
      >
        {name}
      </div>
    {:else}
      <img
        src={image}
        class="w-full object-cover group-hover:opacity-20 opacity-100 transition duration-500"
        alt="{name}"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition duration-500 font-normal text-2xl text-background"
      >
        {name}
      </div>
    {/if}
  </LinkOrDiv>
  <!-- <div class="bg-primary absolute w-full h-full top-0"/> -->
</Appear>
