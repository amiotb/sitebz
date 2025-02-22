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
  class="mt-16 sm:mt-20 md:mt-32 lg:mt-40 px-0 sm:px-16 md:px-24 lg:px-32 py-0 prose sm:prose-lg md:prose-xl prose-headings:font-normal prose-headings:text-primary max-w-none"
>
  <!-- Tu peux changer de là -->

  <p>
    Depuis 12 ans, Bérengère Amiot développe des objets numériques, et conçois
    des projets de création partagée autour des arts et des pratiques
    numériques. Ses projets associent des formes simples et des technologies
    innovantes pour expérimenter des nouveaux usages. Ainsi elle a mis en place,
    pas à pas une méthodologie de travail centré sur l’usager, et
    l’expérimentation à travers le design collaboratif. Son axe de travail
    diffuse plus largement une pédagogie basée sur les principes de
    l’open-source, de l’économie circulaire et de l’inclusion numérique. Elle
    s’implique tout particulièrement dans le réseau des labfabs de Rennes
    Métropole en tant que présidente de l’association depuis 5 ans. Son travail
    oscille entre le design d’objets interactifs, la création d’outils
    pédagogiques de concertation, la conception d’oeuvres collaboratives... Tous
    ses projets ont un résultat tangible (objets, affiches, sites internets...).
    L’encapacitation des usagers est le coeur de son travail. Très vite, elle
    utilise la cartographie pour rendre visible, sensible et accessible les
    recherches et les expérimentations menés pendant ses projets collaboratifs.
    Les cartes permettent de faire cohabiter une diversité de pratiques, de
    savoirs concrets et imaginaires. La technologie utilisée pour rendre
    interactif les objets est toujours cachée pour ne pas prendre le pas sur la
    narration. Bérengère Amiot fait le choix d’utiliser des outils peu coûteux
    ou reprogrammables, en accord avec une démarche éthique et respectueuse de
    l’environnement. Cette approche vise à limiter l’impact écologique de ses
    créations tout en encourageant une économie du partage.
  </p>
  <p>
    <span style="font-family:OstiaAnticaBookItalic;"
      >Design objet / Scénographie</span
    >
  </p>
  <p>
    <span style="font-family:OstiaAnticaBookItalic;"
      >Ses projets associent des formes simples avec des technologies
      interactives pour des usages intuitifs.</span
    >
  </p>
  <p>
    <span style="font-family:OstiaAnticaBookItalic;">Résidence / Workshop</span>
  </p>
  <p>
    <span style="font-family:OstiaAnticaBookItalic;"
      >Ses ateliers s’articulent autour du design collaboratif, qui consiste à
      intégrer les futurs usagers dans le processus de création, et de la
      fabrication numérique.</span
    >
  </p>
  <p>
    <span style="font-family:OstiaAnticaBookItalic;"
      >Formation / Conférence</span
    >
  </p>
  <p>
    <span style="font-family:OstiaAnticaBookItalic;"
      >Ses propos portent sur l’expérimentation comme outil pédagogique au
      service d’émergence d’idées.</span
    >
    <!-- Tu peux changer a là -->
  </p>
</div>

<div class="mt-20 flex w-full flex-col projects-list">
  {#each images as image, index}
    <ProjectImage image={image.url} name={image.text} {index} />
  {/each}
</div>
