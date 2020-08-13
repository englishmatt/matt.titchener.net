<script>
    import { onMount } from "svelte";

    export let borderRadius = "0";
    export let backgroundColor = "transparent";

    let loading = true;

    function handleImageLoad() {
        loading = false;
    }
</script>

<style>
    div {
        background-color: var(--background-color);
        border-radius: var(--border-radius);
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
        display: block;
        overflow: hidden;
        transition: box-shadow var(--background-transition-duration);
    }

    img {
        display: block;
        transition: opacity 300ms;
    }

    .loading {
        box-shadow: none;
    }

    .loading img {
        opacity: 0;
    }
</style>

<div class:loading={loading} style="--border-radius: {borderRadius}; --background-color: {backgroundColor}">
    <img alt="" {...$$restProps} on:load={handleImageLoad} on:load />
</div>