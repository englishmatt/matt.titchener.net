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
        background-color: var(--highlight-red);
    }

    header > div {
        margin-left: var(--site-horizontal-margin);
        width: var(--primary-content-width);
    }
</style>

<header>
    <SkipToContent {contentId} />
    <div>
        <img src="lock-in.svg" alt="Matt Titchener"/>
    </div>
    <Nav {active}/>
</header>