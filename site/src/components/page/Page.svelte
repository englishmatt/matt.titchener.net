<script>
    import { stores } from "@sapper/app";
    import { sectionClassName } from "../../stores.js";

    const { page } = stores();
    let oldUrlPath;

    // TODO: This is a hack. As of Sapper 0.27.16 there's no easy way to pass values
    // from a component/route to _layout. Ideally, the `sectionName` would be set by the
    // the requisite route and passed up to `_layout`. Instead we calculate the `sectionName`
    // below based on our own route calculus. Hopefully the above situation will change
    // one day. See for more details: https://github.com/sveltejs/sapper/issues/917

    // WARNING: All new pages (routes) MUST be added in the switch statement, otherwise they
    // receive an error class on the .page div.
    function getSectionName(urlPath, sectionName) {
        let name;

        // Determine if we're navigating...
        if (oldUrlPath === urlPath) {
            name = sectionName;
        } else {
            switch (urlPath) {
                case "/":
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
</script>

<style>

    .page {
        --primary-background-color: #ffe600;
        --secondary-background-color: #ffcf00;
        --primary-accent-color: rgba(0, 132, 255, 1);
        --transform: none;
        --timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        --selection-color: var(--primary-accent-color);
        --selection-background-color: rgba(0, 0, 0, 0.4);
        color: var(--default-copy-color);
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
        --primary-background-color: #53646b;
        --secondary-background-color: #38505e;
        --transform: translate(-61rem, -29rem) rotate(-25deg);
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
        --primary-background-color: #ff7373;
        --secondary-background-color: #f6cdeb;
        --transform: translate(-53rem, 10rem) rotate(4.5deg);
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

    .page.work :global(article) {
        width: var(--main-content-width);
        max-width: var(--max-main-content-width);
    }
</style>

<div class="page {sectionName}">
    <slot></slot>
</div>