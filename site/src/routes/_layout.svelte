<script>
    import Header from '../components/page/Header.svelte';
    import Footer from '../components/page/Footer.svelte';
    import SkipToContent from '../components/page/SkipToContent.svelte';
    import Page from '../components/page/Page.svelte';
    import { onMount } from 'svelte';

    export let segment = 'portfolio';

    const contentId = 'content';
</script>

<style>
    main {
        box-sizing: border-box;
        padding-left: calc(var(--site-horizontal-margin) + var(--content-left-margin));
        padding-right: calc(var(--site-horizontal-margin) + 3rem);
    }
</style>

<svelte:head>
    <title>{segment} &#183; Matt Titchener</title>
</svelte:head>

<Page>
    <SkipToContent {contentId} />
    <Header active={segment} />

    <main id="{contentId}">
        <slot></slot>
    </main>
</Page>
