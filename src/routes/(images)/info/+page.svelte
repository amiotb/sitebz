<svelte:head>
  <title>Infos et Contact</title>
  <!-- Mettre le début du texte -->
  <meta name="description" content="designer indépendante">
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
 <h2>Design objet / Scénographie</h2>
    Mes projets associent des formes simples avec des technologies interactives pour des usages intuitifs.
  </p>
  <h2>Résidence / Workshop</h2>
  <p>
    Mes ateliers s’articulent autour de la collaboration et de la fabrication numérique.
  </p>
 <h2>Formation / Conférence</h2>
  <p>
Mes propos portent sur l’expérimentation comme outil pédagogique au service
d’émergence d’idées.  
</p>
 <h2>Ce que je peux faire avec vous :</h2>
  <p>
Créer des objets et des sercices  
</p>
  <p>
Inventer des mondes imaginaires
</p>
  <p>
Définir des identités numériques
</p>
  <p>
Aider à la mise en place de projets d’innovation sociale
</p>
  <p>
Imaginer des dispositifs de transmission et de formation
</p>
  <p>
Concevoir des espaces d’interactions réels ou virtuels
</p>
  <!-- Tu peux changer a là -->

</div>

<div class="mt-20 flex w-full flex-col projects-list">
  {#each images as image}
    <ProjectImage image={image.url} name={image.text} />
  {/each}
</div>
