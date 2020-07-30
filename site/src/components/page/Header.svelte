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
        max-width: var(--max-primary-content-width);
        width: var(--primary-content-width);
    }

    header > div > :global(*) {
        display: block; /* Removes white space artifacts during layout */
    }
</style>

<header>
    <SkipToContent {contentId} />
    <div>
        {@html LockIn}
    </div>
    <Nav {active}/>
</header>