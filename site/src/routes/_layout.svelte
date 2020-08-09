<script>
    import Header from '../components/page/Header.svelte';
    import Footer from '../components/page/Footer.svelte';
    import SkipToContent from '../components/page/SkipToContent.svelte';
    import Page from '../components/page/Page.svelte';
    import { onMount } from 'svelte';

    let sectionName = null;
    let main;
    const contentId = 'content';

    function handleScroll() {

        // TODO: Switch to Intersection Observer API
        switch (true) {
            case (main.scrollTop > 400):
                sectionName = "transformed";
                break;
            default:
                sectionName = "";
        }
    }

    export let segment = 'portfolio';
</script>

<style>
    main {
        --scrollbar-background-color: transparent;
        box-sizing: border-box;
        height: 100vh;
        --mask-image:  linear-gradient(black, black), linear-gradient(transparent 8rem, black 12rem), linear-gradient(black, black);
        --mask-repeat: no-repeat;
        --mask-size: calc(var(--main-content-width) + var(--site-horizontal-margin)) 100%, 100% 100%, 5vw 100%;
        --mask-position: 0 0, 0 0, top right;
        -webkit-mask-image: var(--mask-image);
        -webkit-mask-repeat: var(--mask-repeat);
        -webkit-mask-size: var(--mask-size);
        -webkit-mask-position: var(--mask-position);
        mask-image: var(--mask-image);
        mask-repeat: var(--mask-repeat);
        mask-size: var(--mask-size);
        mask-position: var(--mask-position);
        overflow: auto;
        padding-left: calc(var(--site-horizontal-margin) + var(--content-left-margin));
        padding-right: calc(var(--site-horizontal-margin) + 3rem);
        scrollbar-width: thin;
        scrollbar-color: var(--default-copy-color) var(--scrollbar-background-color);
        width: calc(100vw - 2px);
        margin-right: 2px;
    }

    main::-webkit-scrollbar {
        width: 7px;
    }

    main::-webkit-scrollbar-track {
        background: var(--scrollbar-background-color);
    }
    main::-webkit-scrollbar-thumb {
        background-color: var(--default-copy-color);
    }
</style>

<svelte:head>
    <title>{segment} &#183; Matt Titchener</title>
</svelte:head>

<Page {sectionName}>
    <SkipToContent {contentId} />
    <Header active={segment} />

    <main id="{contentId}" bind:this={main} on:scroll={handleScroll}>
        <slot></slot>
    </main>
</Page>
