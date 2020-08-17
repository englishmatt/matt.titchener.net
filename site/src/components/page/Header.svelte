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
    }

    .lockin {
        margin-left: var(--site-horizontal-margin);
        max-width: var(--max-main-content-width);
        width: var(--main-content-width);
    }

    .lockin :global(svg) {
        display: block; /* Removes white space artifacts during layout */
        opacity: 0.7;
    }

    header :global(nav) {
        left: calc(var(--main-content-width) + var(--site-horizontal-margin));
    }
</style>

<!-- Represents the site header -->
<header>
    <div class="lockin">
        <a href="#introduction">{@html LockIn}</a>
    </div>
    <Nav {active}/>
</header>