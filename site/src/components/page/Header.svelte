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
        color: var(--primary-accent-color);
        text-decoration: none;
        font-size: 2.42rem;
        position: sticky;
        top: var(--header-top-padding);
        display: block;
    }

    .logo a:focus {
        outline: none;
    }

    /* .logo a:focus:not(:hover) {
        color: var(--primary-accent-color);
    }

    .logo a:focus:not(:hover) :global(svg) {
        fill: var(--primary-accent-color);
    } */

    .logo :global(svg) {
        fill: var(--primary-accent-color);
        display: inline-block; /* Removes white space artifacts during layout */
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

    /* TODO: These global styles are hacky. */
    :global(.page.work .logo .name) {
        position: sticky;
    }

    :global(.no-js .page .logo a:link),
    :global(.no-js .page .logo a:visited),
    :global(.no-js .page .logo a:active),
    :global(.no-js .page .logo a:hover),
    :global(.page.introduction .logo a:link),
    :global(.page.introduction .logo a:visited),
    :global(.page.introduction .logo a:active),
    :global(.page.introduction .logo a:hover),
    :global(.page.about .logo a:link),
    :global(.page.about .logo a:visited),
    :global(.page.about .logo a:active),
    :global(.page.about .logo a:hover) {
        color: var(--default-copy-color);
    }

    :global(.no-js .page .logo svg),
    :global(.page.introduction .logo svg),
    :global(.page.about .logo svg) {
        fill: var(--default-copy-color);
    }
</style>

<!-- Represents the site header -->
<header>
    <div class="logo">
        <a href="#introduction">{@html lettermark} <span class="name" class:secondary={!hasFixedName}>Ma<span class="ligature">tt</span> Titchener</span></a>
    </div>
    <Nav {active}/>
</header>