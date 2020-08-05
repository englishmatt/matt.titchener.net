<style>
    p {
        box-sizing: border-box;
        height: 0;
        margin: 0;
        position: sticky;
        top: calc(var(--entry-offset) + var(--site-header-height) + var(--section-padding-top));
    }

    .lede {
        font-size: 2rem;
        font-weight: 600;
        line-height: var(--line-height);
        max-width: calc(var(--max-main-content-width) - var(--content-left-margin));
    }

    @media(min-width: 1600px) {
        .lede {
            font-size: 2rem;
        }
    }
</style>

<p class="lede"><slot></slot></p>