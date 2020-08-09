<script>
    import { onMount } from "svelte";

    let page;
    let _class = null;

    export let sectionName = "";
</script>

<style>
    /* TODO: Move page transitions elsewhere */
    .page::before {
        background-color: var(--introduction-background-color);
        content: "";
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        height: 100%;
        left: 0;
        pointer-events: none;
        position: fixed;
        top: 0;
        transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        transition: background-color var(--background-transition-duration), clip-path var(--background-transition-duration);
        width: 100%;
        z-index: -2;
    }

    .page.transformed::before {
        clip-path: polygon(0 0, 130rem 0, 120rem 60rem, 0 40rem);
    }

    .page::after {
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

    .page.transformed::after {
        background-color: #a5E9ff;
        transform: translate(-50rem, -40rem) rotate(25deg);
    }
</style>

<div class="page {sectionName}" bind:this={page}>
    <slot></slot>
</div>