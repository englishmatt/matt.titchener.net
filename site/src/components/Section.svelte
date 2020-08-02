<script>
    export let id = null;
    export let backgroundColor = "transparent";
</script>

<style>
    section {
        --section-padding-top: 4rem;
        background-color: var(--background-color);
        display: flex;
        flex-direction: column;
        padding-top: calc(var(--site-header-height) + var(--section-padding-top));
        min-height: 100vh;
        box-sizing: border-box;
        padding-left: calc(var(--site-horizontal-margin) + var(--content-left-margin));
        margin-left: calc((var(--site-horizontal-margin) + var(--content-left-margin)) * -1);
    }

    section:last-of-type {
        min-height: calc(100vh - var(--site-footer-height));
    }
</style>

<!-- Represents a collection of elements of type {Entry} -->
<section {id} style="--background-color: {backgroundColor}">
    <slot></slot>
</section>