<script>
    let _class;

    export let id = null;
    export let minHeight = "0";
    export { _class as class };
</script>

<style>
    section {
        --section-padding-top: 4rem;
        display: flex;
        flex-direction: column;
        min-height: var(--min-height);
        padding-top: calc(var(--site-header-height) + var(--section-padding-top));
        box-sizing: border-box;
        padding-left: calc(var(--site-horizontal-margin) + var(--content-left-margin));
        margin-left: calc((var(--site-horizontal-margin) + var(--content-left-margin)) * -1);
    }

    section:last-of-type {
        min-height: calc(100vh - var(--site-footer-height));
    }
</style>

<!-- Represents a collection of elements of type {Entry} -->
<section {id} class={_class} style="--min-height: {minHeight}">
    <slot></slot>
</section>