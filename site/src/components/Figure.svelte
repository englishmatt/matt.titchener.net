<style>
    figure {
        --caption-gutter: 2.2rem;
        margin: 0;
        overflow: auto;
        position: relative;
        margin: 0;
        padding: 0;
        margin-top: 2rem;
    }

    figure > :global(*) {
        margin-right: var(--caption-gutter);
    }

    figure :global(img) {
        width: calc(55% - (var(--caption-gutter) / 2));
        margin-bottom: 1rem;
        margin-top: 0.3rem;
    }

    figure > :global(:last-child) {
        margin-right: 0;
    }

    figure + :global(figure) {
        margin-top: 1.5rem;
    }

    figcaption {
        overflow: auto;
    }

    figcaption :global(p) {
        font-size: 1rem;
    }

    figcaption :global(:first-child) {
        margin-top: 0;
    }

    @media (max-width: 70rem) {
        figure {
            display: flex;
            flex-direction: column;
            margin-top: 0;
        }

        figure :global(img) {
            float: none;
            width: 100%;
            order: 2;
        }

        figure :global(figcaption) {
            order: 1;
        }

        figure :global(p) {
            font-size: inherit;
        }
    }
</style>

<figure>
    <slot></slot>

    {#if $$slots.caption}
        <figcaption>
            <slot name="caption"></slot>
        </figcaption>
    {/if}
</figure>