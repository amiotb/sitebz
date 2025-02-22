<script>
    import { page } from "$app/state";
    //console.log($page.route.id)

    let isInfoPage = $state(false);
    let isProjectsPage = $state(false);

    $effect(() => {

      isInfoPage = (page.route.id?.endsWith("/info") || false)
      isProjectsPage = (page.route.id?.endsWith("/projects") || false)
    })
</script>

<nav class="text-3xl sm:text-4xl flex justify-between sm:justify-around">
  <a href={isInfoPage ? '/#top' : '/info'} class="hover:text-primary underlink transition" class:text-primary={isInfoPage} class:font-medium={isInfoPage}>*{isInfoPage ? 'Bérengère Amiot' : 'info'}</a>
  <a href="/projects" class="hover:text-primary underlink transition" class:text-primary={isProjectsPage} class:font-medium={isProjectsPage}>*projets</a>
</nav>