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
        align-items: flex-start;
        pointer-events: none;
    }

    .item {
        box-sizing: border-box;
        padding-bottom: var(--item-padding-bottom);
        padding-right: 0;
        position: relative;
        width: calc(var(--main-content-width) - var(--content-left-margin));
    }

    .item :global(img) {
        height: auto;
        object-fit: cover;
        object-position: top left;
        min-width: 77rem;
        max-height: calc(100vh - var(--site-header-height) - 7rem);
        width: 100%;
    }

    .entry:last-of-type {
        flex: 1;
    }

    .entry :global(.description) {
        margin-left: calc(var(--navigation-horizontal-padding) * 2);
        position: sticky;
        top: calc(var(--site-header-height) + var(--section-padding-top));
        margin-bottom: var(--item-padding-bottom);
    }
</style>

<!-- Represents a single entry in a {Section} -->
<!-- TODO: Figure out how to trigger fading in when item content (image) has loaded.
     Consider dispatching an event from a new Image component? -->
{#if slots}
    <div class="entry" style="--entry-offset: {entryOffset}">
        <slot></slot>

        {#if slots.item}
            <div class="item">
                <slot name="item"></slot>
            </div>
        {/if}

        {#if slots.description || slots.title}
            <Description>
                <span slot="title"><slot name="title"></slot></span>
                {#if slots.description}
                    <slot name="description" />
                {/if}
            </Description>
        {/if}
    </div>
{/if}