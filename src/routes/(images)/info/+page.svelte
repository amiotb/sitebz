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
 <br />
<h2>Résidence / Workshop</h2>
    Mes ateliers s’articulent autour de la collaboration et de la fabrication numérique.
 <br />
<h2>Formation / Conférence</h2>
 <br />
Mes propos portent sur l’expérimentation comme outil pédagogique au service
d’émergence d’idées.  
 <br />
</p>
<p> 
Bérengère Amiot est diplômée de l’École Européenne Supérieure d’Art de Bretagne de Rennes – EESAB – option design et d’une licence d’Information et de Communication. 
Depuis 2012, elle développe des objets numériques, et conçoit des projets de création partagée autour des arts et des pratiques numériques. 
Ses projets associent des formes simples et des technologies innovantes pour expérimenter des nouveaux usages. 
Ainsi elle a mis en place, pas à pas une méthodologie de travail centrée sur l’usager et l’expérimentation.
</p>
  <p>
 <br />
<h2>Ce que je peux faire avec vous :</h2>
 <br />
Créer des objets et des sercices  
 <br />
Inventer des mondes imaginaires
 <br />
Définir des identités numériques
 <br />
Aider à la mise en place de projets d’innovation sociale
 <br />
Imaginer des dispositifs de transmission et de formation
 <br />
Concevoir des espaces d’interactions réels ou virtuels
</p>
  <!-- Tu peux changer a là -->

</div>

<div class="mt-20 flex w-full flex-col projects-list">
  {#each images as image}
    <ProjectImage image={image.url} name={image.text} />
  {/each}
</div>
