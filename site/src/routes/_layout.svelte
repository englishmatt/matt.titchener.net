<script>
    import Header from '../components/page/Header.svelte';
    import Footer from '../components/page/Footer.svelte';
    import SkipToContent from '../components/page/SkipToContent.svelte';
    import { onMount } from 'svelte';

    export let segment = 'portfolio';

    const contentId = 'content';

    function handleWindowScroll(event) {
        // TODO: Use Intersection Observer API. See for more info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        let page = document.querySelector("body > .page");

        if (window.pageYOffset < (window.innerHeight / 4)) {
            page.classList.remove('transformed');
        } else {
            page.classList.add('transformed');
        }
    }

    onMount(() => {
        // Ensure the background is set correctly when the page loads in to a scrolled position.
        handleWindowScroll();
    });
</script>

<style>
    main {
        box-sizing: border-box;
        padding-left: calc(var(--site-horizontal-margin) + var(--content-left-margin));
    }
</style>

<SkipToContent {contentId} />
<Header active={segment} />

<svelte:window on:scroll={handleWindowScroll} />

<svelte:head>
    <title>{segment} &#183; Matt Titchener</title>
</svelte:head>

<main id="{contentId}">
    <slot></slot>
</main>
