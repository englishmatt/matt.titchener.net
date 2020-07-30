<script>
    // Represents the entry-offset from the page; CSS value, so must include dimension units.
    export let entryOffset = "0rem";

    // Represents bus-stop offset from the content; CSS value, so must include dimension units.
    export let busStopOffset = "calc((var(--bus-stop-diameter) + var(--bus-stop-air-gap)) * -1)";
</script>

<style>
    .entry {
        --bus-route-width: 2px;
        --bus-stop-air-gap: 3px;
        --bus-stop-diameter: 1.2rem;
        --entry-offset: 0rem;
        --bus-stop-vertical-offset: 0rem;
        --line-height: 1.462;
        --lede-font-size: calc(2.2vw - 0.22rem);       /* Magic */
        border-right: var(--bus-route-width) solid var(--bus-route-color);
        box-sizing: border-box;
        max-width: calc(var(--max-main-content-width) - var(--content-left-margin));
        padding-right: var(--main-content-right-margin);
        margin-top: var(--entry-offset);
        position: relative;
        width: calc(var(--main-content-width) - var(--content-left-margin));
        padding-bottom: 3rem;
    }

    :global(section:last-of-type) .entry:last-of-type {
        border-color: transparent;
    }

    :global(section:not(:first-of-type)) .entry:first-of-type::before {
        --height: calc(var(--site-header-height) + var(--entry-offset) + var(--section-padding-top));
        border-right: var(--bus-route-width) solid var(--bus-route-color);
        top: calc(var(--height) * -1);
        content: "";
        height: var(--height);
        position: absolute;
        width: 100%;
    }

    .entry:last-of-type {
        flex: 1;
    }

    /* TODO: Consider using SVG for circle for more consistent rendering across browsers */
    .entry::after {
        border-radius: 50%;
        border: 3px solid var(--primary-accent-color);
        box-sizing: border-box;
        content: "";
        height: var(--bus-stop-diameter);
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(calc(50% + (var(--bus-route-width) / 2)), calc(-100% - var(--bus-stop-air-gap)));
        width: var(--bus-stop-diameter);
    }

    .entry > :global(*) {
        position: relative;
        top: var(--bus-stop-vertical-offset);
    }
</style>

<!-- Represents a single entry in a {Section} -->
<div class="entry" style="--entry-offset: {entryOffset}; --bus-stop-vertical-offset: {busStopOffset}">
    <slot></slot>
</div>