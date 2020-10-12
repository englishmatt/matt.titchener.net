<script>
    import Description from '../components/Description.svelte';

    let className = null;

    // Represents the vertical entry-offset from the page; CSS value, so must include dimension units.
    export let entryOffset = "0rem";
    export let href = null;
    export let title = null;
    export let logo = null;
    export { className as class }
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
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex: 1;
        margin-top: var(--entry-offset);
        position: relative;
    }
</style>

<!-- Represents a single entry in a {Section} -->
<div class="entry {className}" style="--entry-offset: {entryOffset}">
    <slot></slot>

    {#if title}
        <Description {title} {logo} {href}>
            <span slot="byline"><slot name="byline" /></span>
            <slot name="description" />
        </Description>
    {/if}
</div>