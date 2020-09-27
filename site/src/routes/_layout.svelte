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
        --mask-image: linear-gradient(transparent 8rem, black 12rem), linear-gradient(black, black);
        --mask-repeat: no-repeat, no-repeat;
        --mask-size: calc(100vw - var(--scrollbar-mask-width)) 100%, var(--scrollbar-mask-width) 100%;
        --mask-position: 0 0, 100% 10px;
        box-sizing: border-box;
        height: 100vh;
        -webkit-mask-image: var(--mask-image);
        -webkit-mask-repeat: var(--mask-repeat);
        -webkit-mask-size: var(--mask-size);
        -webkit-mask-position: var(--mask-position);
        mask-image: var(--mask-image);
        mask-repeat: var(--mask-repeat);
        mask-size: var(--mask-size);
        mask-position: var(--mask-position);
        overflow: auto;
        padding-left: var(--content-left-margin);
        padding-right: var(--content-left-margin);
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
