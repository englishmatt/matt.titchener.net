<script>
    export let id = null;
</script>

<style>
    section {
        --section-padding-top: 4rem;
        display: flex;
        flex-direction: column;
        padding-top: calc(var(--site-header-height) + var(--section-padding-top));
        min-height: 100vh;
        box-sizing: border-box;
    }

    section:last-of-type {
        min-height: calc(100vh - var(--site-footer-height));
    }
</style>

<!-- Represents a collection of elements of type {Entry} -->
<section {id}>
    <slot></slot>
</section>