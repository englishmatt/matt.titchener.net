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

    figure > :global(:first-of-type) {
        margin-top: 0
    }

    figure + figure {
        margin-top: 1.5rem;
    }

    figcaption {
        overflow: auto;
    }

    figcaption :global(p) {
        font-size: 1rem;
    }
</style>

<figure>
    <slot></slot>
    <figcaption>
        <slot name="caption"></slot>
    </figcaption>
</figure>