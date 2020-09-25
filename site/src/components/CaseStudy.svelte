<script>
    import { onMount } from "svelte";

    let article;

    onMount(() => {
        // TODO: Probably a more idiomatically Svelte way to do this!
        article.parentElement.scrollTo(0, 0);
    });
</script>

<article bind:this={article}>
    <slot />
</article>