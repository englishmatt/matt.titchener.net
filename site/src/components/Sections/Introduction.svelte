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
        font-weight: 400;
        line-height: var(--line-height);
    }

    .lede .headline {
        font-size: 3rem;
        font-weight: 700;
    }
</style>

<p class="lede">
    <span class="headline"><slot name="headline"></slot></span>
    <span><slot></slot></span>
</p>