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

        const defaultSectionName = "introduction";

        // TODO: Switch to Intersection Observer API
        switch (true) {
            case (main.scrollTop < 400):
                sectionName = defaultSectionName;
                break;
            case (main.scrollTop < 1200):
                sectionName = "boxes-and-arrows";
                break
            case (main.scrollTop < 2400):
                sectionName = "foobar";
                break;
            case (main.scrollTop < 3600):
                sectionName = "quzbaz";
                break;
            default:
                sectionName = defaultSectionName;
        }
    }

    // TODO: Ensure 'work' item is _not_ selected when loading the front page; ensure 'work' becomes
    // selected when the user scrolls down to the portfolio.
    export let segment = 'work';
</script>

<style>
    main {
        --scrollbar-background-color: transparent;
        box-sizing: border-box;
        height: 100vh;
        --mask-image: linear-gradient(transparent 8rem, black 12rem);
        --mask-repeat: no-repeat;
        --mask-size: 100% 100%;
        --mask-position: 0 0;
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
        width: calc(100% - 2px);
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
