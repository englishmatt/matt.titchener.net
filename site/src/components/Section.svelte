<script>
    import { onMount, createEventDispatcher } from "svelte";
    import { sectionClassName } from "../stores.js";

    const dispatch = createEventDispatcher();

    let section;

    $: isActive = section !== undefined ? $sectionClassName === section.id : false;

    // Handles <Section> intersection observation entries. Used to update the hash of the URL
    // when the user scrolls through the content of the page.
    function handleIntersection(entries) {
        entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
                let activeSectionId = section.id;

                // We must check to see if the intersectingSectionId is also an empty string
                // otherwise it will attempt to send us back to the base URL.
                if (activeSectionId !== undefined && activeSectionId !== "") {
                    dispatch("intersect", { id: activeSectionId });
                }
            }
        });
    }

    onMount(() => {
        let observer;
        let observee = intersectSelector ? section.querySelector(intersectSelector) : section;

        if (!!observee) {
            observer = new IntersectionObserver(handleIntersection, {
                root: intersectionRoot,
                rootMargin: intersectionMargin,
                threshold: intersectionThreshold
            });

            observer.observe(observee);

            return () => {
                observer.unobserve(observee);
            };
        }
    });

    export let minHeight = "calc(100vh * (2/3))";
    export let paddingTop = "calc(var(--site-header-height) + 6rem)";
    export let id = null;
    export let intersectSelector = null;
    export let intersectionMargin = "-10% 0px -10% 0px";
    export let intersectionThreshold = 1;
    export let intersectionRoot = null;
</script>

<style>
    section {
        display: flex;
        align-items: flex-start;
        min-height: var(--min-height);
        padding-top: var(--padding-top);
        box-sizing: border-box;
        transition: opacity 300ms;
    }

    :global(.js) section:not(.active) {
        opacity: 0.4;
        --default-copy-color: #000;
        color: #000;
    }

    :global(.no-js) section,
    section.active {
        opacity: initial;
    }

    section:last-child {
        margin-bottom: calc(100vh * 1/3);
    }
</style>

<!-- Represents a collection of elements of type {Entry} -->
<section id={id || ''} class="{id || ''} {isActive ? 'active' : ''}" style="--min-height: {minHeight}; --padding-top: {paddingTop}" bind:this={section}>
    <slot></slot>
</section>