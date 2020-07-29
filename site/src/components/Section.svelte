<style>
    section {
        padding-top: var(--site-header-height);
        min-height: 100vh;
        box-sizing: border-box;
        background-color: var(--highlight-yellow);
    }

    section:nth-child(2n+1) {
        background-color: var(--highlight-blue);
    }

    section:last-of-type {
        min-height: calc(100vh - var(--site-footer-height));
    }
</style>

<section>
    <slot></slot>
</section>