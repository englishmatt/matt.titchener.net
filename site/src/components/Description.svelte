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

    .byline {
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
    }

    a {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 2px solid var(--primary-accent-color);
        border-radius: 4px;
        text-decoration: none;
        color: var(--primary-accent-color);
        transition: border-color var(--background-transition-duration), color var(--background-transition-duration);
        margin-top: 0.6rem;
    }
</style>

{#if slots}
    <section class="description">
        {#if slots.title}
            <h3><slot name="title" /></h3>
        {/if}

        <slot name="byline"><span class="byline">(2003) IA, UI design, visual design</span></slot>

        {#if slots.default}
            <div class="description-body">
                <slot></slot>
                <a href="/boxes-and-arrows">Read more</a>
            </div>
        {/if}
    </section>
{/if}
