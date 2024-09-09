<script>
  import ProjectImage from "$cmp/ProjectImage.svelte";

  // Comme dans les posts
  const images = [
    {
      url: "/images/profil.jpg",
      text: "crédit photo Gwendal Le Flem",
    },
  ];
</script>

<svelte:head>
  <title>Infos et Contact</title>
  <!-- Mettre le début du texte -->
  <meta name="description" content="designer indépendante" />
</svelte:head>

<div
  class="mt-16 sm:mt-20 md:mt-32 lg:mt-40 px-0 sm:px-16 md:px-24 lg:px-52 pt-0 prose sm:prose-lg md:prose-xl prose-headings:font-medium max-w-none"
>
</div>
  <!-- Tu peux changer de là -->

  <div class="w-1/2 md:w-full"
 <p>
    Bérengère Amiot est designer indépendante, diplômée de l’École Européenne Supérieure d’Art de
    Bretagne de Rennes – EESAB – option design et d’une licence d’Information et
    de Communication. Depuis 2012, elle développe des objets numériques, et
    conçoit des projets de création partagée autour des arts et des pratiques
    numériques. Ses projets associent des formes simples et des technologies
    innovantes pour expérimenter des nouveaux usages. Ainsi elle a mis en place,
    pas à pas une méthodologie de travail centrée sur l’usager et
    l’expérimentation. <br />
 </p>
 <p>
    Design objet / Scénographie : Ses projets associent des formes simples avec des technologies interactives pour
    des usages intuitifs.
<br />
 Résidence / Workshop : Ses ateliers s’articulent autour du design collaboratif, qui consiste à intégrer les futurs
usagers dans le processus de création, et de la fabrication numérique.
<br />
    Formation / Conférence : Ses propos portent sur l’expérimentation comme outil pédagogique au service d’émergence
    d’idées.
 </p>
 <p>
Ce que je peux faire avec vous :<br />
    <ul class="list-disc">
      <li>Créer des objets et des sercices</li>
      <li>Inventer des mondes imaginaires</li>
      <li>Définir des identités numériques</li>
      <li>Aider à la mise en place de projets d’innovation sociale</li>
      <li>Imaginer des dispositifs de transmission et de formation</li>
      <li>Concevoir des espaces d’interactions réels ou virtuels</li>
    </ul>
  <!-- Tu peux changer a là -->
</div>

<div class="mt-20 flex w-full flex-col projects-list">
  {#each images as image}
    <ProjectImage image={image.url} name={image.text} />
  {/each}
</div>
