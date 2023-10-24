<script>
  import "./style.css";
  import { afterUpdate } from "svelte";

  afterUpdate(() => {
      document
      .querySelectorAll(".projects-list > div")
      //@ts-ignore
      .forEach((el, i) => el.style.setProperty("--index", i));
  });

</script>

<slot />