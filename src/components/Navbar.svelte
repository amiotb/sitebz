<script>
    import { page } from "$app/stores";
    import { writable } from "svelte/store";
    //console.log($page.route.id)

    let isInfoPage = writable(false);
    let isProjectsPage = writable(false);

    page.subscribe((p) => {
        isInfoPage.set(p.route.id?.endsWith("/info") || false)
        isProjectsPage.set(p.route.id?.endsWith("/projects") || false)
    })
</script>

<nav class="text-3xl sm:text-4xl flex justify-between sm:justify-around">
  <a href={$isInfoPage ? '/#top' : '/info'} class="hover:text-primary transition" class:text-primary={$isInfoPage} class:font-medium={$isInfoPage}>*{$isInfoPage ? 'Bérengère Amiot' : 'info'}</a>
  <a href="/projects" class="hover:text-primary transition" class:text-primary={$isProjectsPage} class:font-medium={$isProjectsPage}>*projets</a>
</nav>
