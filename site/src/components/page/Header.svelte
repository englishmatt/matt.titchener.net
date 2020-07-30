<script>
    import Nav from './Nav.svelte';
    import SkipToContent from './SkipToContent.svelte';
    import LockIn from '../../../static/LockIn.svg';

    export let active;
    export let contentId;
</script>

<style>
    header {
        box-sizing: border-box;
        align-items: flex-end;
        display: flex;
        padding: 2rem 0;
        position: fixed;
        top: 0;
        width: 100%;
        height: var(--site-header-height);
        z-index: 1;
    }

    header > div {
        margin-left: var(--site-horizontal-margin);
        max-width: var(--max-main-content-width);
        width: var(--main-content-width);
    }

    header > div > :global(svg) {
        display: block; /* Removes white space artifacts during layout */
        opacity: 0.8;
    }
</style>

<!-- Represents the site header -->
<header>
    <SkipToContent {contentId} />
    <div>
        {@html LockIn}
    </div>
    <Nav {active}/>
</header>