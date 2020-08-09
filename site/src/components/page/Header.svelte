<script>
    import Nav from './Nav.svelte';
    import LockIn from '../../../static/LockIn.svg';

    export let active;
</script>

<style>
    .lockin {
        margin-left: var(--site-horizontal-margin);
        max-width: var(--max-main-content-width);
        width: var(--main-content-width);
    }

    .lockin > :global(svg) {
        display: block; /* Removes white space artifacts during layout */
        opacity: 0.7;
    }

    header > :global(*) {
        position: fixed;
        top: 3.5rem;
    }

    header :global(nav) {
        z-index: 10;
        left: calc(var(--main-content-width) + var(--site-horizontal-margin));
    }
</style>

<!-- Represents the site header -->
<header>
    <div class="lockin">
        {@html LockIn}
    </div>
    <Nav {active}/>
</header>