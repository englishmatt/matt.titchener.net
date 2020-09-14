<script>
    import Nav from './Nav.svelte';
    import LockIn from '../../../static/LockIn.svg';

    export let active;
</script>

<style>
    header {
        display: flex;
        z-index: 10;
        position: fixed;
        align-items: flex-start;
        top: 3.5rem;
        width: 100%;
        padding-left: var(--content-left-margin);
        padding-right: var(--content-left-margin);
        box-sizing: border-box;
    }

    .lockin {
        left: calc(var(--lockin-offset) * -1);
        max-width: var(--max-main-content-width);
        position: relative;
        flex: 0 0 var(--main-content-width);
    }

    .lockin :global(svg) {
        fill: var(--default-copy-color);
        display: block; /* Removes white space artifacts during layout */
        transition: fill var(--background-transition-duration);
    }
</style>

<!-- Represents the site header -->
<header>
    <div class="lockin">
        <a href="#introduction">{@html LockIn}</a>
    </div>
    <Nav {active}/>
</header>