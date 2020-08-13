<style>
    p {
        box-sizing: border-box;
        height: 0;
        margin: 0;
        position: sticky;
        top: calc(var(--entry-offset) + var(--site-header-height) + var(--section-padding-top));
        max-width: 88rem;
    }

    .lede {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: var(--line-height);
    }
</style>

<p class="lede"><slot></slot></p>