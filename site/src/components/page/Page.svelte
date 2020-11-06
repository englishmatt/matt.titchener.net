<script>
    import { stores } from "@sapper/app";
    import { afterUpdate, tick } from "svelte";
    import { sectionClassName } from "../../stores.js";

    const { page } = stores();
    let pageComponent;
    let oldUrlPath;
    // TODO: Figure out how to pull default favicon colours from the style sheet
    let backgroundColor = "#ffcf00";
    let foregroundColor = "rgba(0, 0, 0, 0.7)";
    // TODO: Figure out how to pull the SVG from lettermark.svg
    $: faviconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='66' height='66' fill='none'%3E%3Cpath fill='${encodeURIComponent(backgroundColor)}' d='M65.03 57.33a3.22 3.22 0 01-2.96 3.45l-53.4 4.16a3.23 3.23 0 01-3.46-2.96L1 8.62a3.22 3.22 0 012.95-3.45L57.36 1a3.23 3.23 0 013.47 2.95l4.2 53.37z'/%3E%3Cpath fill='${encodeURIComponent(foregroundColor)}' d='M11 14h44v6H11v-6zM36 51V35l-8 13h-3l-8-13-.03 16H11V24h5.26L26.5 40.78 36.7 24H42v27h-6z'/%3E%3C/svg%3E`;

    // TODO: This is a hack. As of Sapper 0.27.16 there's no easy way to pass values
    // from a component/route to _layout. Ideally, the `sectionName` would be set by the
    // the requisite route and passed up to `_layout`. Instead we calculate the `sectionName`
    // below based on our own route calculus. Hopefully the above situation will change
    // one day. See for more details: https://github.com/sveltejs/sapper/issues/917

    // WARNING: All new pages (routes) MUST be added in the switch statement, otherwise they
    // receive an error class on the .page div.
    function getSectionName(urlPath, sectionName) {
        let name;
        let normalizedPath = urlPath.replace(/\/$/, "");

        // Determine if we're navigating...
        if (oldUrlPath === urlPath) {
            name = sectionName;
        } else {
            switch (normalizedPath) {
                case "":
                    name = "introduction";
                    break;
                case "/about":
                    name = "about";
                    break;
                case "/work/osher":
                    // TODO: We need classes for the page *and* the section. Implemenent a more
                    // elegant solution.
                    name = "work osher";
                    break;
                case "/work/elim-springs":
                    name = "work elimsprings";
                    break;
                case "/work/budgeting":
                    name = "work budgeting";
                    break;
                case "/work/boxes-and-arrows":
                    name = "work boxesandarrows";
                    break;
                case "/work/project-x":
                    name = "work projectx";
                    break;
                default:
                    name = "error";
            }
        }

        oldUrlPath = urlPath;
        return name;
    }

    $: sectionName = getSectionName($page.path, $sectionClassName);

    afterUpdate(async () => {
        await tick();
        backgroundColor = pageComponent &&
            getComputedStyle(pageComponent, ":after")
                .getPropertyValue("--secondary-background-color");

        foregroundColor = pageComponent &&
            getComputedStyle(pageComponent)
                .getPropertyValue("--default-copy-color");
    });
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href={faviconSvg} />
</svelte:head>

<style>
    .page {
        --primary-background-color: #ffe600;
        --secondary-background-color: #ffcf00;
        --primary-accent-color: rgb(0, 109, 207);;
        --transform: none;
        --timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        --selection-color: #fff;
        --selection-background-color: rgba(0, 0, 0, 0.6);
        color: var(--default-copy-color);
        height: 100vh;
        overflow: auto;
    }

    .page :global(::selection) {
        background-color: var(--selection-background-color);
        color: var(--selection-color);
    }

    .page::before {
        background-color: var(--primary-background-color);
        content: "";
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        transition-timing-function: var(--timing-function);
        transition: background-color var(--background-transition-duration);
        width: 100%;
        z-index: -2;
        will-change: background-color;
    }

    .page::after {
        background-color: var(--secondary-background-color);
        border-radius: 0.5rem;
        content: "";
        mix-blend-mode: var(--blend-mode, normal);
        position: fixed;
        transform: var(--transform);
        transition-timing-function: var(--timing-function);
        transition: background-color var(--background-transition-duration),
                    transform var(--background-transition-duration),
                    width var(--background-transition-duration);
        z-index: -1;
        width: 100rem;
        height: 110rem;
        top: 0;
        left: 0;
        will-change: background-color, transform, width;
    }

    /* TODO: Optimize these styles */
    .page.work::after,
    .page.about::after {
        border-radius: 0;
        width: 100%;
    }

    .page.introduction {
        --transform: translate(-40rem, 25vh) rotate(-4.5deg);
    }

    /* Boxes and Arrows */
    .page.boxesandarrows {
        --primary-accent-color: #000;
        --primary-background-color: #e07dd9;
        --secondary-background-color: #995594;
        --transform: translate(-60rem, 9rem) rotate(8deg);
        --default-copy-color: #fff;
    }

    .page.work.boxesandarrows {
        --transform: none;
    }

    /* Osher */
    .page.osher {
        --default-copy-color: #fff;
        --primary-accent-color: #ffd916;
        --primary-background-color: #0da73b;
        --secondary-background-color: #05702d;
        --transform: translate(-47rem, calc(100vh - 115%)) rotate(11deg);
    }

    .page.work.osher {
        --transform: none;
    }

    /* Budgeting */
    .page.budgeting {
        --primary-accent-color: #ffce00;
        --primary-background-color: #436172;
        --secondary-background-color: #38505e;
        --transform: translate(-59rem, -29rem) rotate(-15deg);
        --default-copy-color: #fff;
    }

    .page.work.budgeting {
        --transform: none;
    }

    /* Project X */
    .page.projectx {
        --default-copy-color: #fff;
        --primary-accent-color: #fff;
        --primary-background-color: #222;
        --secondary-background-color: #151515;
        --transform: translate(-53rem, -34rem) rotate(-6.5deg);
    }

    .page.work.projectx {
        --transform: none;
    }

    /* Error pages */
    .page.error {
        --default-copy-color: #fff;
        --primary-accent-color: #fff;
        --primary-background-color: #ff5c5c;
        --secondary-background-color: #bc2533;
        --transform: translate(-33rem, 20rem) rotate(-4.5deg);
    }

    /* Elim Springs */
    .page.elimsprings {
        --default-copy-color: #fff;
        --primary-accent-color: #353535;
        --primary-background-color:#00c3b9;
        --secondary-background-color: #00a4a4;
        --transform: translate(-53rem, 10rem) rotate(4.5deg);
    }

    .page.work.elimsprings {
        --transform: none;
    }

    .page :global(article > p:last-child::after),
    .page :global(article > section:last-child > p:last-child::after) {
        background-color: var(--primary-accent-color);
        border-radius: 2px;
        content: "";
        display: inline-block;
        height: 0.9rem;
        line-height: 0;
        margin-left: 0.4rem;
        width: 0.9rem;
    }

    .page :global(article aside) {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 0.3rem 1.9rem;
        border-radius: 4px;
        overflow: hidden;
        margin-top: 1rem;
        position: relative;
    }

    /* TODO: Introduce a distinguishing style of visited links (currently they are styled the same was unvisited). */
    .page :global(article a:link),
    .page :global(article a:visited) {
        --underline-width: 2px;
        --underline-opacity: 1;
        --link-mask-image: linear-gradient(to top, rgba(0, 0, 0, var(--underline-opacity)) calc(var(--underline-width) + 1px), black calc(var(--underline-width) + 1px));
        --link-mask-size: 100%;
        --link-mask-position: 50% 0;
        --link-mask-repeat: no-repeat;
        color: var(--primary-accent-color);
        font-weight: 700;
        background-image: linear-gradient(to top, var(--primary-accent-color) var(--underline-width), transparent var(--underline-width));
        background-position: 0 calc(100% + var(--underline-width));
        background-size: 0 var(--underline-width);
        background-repeat: no-repeat;
        border-bottom: var(--underline-width) solid transparent;
        -webkit-mask-image: var(--link-mask-image);
        -webkit-mask-size: var(--link-mask-size);
        -webkit-mask-position: var(--link-mask-position);
        -webkit-mask-repeat: var(--link-mask-repeat);
        mask-image:  var(--link-mask-image);
        mask-size: var(--link-mask-size);
        mask-position: var(--link-mask-position);
        mask-repeat: var(--link-mask-repeat);
        text-decoration: none;
        transition: background-size 200ms;
    }

    .page :global(article a:hover) {
        background-size: 100% var(--underline-width);
    }

    .page :global(article a[target="_blank"]:not(.no-new-window-icon)::after) {
        content: "\00A0🗗";
        font-weight: 400;
    }
</style>

<div class="page {sectionName || ''}" bind:this={pageComponent}>
    <slot></slot>
</div>