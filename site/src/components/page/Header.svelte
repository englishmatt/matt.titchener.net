<script>
    import Nav from './Nav.svelte';
    import lettermark from '../../../static/lettermark.svg';

    export let active;
    export let hasFixedName = true;
</script>

<style>
    header {
        --header-top-padding: 3.5rem;
        box-sizing: border-box;
        height: 0;
        padding-left: var(--content-left-margin);
        padding-right: var(--content-left-margin);
        position: relative;
        user-select: none;
        width: 100%;
        z-index: 10;
        display: flex;
    }

    .logo {
        left: calc(var(--lettermark-offset) * -1);
        max-width: var(--max-main-content-width);
        position: relative;
        flex: 0 0 var(--main-content-width);
        font-family: 'Montserrat';
        text-transform: uppercase;
        font-weight: 700;
        padding-top: var(--header-top-padding);
        height: 5 0vh;
    }

    .logo a:link,
    .logo a:visited,
    .logo a:active,
    .logo a:hover {
        color: var(--default-copy-color);
        text-decoration: none;
        font-size: 2.42rem;
        position: sticky;
        top: var(--header-top-padding);
        display: block;
    }

    .logo :global(svg) {
        fill: var(--default-copy-color);
        display: inline-block; /* Removes white space artifacts during layout */
        transition: fill var(--background-transition-duration);
        line-height: 0;
        position: fixed;
        top: var(--header-top-padding);
    }

    .name {
        display: inline-block;
        padding-top: 0.4rem;
        margin-left: var(--lettermark-offset);
        position: fixed;
    }

    .name.secondary {
        position: sticky;
    }

    .name .ligature {
        letter-spacing: -0.07rem;
    }
</style>

<!-- Represents the site header -->
<header>
    <div class="logo">
        <a href="#introduction">{@html lettermark} <span class="name" class:secondary={!hasFixedName}>Ma<span class="ligature">tt</span> Titchener</span></a>
    </div>
    <Nav {active}/>
</header>