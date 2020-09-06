<script>
    export let inset = "0rem";
    export let scrollOffset = "0rem";
</script>

<style>
    .carousel {
        height: 40vw;
        margin-left: calc((var(--content-left-margin) - var(--inset)) * -1);
        margin-top: calc(var(--scroll-offset) * -1);
        max-height: 65vh;
        overflow: auto;
        padding-top: var(--scroll-offset);
        scrollbar-color: transparent transparent;
        scrollbar-width: thin;
        white-space: nowrap;
        width: calc(100vw - (var(--inset) * 2) - var(--scrollbar-mask-width));
        clip-path: inset(var(--scroll-offset) 0 0 0);
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
        display: inline-block;
        width: auto;
        height: 100%;
        vertical-align: top;
    }

    .carousel :global(img + img) {
        margin-left: 1rem;
    }

    .carousel :global(:first-child) {
        margin-left: calc(var(--content-left-margin) - var(--inset));
    }

    .carousel :global(:last-child) {
        margin-right: calc(100vw - var(--main-content-width) - var(--inset));
    }
</style>

<div {...$$restProps} class="carousel" style="--inset: {inset}; --scroll-offset: {scrollOffset}">
    <slot />
</div>