<script>
    import Header from '../components/page/Header.svelte';
    import SkipToContent from '../components/page/SkipToContent.svelte';
    import Page from '../components/page/Page.svelte';

    const contentId = 'content';

    // TODO: Ensure 'work' item is _not_ selected when loading the front page; ensure 'work' becomes
    // selected when the user scrolls down to the portfolio.
    export let segment;
</script>

<style>
    main {
        box-sizing: border-box;
        padding-left: var(--content-left-margin);
        padding-top: var(--site-header-height);
        width: 100%;
    }
</style>

<Page>
    <SkipToContent {contentId} />
    <Header active={segment} />

    <main id="{contentId}">
        <slot></slot>
    </main>
</Page>
