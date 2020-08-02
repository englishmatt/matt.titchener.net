<script>
    import Description from '../components/Description.svelte';

    // Represents the vertical entry-offset from the page; CSS value, so must include dimension units.
    export let entryOffset = "0rem";

    let slots = $$props.$$slots;
</script>

<style>
    .entry {
        --bus-route-width: 2px;
        --bus-stop-air-gap: 3px;
        --bus-stop-diameter: 1.2rem;
        --entry-offset: 0rem;
        --lede-font-size: calc(2.2vw - 0.22rem);       /* Magic */
        --line-height: 1.462;
        --item-padding-bottom: 3rem;
        box-sizing: border-box;
        display: flex;
        margin-top: var(--entry-offset);
        position: relative;
    }

    .item {
        box-sizing: border-box;
        max-width: calc(var(--max-main-content-width) - var(--content-left-margin));
        padding-bottom: var(--item-padding-bottom);
        padding-right: var(--main-content-right-margin);
        position: relative;
        width: calc(var(--main-content-width) - var(--content-left-margin));
    }

    .item > :global(img) {
        border-radius: 6px;
    }

    .entry:last-of-type {
        flex: 1;
    }

    /* Bus route */
    .item::before {
        content: "";
        border-right: var(--bus-route-width) solid var(--bus-route-color);
        position: absolute;
        height: calc(100% - var(--bus-stop-diameter) - (var(--bus-stop-air-gap) * 2));
        right: calc(var(--bus-route-width) * -1);
        bottom: var(--bus-stop-air-gap);
    }

    :global(section:not(:first-of-type)) .entry:first-of-type::before {
        --height: calc(var(--site-header-height) + var(--entry-offset) + var(--section-padding-top));
        content: "";
        border-right: var(--bus-route-width) solid var(--bus-route-color);
        top: calc(var(--height) * -1);
        left: 0;
        max-width: calc(var(--max-main-content-width) - var(--content-left-margin));
        width: calc(var(--main-content-width) - var(--content-left-margin));
        height: calc(var(--height) - var(--bus-stop-air-gap));
        position: absolute;
    }

    :global(section:last-of-type) .entry:last-of-type .item::before {
        border-color: transparent;
    }


    .entry:last-of-type .item::before {
        height: calc(100% - var(--bus-stop-diameter) - var(--bus-stop-air-gap));
        bottom: 0;
    }

    /* Bus stop */
    /* TODO: Consider using SVG for circle for more consistent rendering across browsers */
    .item::after {
        border-radius: 50%;
        border: 3px solid var(--primary-accent-color);
        box-sizing: border-box;
        content: "";
        height: var(--bus-stop-diameter);
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(calc(50% + (var(--bus-route-width) / 2)), 0);
        width: var(--bus-stop-diameter);
    }

    .entry .item :global(img) {
        width: 100%;
    }

    :global(.description) {
        margin-left: calc(var(--navigation-horizontal-padding) * 2);
        position: sticky;
        top: calc(var(--site-header-height) + var(--section-padding-top));
        margin-bottom: var(--item-padding-bottom);
    }
</style>

<!-- Represents a single entry in a {Section} -->
{#if slots}
    <div class="entry" style="--entry-offset: {entryOffset}">
        {#if slots.default}
            <div class="item">
                <slot></slot>
            </div>
        {/if}

        {#if slots.description}
            <Description>
                <span slot="title"><slot name="title"></slot></span>
                {#if slots.description}
                    <slot name="description" />
                {/if}
            </Description>
        {/if}
    </div>
{/if}