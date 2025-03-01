<script>
  import { onMount } from "svelte";
  import { inview } from "svelte-inview";

  /**
   * @type {any}
   */
  let isInView = $state();
  let scrollDirection;
  const options = {
    rootMargin: "-100px",
    //unobserveOnEnter: true,
  };

  let waitTime = 500;
  let canRun = $state(true);

  onMount(() => {
    setTimeout(() => {
      canRun = true;
    }, waitTime)
  })

  // @ts-ignore
  const handleChange = ({ detail }) => {
    if(isInView && canRun) return;
    isInView = detail.inView;
    scrollDirection = detail.scrollDirection;
    // console.log(scrollDirection)
    // && scrollDirection.vertical == 'down'
  };

  /**
   * @typedef {Object} Props
   * @property {string} [class]
   * @property {string} [style]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { class: className = '',style  = '', children } = $props();

  
</script>

<div use:inview={options} oninview_change={handleChange} class="group/project" {style}>
  <div
    class:view={isInView && canRun}
    class={"view:opacity-100 opacity-0 transition duration-1000 project-y-2 xs:project-y-4 sm:project-y-6 view:translate2-y-0 translate2-y-20 " + className}
  >
    {@render children?.()}
  </div>
</div>
