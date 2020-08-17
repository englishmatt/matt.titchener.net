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

    .entry:last-of-type {
        flex: 1;
    }

    .entry :global(.description) {
        margin-bottom: var(--item-padding-bottom);
    }
</style>

<!-- Represents a single entry in a {Section} -->
<!-- TODO: Figure out how to trigger fading in when item content (image) has loaded.
     Consider dispatching an event from a new Image component? -->
{#if slots}
    <div class="entry" style="--entry-offset: {entryOffset}">
        <slot></slot>

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