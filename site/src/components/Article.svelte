<script>
    import { onMount } from "svelte";

    let article;

    onMount(() => {
        // TODO: Probably a more idiomatically Svelte way to do this!
        document && document.querySelector("body > .page").scrollTo(0, 0);
    });

    export let fontweight = "unset";
</script>

<style>
    article {
        font-weight: var(--font-weight);
        max-width: var(--max-main-content-width);
    }

    article :global(.logo) {
        --mask-size: contain;
        --mask-repeat: no-repeat;
        --mask-position: 0 65%;
        background-color: var(--default-copy-color);
        -webkit-mask-image: var(--mask-image);
        -webkit-mask-size: var(--mask-size);
        -webkit-mask-repeat: var(--mask-repeat);
        -webkit-mask-position: var(--mask-position);
        mask-image: var(--mask-image);
        mask-size: var(--mask-size);
        mask-repeat: var(--mask-repeat);
        mask-position: var(--mask-position);
        height: 72px;
        width: 30rem;           /* TODO: Either introduce media query at smaller screen widths
                                   or calc() a smarter width value */
        text-indent: -1000px;   /* TODO: Do more to visually hide text */
        display: block;
        margin-top: 1rem;
        max-width: 80vw;
    }

    article :global(.lede) {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.5;
        opacity: 0.7;
    }

    article :global(h1) {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 1px;
        margin-top: 5rem;
        font-family: 'Montserrat', 'Inter V', sans-serif;
    }

    article :global(h1, h2) {
        color: var(--primary-accent-color);
        clear: both;
    }

    article > :global(p:last-child),
    article > :global(section:last-child > p:last-child) {
        margin-bottom: 10rem;
    }

    article :global(ul) {
        padding-left: 0;
        list-style: none;
        transition: padding 300ms;
    }

    article :global(li) {
        position: relative;
    }

    /* Not using `::marker` as it's not fully supported yet, and does not provide the
       flexibility we need. */
    article :global(ul li:before) {
        --dimension: 0.5rem;
        content: "";
        width: var(--dimension);
        height: var(--dimension);
        background-color: var(--primary-accent-color);
        position: absolute;
        top: calc(50% - (var(--dimension) / 2));
        left: -1rem;
    }

    @media (max-width: 50rem) {
        article :global(p) {
            -webkit-hyphens: auto;
            -moz-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
        }

        article :global(ul) {
            padding-left: 1rem;
        }

        article :global(ol) {
            list-style-position: inside;
        }
    }
</style>

<article bind:this={article} style="--font-weight: {fontweight}">
    <slot />
</article>