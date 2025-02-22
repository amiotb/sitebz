<script>
  import ProjectImage from "$cmp/ProjectImage.svelte";
  
  /**
   * @typedef {Object} Props
   * @property {any} data
   */

  /** @type {Props} */
  let { data } = $props();
</script>

<svelte:head>
  <title>Mes Projets | Bérengère Amiot</title>
  <meta
    name="description"
    content={`Voici une liste de mes différents projets, cliquer pour plus d'information : ${data.posts
      .map((/** @type {any} */ p) => p.title)
      .slice(0, 10)
      .join(", ")}`}
  />
</svelte:head>

<div
  class="mt-16 sm:mt-20 md:mt-32 lg:mt-40 px-0 sm:px-4 md:px-8 lg:px-16 pt-0 flex w-full flex-col projects-list"
>
  {#each data.posts as post, index}
    <ProjectImage
      image={post.image.url}
      link={`/projects/${post.id}#`}
      name={post.title}
      {index}
    />
  {/each}
</div>
