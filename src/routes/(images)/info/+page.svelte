<svelte:head>
  <title>Qui suis-je ? | Bérengère Amiot</title>
  <!-- Mettre le début du texte -->
  <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non
  molestias dignissimos vel minus illum aut cumque, neque, aspernatur quasi
  suscipit voluptatibus at eum! Excepturi quidem necessitatibus praesentium
  porro quibusdam.">
</svelte:head>

<script>
  import ProjectImage from "$cmp/ProjectImage.svelte";


  // Comme dans les posts
  const images = [
    {
      url: "/images/4.png",
      text: "My table",
    },
    {
      url: "/images/2.png",
      text: "Just a second bird",
    },
    {
      url: "/images/1.png",
      text: "Just a third bird",
    },
  ]
</script>

<div class="mt-16 sm:mt-20 md:mt-32 lg:mt-40 px-6 sm:px-16 md:px-24 lg:px-52 pt-0 sm:prose-2xl prose-xl prose-headings:font-medium">
  
  <!-- Tu peux changer de là -->

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non
    molestias dignissimos vel minus illum aut cumque, neque, aspernatur quasi
    suscipit voluptatibus at eum! Excepturi quidem necessitatibus praesentium
    porro quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Vitae quae qui id cupiditate voluptatum numquam beatae eum aperiam maiores
    officiis aliquam voluptatem delectus obcaecati deserunt quo, sequi
    perspiciatis quos cum. Lorem, ipsum dolor sit amet consectetur adipisicing
    elit. Aspernatur soluta <i>magnam</i> corrupti ipsam, molestiae
    exercitationem aut tempora porro quia fugit voluptate eveniet perspiciatis
    itaque amet dolorem, enim similique nesciunt ad. Lorem ipsum dolor sit amet
    <strong>consectetur</strong>
    adipisicing elit. At illo libero possimus doloremque sed vero reiciendis,
    <u>quisquam</u> quos veniam tempora, amet perferendis tempore laboriosam, atque
    earum culpa odit voluptatem repellat.
  </p>
  <h2>MOI</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non
    molestias dignissimos vel minus illum aut cumque, neque, aspernatur quasi
    suscipit voluptatibus at eum! Excepturi quidem necessitatibus praesentium
    porro quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Vitae quae qui id cupiditate voluptatum numquam beatae eum aperiam maiores
    officiis aliquam voluptatem delectus obcaecati deserunt quo, sequi
    perspiciatis quos cum. Lorem, ipsum dolor sit amet consectetur adipisicing
    elit. Aspernatur soluta magnam corrupti ipsam, molestiae exercitationem aut
    tempora porro quia fugit voluptate eveniet perspiciatis itaque amet dolorem,
    enim similique nesciunt ad. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. At illo libero possimus doloremque sed vero reiciendis,
    quisquam quos veniam tempora, amet perferendis tempore laboriosam, atque
    earum culpa odit voluptatem repellat.
  </p>
  
  <!-- Tu peux changer a là -->

</div>

<div class="mt-20 flex w-full flex-col projects-list">
  {#each images as image}
    <ProjectImage image={image.url} name={image.text} />
  {/each}
</div>
