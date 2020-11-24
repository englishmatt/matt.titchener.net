<script>
    export let inset = "0rem";
    export let scrollOffset = "0rem";
    export let height = "40vw";
    export let captionHeight = "0rem";
</script>

<style>
    .carousel {
        display: flex;
        height: calc(var(--height) + var(--caption-height));
        margin-left: calc((var(--content-left-margin) - var(--inset)) * -1);
        margin-top: calc(var(--scroll-offset) * -1);
        margin-bottom: 2rem;
        max-height: 65vh;
        overflow-x: scroll;
        overflow-y: hidden;
        padding-top: var(--scroll-offset);
        padding-bottom: 2px;
        scrollbar-color: transparent transparent;
        scrollbar-width: thin;
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

    .carousel > :global(div) {
        display: flex;
        flex-direction: column;
    }

    .carousel :global(img) {
        max-width: unset;
    }

    .carousel > :global(div > img) {
        flex: 1;
        object-fit: cover;
        object-position: top left;
    }

    .carousel > :global(*) {
        overflow: initial;
        flex: 0 0 auto;
        width: auto;
        height: calc(100% - var(--caption-height));
        margin-bottom: var(--caption-height);
    }

    .carousel > :global(* + *) {
        margin-left: 1rem;
    }

    .carousel > :global(div > img + img) {
        margin-top: 1rem;
    }

    .carousel > :global(:first-child) {
        margin-left: calc(var(--content-left-margin) - var(--inset));
    }

    .carousel > :global(:last-child) {
        margin-right: calc(var(--content-left-margin) - var(--inset));
    }

    .carousel :global(figure) {
        margin-top: 0;
        height: 100%;
        margin-bottom: 0;
        width: min-content;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .carousel :global(figure img) {
        margin: 0;
        width: auto;
        height: calc(100% - var(--caption-height));
        overflow: unset;
    }

    .carousel :global(figcaption) {
        height: var(--caption-height);
        padding-top: 0.5rem;
        font-size: 0.9rem;
    }

    .carousel :global(figcaption p) {
        margin: 0;
    }
</style>

<div {...$$restProps} class="carousel" style="--inset: {inset}; --scroll-offset: {scrollOffset}; --height: {height}; --caption-height: {captionHeight}">
    <slot />
</div>