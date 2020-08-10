<script>
    let slots = $$props.$$slots;
</script>

<style>
    h3 {
        font-size: 1.6875rem;
        margin-top: -0.7rem;
        margin-bottom: 1rem;
    }

    .description-body {
        font-size: 1.125rem;
        font-weight: 500;
    }

    .description {
        align-self: flex-start;
        flex: 1;
        max-width: 25rem;
        pointer-events: all;
    }

    .description-body :global(:last-child) {
        margin-bottom: 0;
    }
</style>

{#if slots}
    <section class="description">
        {#if slots.title}
            <h3><slot name="title" /></h3>
        {/if}

        {#if slots.default}
            <div class="description-body">
                <slot></slot>
            </div>
        {/if}
    </section>
{/if}
