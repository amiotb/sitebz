<script>
    import { videosExtentions } from "$lib/videoExtentions";
    import { fade } from "svelte/transition";

    /**
     * @typedef {Object} Props
     * @property {any[]} images
     * @property {number} index
     * @property {boolean} show
     */

    /** @type {Props} */
    let { images, index = $bindable(), show = $bindable() } = $props();

    const image = $derived(images[index]);

    $inspect(index);

    $effect(() => {
        if (show) {
            dialog?.showModal();
        } else {
            dialog?.close();
        }
    });

    function close() {
        dialog?.close();
        show = false;
    }

    /**
     * @type {HTMLDialogElement|undefined}
     */
    let dialog = $state();

    function next() {
        index++;
        if (index >= images.length) index = 0;
    }

    function previous() {
        index--;
        if (index < 0) index = images.length - 1;
    }
</script>

{#if show}
    <dialog
        onclose={close}
        bind:this={dialog}
        transition:fade
        class="appearance-none flex h-screen w-screen bg-transparent backdrop:bg-black backdrop:bg-opacity-70 flex-col items-center p-2 md:p-10 z-50"
    >
        <div class="flex-grow h-1 max-w-full">
            <!-- <div class="bg-orange-500"> -->
            {#if videosExtentions.some((ext) => image.url.endsWith(ext))}
                <!-- svelte-ignore a11y_media_has_caption -->
                <video
                    class="max-h-full max-w-full py-auto object-contain"
                    controls
                    autoplay
                >
                    <source src={image.url} type="video/mp4" />
                    {image.text}
                </video>
            {:else}
                <img
                    src={image.url}
                    alt={image.text}
                    class="max-h-full max-w-full py-auto object-contain"
                />
            {/if}
            <!-- </div> -->
        </div>
        <div
            class="h-10 flex text-center font-bold text-xl items-center justify-around w-full text-background"
        >
            <button class="cursor-pointer group" onclick={previous}>
                <div class="group-hover:scale-105 transition">
                    {"<"}
                </div>
            </button>
            <p>
                {image.text}
            </p>
            <button class="cursor-pointer group" onclick={next}>
                <div class="group-hover:scale-105 transition">
                    {">"}
                </div>
            </button>
            <button
                class="fixed top-5 text-2xl right-7 cursor-pointer group"
                onclick={close}
            >
                <div class="group-hover:scale-105 transition">
                    {"x"}
                </div>
            </button>
        </div>
    </dialog>
{/if}
