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
</style>

{#if slots}
    {#if slots.title}
        <h3><slot name="title" /></h3>
    {/if}

    {#if slots.default}
        <div class="description-body">
            <slot />
        </div>
    {/if}
{/if}
