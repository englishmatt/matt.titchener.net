<script>
    import Nav from './Nav.svelte';
	import SkipToContent from './SkipToContent.svelte';

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
    }

    header > div {
        margin-left: var(--site-horizontal-margin);
        max-width: var(--max-primary-content-width);
        width: var(--primary-content-width);
    }
</style>

<header>
    <SkipToContent {contentId} />
    <div><img src="lock-in.svg" alt="Matt Titchener"/></div>
    <Nav {active}/>
</header>