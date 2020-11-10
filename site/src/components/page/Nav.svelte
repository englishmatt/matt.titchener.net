<script>
    import hamburgerIcon from '../../../static/hamburger-menu.svg';
    import closeIcon from '../../../static/close-menu.svg';

    let encodedHamburgerIcon = `url("data:image/svg+xml,${encodeURIComponent(hamburgerIcon)}")`;
    let encodedCloseIcon = `url("data:image/svg+xml,${encodeURIComponent(closeIcon)}")`;

    export let active;
</script>

<style>
    nav {
        padding-top: calc(10.2% - 1.8rem); /* Implicit dependency on var(--header-top-padding); if this CSS variable
                                            changes this padding-top calculation must also be adjusted. */
        flex: 0 0 var(--aux-content-width);
        margin-right: -1rem;
        position: relative;
    }

    nav:focus {
        outline: none;
    }

    ul {
        position: fixed;
        display: inline-flex;
        list-style: none;
        /* TODO: Introduce similar character width fallback typeface */
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin-top: 0.6rem;
        transition: margin var(--background-transition-duration);
    }

    a {
        display: block;
        padding: 0 var(--navigation-horizontal-padding);
        box-sizing: border-box;
        transition: font-size var(--background-transition-duration);
    }

    a:link,
    a:visited,
    a:hover {
        text-decoration: none;
        color: var(--default-copy-color);
    }

    a:link,
    a:visited {
        text-transform: uppercase;
    }

    a span {
        display: block;
        padding: 1.2rem 0 0.8rem;
        box-sizing: border-box;
        white-space: nowrap;
        text-align: center;
        transition: border-color var(--navigation-transition-duration);
    }

    a span,
    :global(.page:not(.introduction) ul:hover) li[aria-current="page"] span {
        border-bottom: 4px solid transparent;
        font-weight: 600;
    }

    ul:hover li a:hover span,
    :global(.page:not(.introduction)) li[aria-current="page"] span,
    :global(.page:not(.introduction) ul:hover) li[aria-current="page"]:hover span {
        border-bottom: 4px solid var(--primary-accent-color);
        font-weight: 700;
    }

    a::before {
        /* TODO: Test this technique in modern screenreaders to ensure the content is not read twice. */
        content: attr(data-content);
        display: block;
        font-weight: 700;
        height: 0;
        visibility: hidden;
    }

    @media (max-width: 60rem) {
        ul {
            margin-top: 0.84rem;
        }

        a {
            font-size: 1rem;
        }
    }

    @media (max-width: 55rem) {
        a {
            transition: none;
        }
    }

    @media (max-width: 50rem) {
        nav {
            flex: none;
            margin: 0;
            transition: background-color 200ms;
        }

        nav ul {
            display: none;
        }

        nav:focus-within {
            --margin-offset: calc(var(--skip-to-content-height) * 2);
            position: fixed;
            left: 0;
            width: 100vw;
            height: 100vh;
            top: 0;
            background-color: var(--primary-background-color);
            pointer-events: none;
            z-index: -1;
        }

        nav:focus-within ul {
            display: block;
            flex-direction: column;
            box-sizing: border-box;
            left: 0;
            margin-top: calc(10% + 1.7rem);
            position: fixed;
            width: 100vw;
            height: 100vh;
            opacity: 1;
            pointer-events: all;
        }

        nav::after,
        nav::before {
            --mask-position: center center;
            --mask-repeat: no-repeat;
            --mask-size: auto 20%;
            --half-rotation-duration: 180ms;
            --horizontal-padding: 1rem;
            -webkit-mask-repeat: var(--mask-repeat);
            -webkit-mask-position: var(--mask-position);
            -webkit-mask-size: var(--mask-size);
            mask-repeat: var(--mask-repeat);
            mask-position: var(--mask-position);
            mask-size: var(--mask-size);
            content: "";
            position: fixed;
            right: calc(var(--content-right-margin) - var(--horizontal-padding));
            top: calc(6vw - 1.2rem);     /* Implicit dependency on var(--header-top-padding); if this CSS variable
                                            changes this padding-top calculation must also be adjusted. */
            width: 2rem;
            height: 2rem;
            padding: 1.8rem var(--horizontal-padding);
            pointer-events: all;
            cursor: pointer;
            transition: transform var(--half-rotation-duration);
            background-color: var(--primary-accent-color);
        }

        nav::after {
            -webkit-mask-image: var(--close-icon);
            mask-image: var(--close-icon);
        }

        nav::before {
            -webkit-mask-image: var(--hamburger-icon);
            mask-image: var(--hamburger-icon);
        }

        nav::after,
        nav:focus-within::before {
            transform: rotateY(90deg);
            transition-delay: 0ms;
        }

        nav::before,
        nav:focus-within::after {
            transform: rotateY(0deg);
            transition-delay: var(--half-rotation-duration);
        }

        nav:focus-within::after {
            pointer-events: none;
        }

        nav a {
            position: relative;
            transition: none;
        }

        ul li a:after,
        :global(.page:not(.introduction)) ul:hover li a::after {
            --dimension: 0;
        }

        ul li a::after {
            content: "";
            width: var(--dimension);
            height: var(--dimension);
            background-color: var(--primary-accent-color);
            position: absolute;
            top: calc(50% - (var(--dimension) / 2));
            left: calc(var(--content-left-margin) + var(--lettermark-offset) - 2rem);
        }

        /* Not using `::marker` as it's not fully supported yet, and does not provide the flexibility we need. */
        ul:hover li:hover a::after,
        :global(.page:not(.introduction)) ul:hover li:hover a::after,
        :global(.page:not(.introduction)) [aria-current='page'] a::after {
            --dimension: 0.5rem;
        }

        :global(.page:not(.introduction)) [aria-current='page'] {
            background-color: var(--secondary-background-color);
        }

        nav span {
            text-align: left;
            transition: border-width 0ms, border-color 0ms;
        }

        nav a {
            padding-left: calc(var(--content-left-margin) + var(--lettermark-offset));
            font-size: calc((var(--unitless-min-font-size) * 1rem) + (var(--font-size-delta) * var(--sizing-70-20)));
            color: var(--default-copy-color);
        }

        nav span {
            font-size: 0.8em;
        }

        ul:hover li a:hover span,
        :global(.page:not(.introduction)) li[aria-current="page"] span,
        :global(.page:not(.introduction) ul:hover) li[aria-current="page"]:hover span {
            border-bottom: 4px solid transparent;
        }
    }

    @media (min-width: 70rem) {
        nav {
            padding-top: var(--header-top-padding);
        }
    }
</style>

<!-- Represents the top-level navigation -->
<nav aria-label="Main navigation" tabindex="0" style="--hamburger-icon: {encodedHamburgerIcon}; --close-icon: {encodedCloseIcon}">
    <ul>
        <li aria-current="{active === undefined || active === 'work' ? 'page' : undefined}">
            <a data-content="Work" rel="prefetch" href="#osher"><span>Work</span></a>
        </li>
        <li aria-current="{active === 'about' ? 'page' : undefined}">
            <a data-content="About" rel="prefetch" href="about/"><span>About</span></a>
        </li>
    </ul>
</nav>
