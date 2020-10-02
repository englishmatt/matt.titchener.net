<style>
    figure {
        margin: 0;
        overflow: auto;
    }

    figure > :global(*) {
        margin-right: var(--caption-gutter);
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