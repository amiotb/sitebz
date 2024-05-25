<script>
  import { credit } from "$src/lib/credit";
  import BlueGuy from "./BlueGuy.svelte";

</script>

<footer class="flex flex-col p-3 items-center justify-evenly relative overflow-y-hidden">
  <div class="bg-text h-px w-1/3 m-4 opacity-10" />

  <div class="flex flex-col sm:grid sm:grid-cols-7 items-center">
    <div class="col-span-3">
      <a href="mailto:hello@berengereamiot.com">hello@berengereamiot.com</a>
    </div>
    <div class="flex items-center justify-center h-full">
      <div class="bg-text w-px opacity-30 h-5/6" />
    </div>
    <div class="col-span-3">
      <a href="tel:06-63-28-18-96">06 00 00 00 00</a>
    </div>
  </div>
  <a href="#top">Haut de la page</a>
  <a href="https://awenlanguenou.fr" class="text-primary font-sans text-sm transition duration-[1.9s] delay-[1.3s] hover:underline" class:opacity-0={!$credit}>Fait par Awen Languenou</a>
  <a href="/mentions-legales" class="m-1 text-sm">Mentions Légales</a>
  <BlueGuy bind:done={$credit} />
</footer>
