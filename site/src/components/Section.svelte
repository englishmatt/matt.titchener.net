<script>
    let _class = null;

    export let id = null;
    export let minHeight = "calc(100vh - 7rem)";
    export { _class as class };
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        min-height: var(--min-height);
        box-sizing: border-box;
    }

    section:first-of-type,
    section + section {
        padding-top: calc(var(--site-header-height) + var(--section-padding-top));
    }

    section:last-of-type {
        min-height: 100vh;
    }
</style>

<!-- Represents a collection of elements of type {Entry} -->
<section {id} class={_class} style="--min-height: {minHeight}">
    <slot></slot>
</section>