<script>
    import { stores } from "@sapper/app";

    const { page } = stores();

    // TODO: This is a hack. As of Sapper 0.27.16 there's no easy way to pass values
    // from a component/route to _layout. Ideally, the `sectionName` would be set by the
    // the requisite route and passed up to `_layout`. Instead we calculate the `sectionName`
    // below based on our own route calculus. Hopefully the above situation will change
    // one day. See for more details: https://github.com/sveltejs/sapper/issues/917

    // WARNING: All new pages (routes) MUST be added in the switch statement, otherwise they
    // receive an error class on the .page div.
    function getSectionName(urlPath) {
        let sectionName;

        switch (urlPath) {
            case "/":
                sectionName = "introduction";
                break;
            case "/about":
                sectionName = "about";
                break;
            default:
                sectionName = "error";
        }

        return sectionName;
    }

    $: sectionName = getSectionName($page.path);
</script>

<style>
    .page,
    .page.introduction {
        --primary-accent-color: rgba(0, 132, 255, 1);
    }

    /* TODO: Move page transitions elsewhere */
    .page::before,
    .page.introduction::before {
        background-color: var(--introduction-background-color);
        content: "";
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        transition: background-color var(--background-transition-duration);
        width: 100%;
        z-index: -2;
    }

    .page.boxes-and-arrows {
        --primary-accent-color: #8e4eff;
    }

    .page.boxes-and-arrows::before {
        background-color: #8afff2;
    }

    .page.foobar {
        --primary-accent-color: yellow;
    }

    .page.foobar::before {
        background-color: #7ac7ff;
    }

    .page.quzbaz {
        --primary-accent-color: #fff;
    }

    .page.quzbaz::before {
        background-color: #7fff64;
    }

    .page::after,
    .page.introduction::after {
        background-color: #ffe6a7;
        content: "";
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        mix-blend-mode: multiply;
        position: fixed;
        transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        transition: background-color var(--background-transition-duration), transform var(--background-transition-duration);
        z-index: -1;
        width: 100rem;
        height: 110rem;
        top: 0;
        left: 0;
        transform: translate(-60rem, 20rem) rotate(-4.5deg);
    }

    .page.boxes-and-arrows::after {
        background-color: #a5e9ff;
        transform: translate(-67rem, -19rem) rotate(25deg);
    }

    .page.foobar::after {
        background-color: #a5e9ff;
        transform: translate(-15rem, 10rem) rotate(-10deg);
    }

    .page.quzbaz::after {
        background-color: #48c4d9;
        transform: translate(-53rem, 10rem) rotate(4.5deg)
    }
</style>

<div class="page {sectionName}">
    <slot></slot>
</div>