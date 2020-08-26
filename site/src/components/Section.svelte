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
            activeSectionId = intersectingSection.target.parentNode.id;

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

        // TODO: Investigate passing/wrapping the Entry component with the IntersectionObserver
        // and handling events there.
        let observee = section.querySelector(".entry");

        if (!!observee) {
            activeSectionId = location.hash;

            observer = new IntersectionObserver(handleIntersection, {
                root: document.getElementById("content"),
                rootMargin: "-30% 0% -30% 0%",
                threshold: 0
            });

            observer.observe(observee);

            return () => {
                observer.unobserve(observee);
            };
        }
    });

    export let minHeight = null;
    export let id = null;
    export { className as class };
</script>

<style>
    section {
        display: flex;
        align-items: center;
        min-height: var(--min-height, calc(100vh * (2/3)));
        padding-top: calc(100vh * (1/3));
        box-sizing: border-box;
    }

    section:last-child {
        padding-top: 0;
        min-height: 100vh;
    }
</style>

<!-- Represents a collection of elements of type {Entry} -->
<section {id} class={className} style="--min-height: {minHeight}" bind:this={section}>
    <slot></slot>
</section>