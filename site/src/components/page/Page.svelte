<script>
    import { onMount } from "svelte";

    let page;
    let _class = null;

    export let sectionName = "";
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
        pointer-events: none;
        position: fixed;
        top: 0;
        transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        transition: background-color var(--background-transition-duration);
        width: 100%;
        z-index: -2;
    }

    .page.page.boxes-and-arrows {
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

    .page::after,
    .page.introduction::after {
        background-color: #ffe6a7;
        content: "";
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        mix-blend-mode: multiply;
        pointer-events: none;
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
</style>

<div class="page {sectionName}" bind:this={page}>
    <slot></slot>
</div>