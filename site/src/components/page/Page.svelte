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
        --secondary-background-color: #ffe6a7;
        --primary-accent-color: rgba(0, 132, 255, 1);
        --transform: none;
        color: var(--default-copy-color);
        transition: color var(--background-transition-duration);
    }

    .page::before {
        background-color: var(--primary-background-color);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        content: "";
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        transition: background-color var(--background-transition-duration);
        width: 100%;
        z-index: -2;
    }

    .page::after {
        background-color: var(--secondary-background-color);
        content: "";
        mix-blend-mode: multiply;
        position: fixed;
        transform: var(--transform);
        transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        transition: background-color var(--background-transition-duration), transform var(--background-transition-duration);
        z-index: -1;
        width: 100rem;
        height: 110rem;
        top: 0;
        left: 0;
    }

    .page.introduction {
        --transform: translate(-60rem, 20rem) rotate(-4.5deg);
    }

    /* Boxes and Arrows */
    .page.boxesandarrows {
        --primary-accent-color: #8e4eff;
        --primary-background-color: #8afff2;
        --secondary-background-color: #a5e9ff;
        --transform: translate(-67rem, -19rem) rotate(25deg);
    }

    /* Facespace */
    .page.facespace {
        --primary-accent-color: #ff0;
        --primary-background-color: #7ac7ff;
        --secondary-background-color: #a5e9ff;
        --transform: translate(-15rem, 10rem) rotate(-10deg);
    }

    /* Boxes and Arrows */
    .page.budgeting {
        --primary-accent-color: #8e4eff;
        --primary-background-color: #8afff2;
        --secondary-background-color: #a5e9ff;
        --transform: translate(-67rem, -19rem) rotate(25deg);
    }

    /* Project X */
    .page.projectx {
        --primary-accent-color: #fff;
        --primary-background-color: #7fff64;
        --secondary-background-color: #48c4d9;
        --transform: translate(-53rem, 10rem) rotate(4.5deg);
    }

    /* Error pages */
    .page.error {
        --primary-accent-color: #fff;
        --primary-background-color: #ff7373;
        --secondary-background-color: #f6cdeb;
        --transform: translate(-53rem, 10rem) rotate(4.5deg);
    }

    /* Elim Springs */
    .page.elimsprings {
        --default-copy-color: #fff;
        --primary-accent-color: #ff6000;
        --primary-background-color: #17234d;
        --secondary-background-color: rgba(0, 0, 0, 0.377);
        --transform: translate(-53rem, 10rem) rotate(4.5deg);
    }
</style>

<div class="page {sectionName}">
    <slot></slot>
</div>