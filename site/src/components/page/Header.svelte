<script>
    import Nav from './Nav.svelte';
    import lettermark from '../../../static/lettermark.svg';

    export let active;
    export let hasFixedName = true;
</script>

<style>
    header {
        --sizing-70-40: calc((100vw - 40rem) / 30);
        --lettermark-offset: calc(6.3em / 2.42);    /* 6.3 / logo.font-size (fixed at page load time); we can't use a CSS variable here. */
        --header-top-padding: 3.5rem;
        box-sizing: border-box;
        display: flex;
        height: 0;
        padding: 0 var(--content-right-margin) 0 var(--content-left-margin);
        position: relative;
        user-select: none;
        width: calc(100vw - var(--scrollbar-mask-width));   /* Prevents navigation shifting horizontally
                                                               when navigating between a page with and without
                                                               a vertical scrollbar */
        z-index: 10;
    }

    .logo {
        --unitless-max-font-size: 2.42;
        --unitless-min-font-size: 2;
        --font-size-delta: calc(var(--unitless-max-font-size) - var(--unitless-min-font-size));
        flex: 1 0;
        font-family: 'Montserrat', sans-serif;
        font-size: calc(var(--unitless-min-font-size) * 1rem);
        font-weight: 700;
        left: calc(var(--lettermark-offset) * -1);
        max-width: var(--max-main-content-width);
        padding-top: var(--header-top-padding);
        position: relative;
        text-transform: uppercase;
    }

    .logo a {
        font-size: 1em; /* Intentionally using 'em's here for easy logo scaling. */
        white-space: nowrap;
    }

    .logo a:link,
    .logo a:visited,
    .logo a:active,
    .logo a:hover {
        color: var(--primary-accent-color);
    }

    .logo a:focus {
        outline: none;
    }

    .logo :global(svg) {
        fill: var(--primary-accent-color);
        display: inline-block; /* Removes white space artifacts during layout */
        line-height: 0;
        position: fixed;
        top: var(--header-top-padding);
        width: calc(4.0625em / 2.42);  /* (65px / 16) / --unitless-font-size (fixed at page load time); we can't use a CSS variable here. */
        height: calc(4.0625em / 2.42);
    }

    .name {
        display: inline-block;
        padding-top: 0.4rem;
        margin-left: var(--lettermark-offset);
        position: fixed;
        width: 0;
    }

    .name.secondary {
        position: sticky;
    }

    .name .ligature {
        letter-spacing: -0.07rem;
    }

    /* TODO: These global styles are hacky. */
    :global(.page.work .logo .name),
    :global(.page.about .logo .name) {
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

    @media (max-width: 70rem) {
        .logo {
            left: 0;
        }

        :global(.page.work .logo svg),
        :global(.page.about .logo svg) {
            position: absolute;
        }
    }

    /* TODO: Convert to min(max()) when more support is available */
    @media (min-width: 40rem)  {
        .logo {
            font-size: calc((var(--unitless-min-font-size) * 1rem) +
                (var(--font-size-delta) * var(--sizing-70-40)));
        }
    }

    @media (min-width: 70rem) {
        .logo {
            font-size: calc(var(--unitless-max-font-size) * 1rem);
        }
    }
</style>

<!-- Represents the site header -->
<header>
    <div class="logo">
        <a href="#introduction">{@html lettermark} <span class="name" class:secondary={!hasFixedName}>Ma<span class="ligature">tt</span> Titchener</span></a>
    </div>
    <Nav {active}/>
</header>