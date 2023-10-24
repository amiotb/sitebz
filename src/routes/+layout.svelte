<script>
  import CookieInfo from "$cmp/CookieInfo.svelte";
  import Footer from "$cmp/Footer.svelte";
  import Navbar from "$cmp/Navbar.svelte";
  import "../app.css";
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />
</svelte:head>

<div class="text-text bg-background font-secra font-normal">
  <main class="min-h-screen p-10 flex flex-col" id="top">
    <Navbar />
    <slot />
    <CookieInfo />
  </main>
  <Footer />
</div>
