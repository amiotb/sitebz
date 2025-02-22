<script>
  import Appear from "$cmp/Appear.svelte";
  import ProjectImage from "$cmp/ProjectImage.svelte";

  
  /**
   * @typedef {Object} Props
   * @property {any} data
   */

  /** @type {Props} */
  let { data } = $props();
</script>

<svelte:head>
  <title>Projet {data.title} | Bérengère Amiot</title>
  <!-- TO DODO : hide html balises -->
  <meta name="description" content={`Projet ${data.title} : ${data.content.slice(0, 30)}`}
  />
</svelte:head>


<div
  class="mt-16 sm:mt-20 md:mt-32 lg:mt-40 px-0 sm:px-16 md:px-24 lg:px-32 py-0 prose sm:prose-lg md:prose-xl prose-headings:font-normal prose-headings:text-primary max-w-none"
>
  <h1>{data.title}</h1>

  {@html data.content}
</div>
<div class="mt-20 flex w-full flex-col projects-list">
  {#each data.images as image, index}
    <ProjectImage image={image.url} name={image.text} {index} />
  {/each}
</div>
