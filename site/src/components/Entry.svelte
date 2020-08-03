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
    }

    .item {
        box-sizing: border-box;
        max-width: calc(var(--max-main-content-width) - var(--content-left-margin));
        padding-bottom: var(--item-padding-bottom);
        padding-right: 0;
        position: relative;
        width: calc(var(--main-content-width) - var(--content-left-margin));
    }

    .item > :global(img) {
        border-radius: 6px;
        display: block;
    }

    .entry:last-of-type {
        flex: 1;
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