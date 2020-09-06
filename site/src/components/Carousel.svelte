<script>
    export let inset = "0rem";
</script>

<style>
    .carousel {
        width: calc(100vw - var(--scrollbar-mask-width));
        margin-left: calc((var(--content-left-margin) - var(--inset)) * -1);
        box-sizing: border-box;
        overflow: auto;
        white-space: nowrap;
        height: 60vw;
        max-height: calc((500 / 1000) * var(--main-content-width));
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
    }

    .carousel::-webkit-scrollbar-track {
        background: transparent;
    }

    .carousel::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    .carousel:hover::-webkit-scrollbar-track {
        background: var(--scrollbar-background-color);
    }

    .carousel:hover::-webkit-scrollbar-thumb {
        background: var(--default-copy-color);
    }

    .carousel:hover {
        scrollbar-color: var(--default-copy-color) var(--scrollbar-background-color);
    }

    .carousel :global(img) {
        transform: translateX(calc(var(--content-left-margin) - var(--inset)));
        display: inline-block;
        width: auto;
        height: 100%;
        vertical-align: top;
    }

    .carousel :global(img + img) {
        margin-left: 1rem;
    }

    .carousel :global(:last-child) {
        margin-right: calc(100vw - var(--main-content-width));
    }
</style>

<div class="carousel" style="--inset: {inset}">
    <slot />
</div>