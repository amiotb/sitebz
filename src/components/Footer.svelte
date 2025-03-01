<script>
  import { credit } from "$src/lib/credit";
  import BlueGuy from "./BlueGuy.svelte";

</script>

<footer class="flex flex-col p-3 items-center justify-evenly relative overflow-y-hidden">
  <div class="bg-text h-px w-1/3 m-4 opacity-10"></div>

  <a href="mailto:hello@berengereamiot.com" class="underlink">hello@berengereamiot.com</a>

  <a href="#top" class="underlink">*Haut de la page</a>
  <a href="https://awenlanguenou.fr" target="_blank" class="text-primary font-sans text-sm transition duration-[1.9s] delay-[1.3s] hover:underline" class:opacity-0={!$credit} class:hover:opacity-50={!$credit}>Fait par Awen Languenou</a>
  <a href="/mentions-legales" class="m-1 text-sm underlink">*Mentions Légales</a>
  <BlueGuy bind:done={$credit} />
</footer>
