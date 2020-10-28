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
        --entry-offset: 0rem;
        box-sizing: border-box;
        margin-top: var(--entry-offset);
        position: relative;
    }
</style>

<!-- Represents a single entry in a {Section} -->
<div class="entry {className || ''}" style="--entry-offset: {entryOffset}">
    <slot></slot>

    {#if title}
        <!-- TODO: Would like to put the if-else inside the Description component, but Svelte does not allow it. -->
        {#if $$slots.byline}
            <Description {title} {logo} {href}>
                <slot name="byline" slot="byline" />
                <slot name="description" />
            </Description>
        {:else}
            <Description {title} {logo} {href}>
                <slot name="description" />
            </Description>
        {/if}
    {/if}
</div>