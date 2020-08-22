<script>
    import { onMount, createEventDispatcher } from "svelte";
    import { sectionClassName } from "../stores.js";

    const dispatch = createEventDispatcher();

    let observer;
    let className = null;
    let section;
    let activeSectionId;

    // Handles <Section> intersection observation events. Used to update the hash of the URL
    // when the user scrolls through the content of the page.
    function handleIntersection(event) {

        let intersectingSection = event.find((x) => x.isIntersecting === true);

        if (intersectingSection !== undefined) {
            activeSectionId = intersectingSection.target.id;

            // We must check to see if the intersectingSectionId is also an empty string
            // otherwise it will attempt to send us back to the base URL.
            if (activeSectionId !== undefined && activeSectionId !== "") {
                // Using `replaceState` here is considered dangerous, however Sapper's `goto` call
                // caused issues with smooth scrolling when using anchor tags.
                history.replaceState(undefined, undefined, `#${activeSectionId}`);
                dispatch("intersect", { id: activeSectionId });

                // WARNING: Do not set state in Sapper/SSR - this will leak global data to other users.
                // TODO: Consider using session store for this?
                if (process.browser) {
                    sectionClassName.set(activeSectionId);
                }
            }
        }
    }

    onMount(() => {
        activeSectionId = location.hash;

        // TODO: Move instantiation of IntersectionObserver to parent component.
        observer = new IntersectionObserver(handleIntersection, {
            root: document.getElementById("content"),
            threshold: 0.5
        });

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    });

    export let id = null;
    export let minHeight = "calc(100vh - 7rem)";
    export { className as class };
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        min-height: var(--min-height);
        box-sizing: border-box;
    }

    section:first-of-type,
    section + section {
        padding-top: calc(var(--site-header-height) + var(--section-padding-top));
    }

    section:last-of-type {
        min-height: 100vh;
    }
</style>

<!-- Represents a collection of elements of type {Entry} -->
<section {id} class={className} style="--min-height: {minHeight}" bind:this={section}>
    <slot></slot>
</section>