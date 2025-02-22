<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<script>
  import { navigating } from "$app/state";
  import "./style.css";

  // $effect(() => {
  //   if (navigating.complete) {
  //     console.log('runned')
  //     document
  //       .querySelectorAll(".projects-list > div")
  //       //@ts-ignore
  //       .forEach((el, i) => el.style.setProperty("--index", i));
  //   }
  // });
</script>

<slot />
