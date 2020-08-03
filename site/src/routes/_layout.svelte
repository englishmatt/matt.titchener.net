<script>
    import Header from '../components/page/Header.svelte';
    import Footer from '../components/page/Footer.svelte';
    import { onMount } from 'svelte';

    export let segment = 'portfolio';

    const contentId = 'content';
    let main;

    function handleWindowScroll(event) {

        if (window.pageYOffset < (window.innerHeight / 2)) {
            main.classList.remove('transformed');
        } else {
            main.classList.add('transformed');
        }
    }

    onMount(() => {
        // Ensure the background is set correctly when the page loads in to a scrolled position.
        handleWindowScroll();
    });
</script>

<style>
    main {
        --background-color: #ffe600;
        box-sizing: border-box;
        padding-left: calc(var(--site-horizontal-margin) + var(--content-left-margin));
    }

    main::before {
        background-color: var(--background-color);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        content: "";
        height: 100%;
        left: 0;
        /* mix-blend-mode: multiply; */
        pointer-events: none;
        position: fixed;
        top: 0;
        transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        transition: clip-path 300ms;
        width: 100%;
    }

    :global(main.transformed)::before {
        clip-path: polygon(0 0, 100% 0, 100% 70%, 0 30%);
    }
</style>

<Header active={segment} {contentId}/>

<svelte:window on:scroll={handleWindowScroll} />

<svelte:head>
    <title>{segment} &#183; Matt Titchener</title>
</svelte:head>

<main id="{contentId}" bind:this={main}>
    <slot></slot>
</main>
