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
        display: inline-block;
        overflow: hidden;
    }

    img {
        display: block;
        object-fit: cover;
        transition: opacity 300ms;
    }

    .loading img {
        opacity: 0;
    }
</style>

<div class:loading={loading} style="--border-radius: {borderRadius}; --background-color: {backgroundColor}">
    <img alt="" {...$$restProps} on:load={handleImageLoad} on:load />
</div>