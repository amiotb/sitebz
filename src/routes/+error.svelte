<script>
  import { page } from "$app/state";
</script>

<div class="text-center mt-32">
  <h1 class="text-5xl">{page.status} {page.error?.message}</h1>
</div>
